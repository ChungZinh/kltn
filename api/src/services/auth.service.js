const { NotFoundResponse } = require("../core/error.response");
const User = require("../models/user.model");
const Role = require("../models/role.model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { generateTokens, verifyRefreshToken } = require("../auth/authUtils");
const KeyTokenService = require("../services/keyToken.service");

class AuthService {
  static async loginAdmin({ email, password }) {
    // check if user exists
    const user = await User.findOne({ email }).lean();
    if (!user) {
      throw new NotFoundResponse("User not found");
    }

    // get role of user
    const role = await Role.findById(user.role);
    if (!role) {
      throw new NotFoundResponse("Role not found");
    }

    // check if user is admin
    if (role.name !== "admin") {
      throw new NotFoundResponse("User is not admin");
    }

    // check if password is correct
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new NotFoundResponse("Invalid password");
    }

    // create token
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs1",
        format: "pem",
      },
    });

    const token = await generateTokens({ userId: user._id, email }, privateKey);

    const tokens = await KeyTokenService.generateKeyToken({
      userId: user._id,
      publicKey,
      privateKey,
      refreshToken: token.refreshToken,
    });

    return {
      user,
      token: token.accessToken,
    };
  }

  static async registerAdmin(req) {
    const { email, password, fullName } = req.body;

    // check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      throw new NotFoundResponse("User already exists");
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // add role to user
    const role = await Role.findOne({ name: "admin" });

    if (!role) {
      throw new NotFoundResponse("Role not found");
    }

    // create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      fullName,
      role: role._id,
    });

    await newUser.save();

    return newUser;
  }
}

module.exports = AuthService;

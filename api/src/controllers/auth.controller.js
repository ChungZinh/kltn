const {
  CreatedResponse,
  SuccessResponse,
} = require("../core/success.response");
const AuthService = require("../services/auth.service");
class AuthController {
    static async register(req, res, next) {
      new CreatedResponse(
          {
              message: "User registered successfully",
              data: await AuthService.registerAdmin(req),
          }
      ).send(res);
    }

  static async login(req, res, next) {
    new SuccessResponse({
      message: "User logged in successfully",
      data: await AuthService.loginAdmin({
        email: req.body.email,
        password: req.body.password,
      }),
    }).send(res);
  }



}

module.exports = AuthController;

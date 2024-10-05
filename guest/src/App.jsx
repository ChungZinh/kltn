import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import FooterC from "./components/FooterC";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Recruitment from "./pages/Recruitment";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/collections" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      <FooterC />
    </>
  );
}

export default App;

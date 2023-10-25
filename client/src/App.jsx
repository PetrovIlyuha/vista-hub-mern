import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { SignUp } from "./pages/SignUp";
import NavBar from "./shared/ui/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

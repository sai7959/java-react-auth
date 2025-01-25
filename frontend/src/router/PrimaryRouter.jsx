import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "../pages/Auth/LoginPage/LoginPage";
import SignupPage from "../pages/Auth/SignupPage/SignuPage";
function PrimaryRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/Login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default PrimaryRouter;

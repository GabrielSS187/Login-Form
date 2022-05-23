import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Login } from "../../pages/Login";
import { Admin } from "../../pages/Login/Admin";

export const Home = () => {

  return (
    <BrowserRouter>
    <Routes>

      <Route  path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />

      <Route path="*"  element={<h1 className="h1-not-found">Page Not Found</h1>} />

    </Routes>
    </BrowserRouter>
  );
}

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BsFillPatchCheckFill } from "react-icons/bs"

import { Container, Header } from "./styles";

export const Admin = () => {

  const navigate = useNavigate();

  const adminName = localStorage.getItem("UserName")

  const logout = (): void => {
    localStorage.removeItem("UserName");
    window.location.reload();
  };

  useEffect(() => {
    if ( localStorage.getItem("UserName") === null ) {
      navigate("/");
    }
  }, [adminName, navigate]);

  return (
    <Container>
      <Header animate={{scale: [ 0, 0, 1, 1, 1 ]}} transition={{ duration: 1.5 }}
      >Usuário: <strong>{adminName}</strong> logado <span><BsFillPatchCheckFill /></span></Header>
      <h1>Admin</h1>
      <h2>Hellow {adminName}!</h2>
      <button onClick={logout}>Logout</button>
    </Container>
  );
};
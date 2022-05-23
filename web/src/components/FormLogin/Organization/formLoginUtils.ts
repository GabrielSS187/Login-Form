import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { api } from "../../../services/api";

import * as yup from "yup";

export const FormLoginUtils = () => {

  const navigate = useNavigate();

  const [ formLogin, setFormLogin ] = useState<{name: string, password: string}>({
    name: "",
    password: ""
  });
  const {  name, password } = formLogin;

  const [ statusLogin, setStatusLogin ] = useState<{type: string, message: string}>({
    type: "",
    message: ""
  }) ;

  const onChangeLogin = ( event: { target: { name: string; value: any; }; } ) => {
      setFormLogin({ ...formLogin, [ event.target.name ]: event.target.value });
  };

  const clearInputsLogin = () => {
      setFormLogin({
        name: "",
        password: ""
      });
  };

//* Enviar o formúlario para o backend
const sendValuesFormLogin = async ( event: { preventDefault: () => void} ) => {
  event.preventDefault();

  if ( !(await validate()) ) return;

  await api.post("/login", { name, password }).then((data) =>{
    localStorage.setItem("UserName", name);
    clearInputsLogin();
     navigate("/admin");
  }).catch((error) => {
    console.log(error.message);
    setStatusLogin({
      type: "Error",
      message: "Error: Nome ou senha incorretas!"
    });
  });
};

//* Validando o os campos de formúlario
const validate = async () => {
  const validateSchema = yup.object().shape({
    password: yup.string().required("Error: E necessário preencher a sua senha de usuário!!"),
    name: yup.string().required("Error: E necessário preencher o seu nome de usuário!")
  });

  try {
    await validateSchema.validate(formLogin)
    return true;
  } catch (error: any ) {
    setStatusLogin({
      type: "Error",
      message: error.errors
    })
    return false
  };
};

  return { formLogin, onChangeLogin, statusLogin, sendValuesFormLogin };
};
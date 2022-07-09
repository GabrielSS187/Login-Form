// import { useForm } from "../../../hooks/customHookForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../../services/api";

import * as yup from "yup";


export const FormCadasterUtils = () => {

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/");
  };

  const [ formCadaster, setFormCadaster ] = useState<{name: string, password: string}>({
    name: "",
    password: ""
  });
  const {  name, password } = formCadaster;

  const [ statusCadaster, setStatusCadaster ] = useState<{type: string, message: string}>({
    type: "",
    message: ""
  }) ;

  const onChangeCadaster = ( event: { target: { name: string; value: any; }; } ) => {
      setFormCadaster({ ...formCadaster, [ event.target.name ]: event.target.value });
  };

  const clearInputs = () => {
      setFormCadaster({
        name: "",
        password: ""
      });
  };

//* Enviar o formúlario para o backend
const sendValuesFormCadaster = async ( event: { preventDefault: () => void} ) => {
  event.preventDefault();

  if ( !(await validate()) ) return;

  await api.post("/user/cadaster", { name, password }).then((data) =>{
    setStatusCadaster({ 
      type: "Success",
      message: `Parabéns, usuário: "${name}" cadastrado com sucesso!`
     });
     navigateLogin();
     clearInputs();
  }).catch((error) => {
    console.log(error.message);
    setStatusCadaster({
      type: "Error",
      message: `Error: Usuário: "${name}" já cadastrado!`
    });
  });
};

//* Validando o os campos de formúlario
const validate = async () => {
  const validateSchema = yup.object().shape({
    password: yup.string().required("Error: E necessário preencher o campo abaixo com alguma senha!")
    .min(6, "Error: A senha deve ter no minimo 6 caracteres!"),
    name: yup.string().required("Error: E necessário preencher o campo com o seu nome!")
  });

  try {
    await validateSchema.validate(formCadaster)
    return true;
  } catch (error: any ) {
    setStatusCadaster({
      type: "Error",
      message: error.errors
    })
    return false
  };
};

  return { formCadaster, statusCadaster, onChangeCadaster, sendValuesFormCadaster };
};
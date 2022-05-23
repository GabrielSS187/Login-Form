import {  useEffect } from "react";

import { FormLoginUtils } from "./Organization/formLoginUtils";
import { FormCadasterUtils } from "./Organization/formCadasterUtils";

import { useNavigate } from "react-router-dom";

import { Container, TextErros } from "./styles";
import { motion } from "framer-motion";


export const FormLogin = () => {

  //* Form Login
 const { formLogin, onChangeLogin, statusLogin, sendValuesFormLogin } = FormLoginUtils(); 
 const { formCadaster, statusCadaster, onChangeCadaster, sendValuesFormCadaster } = FormCadasterUtils();

 const navigate = useNavigate();

useEffect(() => {
  if ( localStorage.getItem("UserName") !== null ){
    navigate("/admin");
  } else {
    navigate("/");
  };
}, [navigate]);

//* Variantes para pre-animações do container "Forms"
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.3,  
      }
    }
  };

  //* Variantes para pre animações dos filhos do container "Forms"
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Container>
       <motion.ul variants={container}
        initial="hidden"
        animate="visible"
       >
       <div className="forms">  	
              <input type="checkbox" id="chk" aria-hidden="true" />

              <div className="signup">
                <motion.li variants={item}>
                    <form onSubmit={sendValuesFormCadaster}>
                        <label htmlFor="chk" aria-hidden="true">Sign up</label>
                        { statusCadaster.type === "Success" ? 
                          ( <TextErros color={"#66FF00"} >{statusCadaster.message}</TextErros> ) 
                          : 
                          ( <TextErros color={ " #f23838"}>{statusCadaster.message}</TextErros> ) 
                        }
                        <input type="text" name="name" placeholder="Nome do usuário"
                          autoComplete="on"
                          onChange={onChangeCadaster} value={formCadaster.name}
                        />
                        <input type="password" name="password" placeholder="Sua senha"
                          autoComplete="on"
                          onChange={onChangeCadaster} value={formCadaster.password}
                        />
                        <button type="submit">Sign up</button>
                  </form>
                </motion.li>
            </div>


            <div className="login">
              <motion.li variants={item}>
                  <form onSubmit={sendValuesFormLogin}>
                      <label htmlFor="chk" aria-hidden="true">Login</label>
                        { statusLogin.type === "Success" ? 
                          ( <TextErros color={"#66FF00"} >{statusLogin.message}</TextErros> ) 
                          : 
                          ( <TextErros color={" #f23838"}>{statusLogin.message}</TextErros>  ) 
                        }
                      <input type="text" name="name" placeholder="Seu nome"
                        autoComplete="on"
                        onChange={onChangeLogin} value={formLogin.name}
                      />
                      <input type="password" name="password" placeholder="Senha"
                        autoComplete="on"
                        onChange={onChangeLogin} value={formLogin.password}
                      />
                      <button type="submit">Login</button>
                  </form>
              </motion.li>
            </div>
      </div>
       </motion.ul>
    </Container>
  );
};
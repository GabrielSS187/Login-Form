import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const gradient = keyframes`
    0% {
        background-position: 0 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
`;

export const Container = styled(motion.main)`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 100px;

  font-size: 2.2rem;
  text-align: center;
  color: var(--text);

  animation: ${gradient} 15s ease infinite;
    background: linear-gradient(-1000deg, #031059 5%, #031473 50%, #0634BF 100%);
    background-size: 300% 300%;

  button {
    max-width: 220px;
    width: 90%;
    height: 55px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: var(--text);
    background-color: var(--background-color-buttons);
    font-size: 1em;
    font-weight: bold;
    /* margin-top: 20px; */
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
  }
  button:hover{
    background-color: var(--message-error);
  }
`; 

export const  Header = styled(motion.header)`
  width: 100%;
  height: 30px;
  font-size: 0.995rem;
  background-color: var(--background-color-buttons);

  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  gap: 5px;
  padding-left: 10px;

  span {
    color: var(--message-success);
    display: flex;
    align-items: center;
  }
`;
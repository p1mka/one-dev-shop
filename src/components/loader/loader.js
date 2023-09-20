import styled from "styled-components";

export const Loader = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
    width: 25px;
    height: 25px;
    border:5px solid gray;
    border-radius: 50%;
    border-left-color: transparent;
    animation: loader 1s infinite;
  
    @keyframes loader {
      0% {
        transform: rotate(0deg)
      }
      100% {
        transform(rotate(360deg))
      }
    }

`;

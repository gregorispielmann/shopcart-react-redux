import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  //CSS RESET
  * {
    outline: 0;
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  table {
    border-collapse:collapse;
    border-spacing:0;
  }
  fieldset,img {
    border:0;
  }
  address,caption,cite,code,dfn,em,strong,th,var {
    font-style:normal;
    font-weight:normal;
  }
  ol,ul {
    list-style:none;
  }
  caption,th {
    text-align:left;
  }
  h1,h2,h3,h4,h5,h6 {
    font-size:100%;
    font-weight:normal;
  }
  q:before,q:after {
    content:'';
  }
  abbr,acronym {
    border:0;
  }
  *:focus {
    outline: 0;
  }
  button {
    cursor: pointer;
  }
  //END CSS RESET

  body {
    width: 100%;
    height: 100%;
    background: white;
    color: black;

    font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1 {
    color: #536E7A;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

`;

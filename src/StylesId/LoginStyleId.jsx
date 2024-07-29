// LoginStyles.js
import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto; /* Permite que el contenedor tenga altura automática en función del contenido */
  max-width: 1000px; /* Aumenta el ancho máximo del contenedor */
  margin: 100px auto; /* Ajusta el margen superior para mover el contenedor hacia abajo y centrarlo horizontalmente */
  background: #f4f4f4;
  padding: 50px; /* Aumenta el padding para hacer el contenedor más grande en su interior */
  border-radius: 12px; /* Ajusta el radio de borde para un redondeo más suave */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Aumenta el tamaño de la sombra para mayor definición */
`;

export const FormGroup = styled.div`
  margin-bottom: 30px; /* Aumenta el margen entre los campos de formulario */
  width: 500px;
  display: flex;
  flex-direction: column;
  
  label {
    margin-bottom: 15px; /* Aumenta el espacio entre la etiqueta y el campo de entrada */
    font-weight: bold;
    color: #333;
  }
`;

export const Input = styled.input`
  padding: 20px; /* Aumenta el padding para hacer el campo de entrada más alto */
  font-size: 20px; /* Ajusta el tamaño de la fuente */
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  width: 100%;
  box-sizing: border-box; /* Asegura que el padding se incluya en el ancho total del campo de entrada */
  
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 6px rgba(0, 123, 255, 0.5);
  }
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 20px; /* Aumenta el padding para hacer el botón más grande */
  font-size: 22px; /* Ajusta el tamaño de la fuente del botón */
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 18px; /* Ajusta el tamaño de la fuente del mensaje de error */
  margin-bottom: 30px; /* Aumenta el espacio debajo del mensaje de error */
`;

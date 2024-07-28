import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
  background: #d7d1d1; /* Fondo blanco para destacar el contenido */
  padding: 40px; /* Espacio interno */
  border-radius: 8px;
  width: 700px;
  max-width: 800px; /* Ancho máximo del contenedor */
  margin: 40px auto; /* Mueve el contenedor hacia abajo y lo centra */
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; /* Organiza los botones en una columna */
  gap: 20px; /* Espacio entre los botones */
  align-items: center; /* Centra los botones */
`;

export const UpdateProfileButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const AdminSectionButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #dc3545;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

export const Textos =styled.a`
  color: #ff5733;
`;

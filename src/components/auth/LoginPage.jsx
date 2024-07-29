import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../service/UserService";
import { AuthContainer, ErrorMessage, FormGroup, Input, SubmitButton } from "../../StylesId/LoginStyleId";


function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await UserService.login(email, password)
      console.log(userData)
      if (userData.token) {
        localStorage.setItem('token', userData.token)
        localStorage.setItem('role', userData.role)
        navigate('/profile')
        window.location.reload();
      } else {
        setError(userData.message)
      }

    } catch (error) {
      console.log(error)
      setError(error.message)
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  }


  return (
    <div className="background-image">
      <AuthContainer>
        <h2>Login</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <label>Email:</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup>
            <label>Contraseña:</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormGroup>
          <SubmitButton type="submit">Login </SubmitButton>
        </form>
      </AuthContainer>
    </div>
  )

}

export default LoginPage;
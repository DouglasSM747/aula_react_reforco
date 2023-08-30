import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Container,
  Input,
  StyledForm,
  StyledLabel,
} from "../../styles/Global.style";
import { User, doLogin } from "../../services/login.service";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user: User = await doLogin(username, password);

      navigate("/products", { state: { user: user } });

      sessionStorage.setItem("isAdmin", user.isAdmin ? "true" : "false");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <StyledForm onSubmit={handleLogin}>
        <div>
          <StyledLabel>Email:</StyledLabel>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <StyledLabel>Password:</StyledLabel>
          <Input
            type="password"
            id="username"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button $width="50%">Login</Button>
      </StyledForm>
    </Container>
  );
}

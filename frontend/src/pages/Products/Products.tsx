import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Product, fetchProducts } from "../../services/product.service";
import { Container } from "../../styles/Global.style";
import ListProducts from "./components/ListProducts/ListProducts";
import { useLocation } from "react-router-dom";
import { User } from "../../services/login.service";

export default function Products() {
  const { state } = useLocation();

  const { data, error, loading } = useFetch<Product[]>(fetchProducts);
  const [user, SetUser] = useState<User>();

  useEffect(() => {
    SetUser(state.user);
  }, []);

  if (loading) return <Container>Carregando...</Container>;

  if (error) return <Container>{error}</Container>;

  if (data && user) {
    return (
      <Container style={{ justifyContent: "start" }}>
        <h4>
          Bem vindo {user.isAdmin ? "Administrador: " : "Cliente: "}
          {user.email}
        </h4>

        {data && <ListProducts user={user} data={data} />}
      </Container>
    );
  }
}

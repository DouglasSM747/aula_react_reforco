import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import {
  Product,
  createProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../../services/product.service";
import {
  Button,
  Container,
  Input,
  StyledForm,
} from "../../styles/Global.style";
import ListProducts from "./components/ListProducts/ListProducts";
import { useLocation } from "react-router-dom";
import { User } from "../../services/login.service";
import { Modal } from "../../components/Modal/Modal";

export default function Products() {
  const { state } = useLocation();

  const [isOpenModalProduct, SetIsOpenModalProduct] = useState(false);

  const { data, error, loading, setData } = useFetch<Product[]>(fetchProducts);

  const [user, SetUser] = useState<User>();

  const [isProductToUpdate, SetIsProductToUpdate] = useState(false);

  const [produto, SetProduto] = useState<Product>({
    id: undefined,
    estoque: 0,
    nome: "",
    preco: 0,
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    SetProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value,
    }));
  }

  async function InsertOrUpdateProduct() {
    if (!isProductToUpdate) {
      const newProduct: Product = await createProduct(produto);

      if (newProduct !== null && data !== null) {
        setData([...data, newProduct]);
      }
    } else {
      await updateProduct(produto);

      const newArrProduct = data?.map((prod) =>
        prod.id === produto.id ? produto : prod
      );

      if (newArrProduct !== null && newArrProduct !== undefined) {
        setData(newArrProduct);
      }
    }
  }

  async function DeleteProduto(id: string) {
    await deleteProduct(id);

    const newArrProduct = data?.filter((produto) => produto.id !== id);

    if (newArrProduct !== null && newArrProduct !== undefined) {
      setData(newArrProduct);
    }
  }

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

        {user.isAdmin ? (
          <Button
            $width="200px"
            onClick={() => {
              SetIsProductToUpdate(false);
              SetIsOpenModalProduct(true);
            }}
          >
            Cadastrar Produto
          </Button>
        ) : null}

        <Modal
          isOpen={isOpenModalProduct}
          close={() => SetIsOpenModalProduct(false)}
          title={
            isProductToUpdate ? "Atualizar Produto" : "Cadastro de Produtos"
          }
        >
          <StyledForm
            onSubmit={(e) => {
              e.preventDefault();
              InsertOrUpdateProduct();
              SetIsOpenModalProduct(false);
            }}
          >
            <Input
              placeholder="nome"
              name="nome"
              value={produto?.nome}
              onChange={handleInputChange}
            />
            <Input
              placeholder="estoque"
              name="estoque"
              value={produto?.estoque}
              onChange={handleInputChange}
            />
            <Input
              placeholder="preço"
              name="preco"
              value={produto?.preco}
              onChange={handleInputChange}
            />
            <Button>{isProductToUpdate ? "Atualizar" : "Cadastrar"}</Button>
          </StyledForm>
        </Modal>

        {data && (
          <ListProducts
            onClickRemove={(product: Product) => DeleteProduto(product.id!)}
            onClickEdit={(product: Product) => {
              SetProduto(product);
              SetIsProductToUpdate(true);
              SetIsOpenModalProduct(true);
            }}
            user={user}
            data={data}
          />
        )}
      </Container>
    );
  }
}

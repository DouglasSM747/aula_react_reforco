import DataTable from "../../../../components/DataTable/DataTable";
import GridView from "../../../../components/GridView/GridView";
import { User } from "../../../../services/login.service";
import { Product } from "../../../../services/product.service";
import { Button, Row } from "../../../../styles/Global.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ListProducts({
  user,
  data,
}: {
  user: User;
  data: Product[];
}) {
  if (user.isAdmin) {
    const labels = ["Nome", "Estoque", "Preço", "Ações"];
    const accessors = ["nome", "estoque", "preco", "actions"];

    const renderActions = () => (
      <Row>
        <Button $width="60px">Remover</Button>
        <Button $width="60px">Editar</Button>
      </Row>
    );

    return (
      <div style={{ width: "50%" }}>
        <DataTable
          data={data}
          labels={labels}
          accessors={accessors}
          renderActions={renderActions}
        />
      </div>
    );
  } else {
    const renderProduct = (product: Product) => (
      <div>
        <h3>{product.nome}</h3>
        <p>Price: ${product.preco}</p>
        <Button>
          <FontAwesomeIcon icon={faCartShopping} />
        </Button>
      </div>
    );

    return <GridView data={data} render={renderProduct} />;
  }
}

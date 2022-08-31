import styled from "styled-components";
import Database from "../Hooks/database";
import Product from "./Product";



const Products = () => {
  const[DataProduct] =Database();

  return (
    <Container>
      {DataProduct.map((item) => (
        <Product item={item.img} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
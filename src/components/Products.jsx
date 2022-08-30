import styled from "styled-components";
import Database from "../Hooks/database";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const[Data] =Database();
const Products = () => {


  return (
    <Container>
      {Data.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;

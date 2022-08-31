import styled from "styled-components";
import Database from "../Hooks/database";

import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";



const Categories = () => {
  const[DataCat] =Database();

console.log(DataCat);

  return (
    <Container>
      {DataCat.map((item) => (
        <CategoryItem item={item.img} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;
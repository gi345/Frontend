import { styled } from "@mui/system"; // Correct import for MUI
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

// Styled Container using MUI's styled utility
const Container = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "20px",
  justifyContent: "space-between",
  ...mobile({ padding: "0px", flexDirection: "column" }),
}));

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

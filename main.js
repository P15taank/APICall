import { getData } from "./http.js";

const getProducts = async () => {
  try {
    const productC = await getData("https://fakestoreapi.com/products/categories");
    console.log("Product Category: ", productC);
    const productList = await getData("https://fakestoreapi.com/products");
    console.log("ProductList: ", productList);
  } catch (err) {
    console.log("Err: ", err);
  }
};

getProducts();
import axios from "axios";
import {useState, uesEffect, useEffect} from "react";
import { ProductsIndex } from "./ProductsIndex";
import { Signup } from "./Signup";
import { ProductNew } from "./ProductNew";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);
  return (
    <div>
      <ProductNew />
      <br />
      <hr />
      <Signup />
      <br />
      <hr />
      <Login />
      <LogoutLink />
      <br />
      <hr />
      <ProductsIndex products = {products}/> 
    </div>
  );
}
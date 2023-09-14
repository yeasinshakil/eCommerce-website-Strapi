import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from '../Products/Products';
import "./Home.scss";
import { useContext, useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } = useContext(Context)
  useEffect(() => {
    getProducts()
    getCategory()
  }, [])

  const getCategory = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      // console.log(res)
      setCategories(res)

    })
  }
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };
  // console.log(categories)
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText='popular products' />
        </div>
      </div>
    </div>
  )
};

export default Home;

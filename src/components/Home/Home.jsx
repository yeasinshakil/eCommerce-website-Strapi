import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from '../Products/Products';
import "./Home.scss";
import { useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import axios from "axios";
const Home = () => {
    useEffect(() => {
       getCategory()
    }, [])

    const getCategory = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => console.log(res))
    }
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category />
                    <Products headingText='popular products' />
                </div>
            </div>
        </div>
    )
};

export default Home;

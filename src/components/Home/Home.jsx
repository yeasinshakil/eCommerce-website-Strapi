import Newsletter from "../Footer/Newsletter/Newsletter";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from '../Products/Products';
import "./Home.scss";
const Home = () => {
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category />
                    <Products headingText='popular products'/>
                </div>
            </div>
        </div>
    )
};

export default Home;

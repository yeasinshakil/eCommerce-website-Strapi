
import { useNavigate } from "react-router-dom";
import "./Category.scss";
const Category = ({ categories }) => {
    console.log(process.env.REACT_APP_STRIPE_APP_DEV_URL)
    const navigate = useNavigate();
    return (<div className="shop-by-category">
        <div className="categories">
            {categories?.data?.map((item) => (
                <div
                    key={item.id}
                    className="category"
                    onClick={() => navigate(`/category/${item.id}`)}
                >
                    <img
                        src={item?.attributes?.image?.data?.attributes?.url
                        }
                    />
                </div>
            ))}
        </div>
    </div>)
};

export default Category;

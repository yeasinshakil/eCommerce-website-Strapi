import "./Product.scss";

import { useNavigate } from "react-router-dom";
const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img
                    src={
                        
                        data?.productImage?.data[0]?.attributes?.url
                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#2547;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;

import "./SingleProduct.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import prod from '../../assets/products/earbuds-prod-2.webp'
import RelatedProducts from './RelatedProducts/RelatedProducts'
const SingleProduct = () => {
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img
                            src={prod}
                        />
                    </div>
                    <div className="right">
                        <span className="name">Headphones</span>
                        <span className="price">&#2547;499</span>
                        <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laboriosam vel nostrum laborum! Fugit maxime sunt excepturi molestias ex unde hic facilis repellendus minus? Velit, vel corrupti. Sequi, cum illum, obcaecati nihil beatae tempore totam magnam quasi neque sint consequuntur possimus perspiciatis nulla nam veritatis at, itaque facilis voluptatum vero.</span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>2</span>
                                <span>+</span>
                            </div>
                            <button
                                className="add-to-cart-button"

                            >
                                <FaCartPlus size={20} />
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Category:{" "}
                                <span>
                                    Category
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );;
};

export default SingleProduct;

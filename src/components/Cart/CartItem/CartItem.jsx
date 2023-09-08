import './CartItem.scss'
import prod from '../../../assets/products/headphone-prod-2.webp'
import { MdClose } from "react-icons/md";
const CartItem = () => {
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="image-container">
                    <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                    <span className="name">Product name</span>
                    <MdClose />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>2</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>x</span>
                        <span>&#2547; 545</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

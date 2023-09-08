import "./Header.scss";
import { TbSearch } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import { CgShoppingCart } from 'react-icons/cg'
import { useEffect, useState } from "react";
import Cart from '../Cart/Cart'
const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true)
        } else { setScrolled(false) }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
    return (<>
        <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">EMMAJOHNSTORE</div>
                <div className="right">
                    <span><TbSearch /></span>
                    <span><AiOutlineHeart /></span>
                    <span className=" cart-icon" onClick={()=> setShowCart(true)}>
                        <CgShoppingCart />
                        <span>5</span>
                    </span>
                </div>
            </div>
        </header>
       
        {showCart && <Cart />}
    </>);
};

export default Header;

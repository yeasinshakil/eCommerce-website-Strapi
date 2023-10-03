import "./Header.scss";
import { TbSearch } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import { CgShoppingCart } from 'react-icons/cg'
import { useContext, useEffect, useState } from "react";
import Cart from '../Cart/Cart';
import Search from './Search/Search'
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";
const Header = () => {
    const { cartCount, showCart, setShowCart } = useContext(Context);
    const [searchModal, setSearchModal] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate()
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
                    <li onClick={()=> navigate('/')}>Home</li>
                    <li>About</li>
                    <li onClick={()=> navigate('/')}>Categories</li>
                </ul>
                <div className="center" onClick={()=> navigate('/')}>EMMAJOHNSTORE</div>
                <div className="right">
                    <span><TbSearch onClick={()=> setSearchModal(true)} /></span>
                    <span><AiOutlineHeart /></span>
                    <span className=" cart-icon" onClick={()=> setShowCart(true)}>
                        <CgShoppingCart />
                        <span>{cartCount}</span>
                    </span>
                </div>
            </div>
        </header>
       
        {showCart && <Cart />}
        {searchModal && <Search setSearchModal={setSearchModal} />}
    </>);
};

export default Header;

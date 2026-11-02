import { Link } from "react-router-dom";
import logo from "../assets/Caps-Shop-Logo.png";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./useContext";
import { useSelector } from "react-redux";

function Header() {
    const {favoriteItems, vueSlideCart, vueFavoriteSlider} = useContext(AppContext)
    const cartItems = useSelector(state => state.cart.cartItems);
    
    const [user, setUser] = useState(null);
    useEffect(() => {
        async function getUser() {
            const token = localStorage.getItem("token");
            const res = await fetch("https://dummyjson.com/auth/me", {
                headers: { 'Authorization': `Bearer ${token} ` },
            });
            const data = await res.json();
            setUser(data);
            console.log(data);
        }
        getUser();
    }, []);
    return (
        <header>
            <Link className="logo-link" to="/"><img src={logo} className="logo" alt="React logo" /></Link>
            <ul>
                <li><Link className="header-link" to="/acceuil">Acceuil</Link></li>
                <li><Link className="header-link" to="/service">Service</Link></li>
                <li><Link className="header-link" to="/contact">Contact</Link></li>
                {user && user.id ? <li><img width="50" height="50" src={user.image} alt="profile" /></li> : <li><Link className="header-link" to="/login">Login</Link></li>}
                <li><button className="shopping-cart" onClick={vueSlideCart}><FaShoppingCart /> {cartItems.length}</button></li>
                <li><button className="favorite-slider" onClick={vueFavoriteSlider}><FaHeart />{favoriteItems.length}</button></li>
                <li><span></span></li>
            </ul>
        </header>
    );
}

export default Header;
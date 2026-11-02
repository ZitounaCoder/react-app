import { useState } from "react";
import { FaShoppingCart, FaRegStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";



function Card({ item, addToFavorite }) {
     const dispatch = useDispatch();

    const [count, setCount] = useState(1)
    function minus() {
        setCount(count > 1 ? count - 1 : 1)
    }

    function plus() {
        setCount(count + 1)
    }

    return (
        <div className="item-card" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price} DH</p>
            <div className="counter">
                <button className="counter-btn" onClick={minus}>-</button>
                <span className="count" >{count}</span>
                <button className="counter-btn" onClick={plus}>+</button>
            </div>
            <div className="card-actions">
                <button className="cart-btn" onClick={() => dispatch(addToCart(item))}><FaShoppingCart /> Add to Cart</button>
                <button className="favorite" onClick={() => addToFavorite(item)}><FaRegStar /> Favorite</button>
                <Link to={`/detail/${item.id}`} className="detail-link">Detail</Link>
            </div>
        </div>
    )
}
export default Card;
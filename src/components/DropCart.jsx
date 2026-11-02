import Cart from './cart'
import { useSelector, useDispatch } from 'react-redux'
import { plusQte, minusQte } from '../redux/cartSlice'

function DropCart() {
    const cartItems = useSelector(state => state.cart.cartItems)
    const total = useSelector(state => state.cart.total)

    const dispatch = useDispatch()

    return (
        <div className="cart-drop">
            <h2>Shopping Cart</h2>
            <div className="cart-total">
                <h3>Montant Total :</h3>
                <p>{total} $</p>
            </div>
            {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <Cart
                        plusQte={() => dispatch(plusQte(item))}
                        minusQte={() => dispatch(minusQte(item))}
                        key={item.id ?? index}
                        item={item}
                    />
                ))
            ) : (
                <p className="empty-cart">
                    Your cart is empty
                </p>
            )}
        </div>
    )
}
export default DropCart;
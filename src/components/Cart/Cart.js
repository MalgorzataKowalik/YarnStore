import { useContext } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import styles from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    const addItemHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }

    const removeItemHandler = id => {
        cartCtx.removeItem(id)
    }

    const cartItems = cartCtx.items.map(item => <CartItem
        key={item.id}
        item={item}
        onRemove={removeItemHandler.bind(null, item.id)}
        onAdd={addItemHandler.bind(null, item)}/>)

    const roundedTotalAmount = parseFloat(cartCtx.totalAmount).toFixed(2)

    const emptyCart = cartCtx.items.length === 0

    return (
        <Modal onCloseModal={props.onCloseCart}>
            <ul className={styles['cart-items']}>
                {cartItems}
            </ul>
            <div className={styles.total}>
                <span>total amount</span>
                <span>{roundedTotalAmount} zł</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onCloseCart}>Close</button>
                {!emptyCart && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
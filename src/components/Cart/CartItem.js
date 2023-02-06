import styles from './CartItem.module.css'

const CartItem = (props) => {
    const item = props.item
    const priceText = `${item.price.toFixed(2)} zł`

    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{item.name}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>{priceText}</span>
                    <span className={styles.amount}>x {item.amount}</span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
}

export default CartItem
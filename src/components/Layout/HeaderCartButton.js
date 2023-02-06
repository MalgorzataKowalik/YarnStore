import { useContext, useEffect, useState } from 'react'
import { IoCart } from 'react-icons/io5'
import CartContext from '../../store/cart-context'
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const [btnIsHightlighted, setButtonIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)
    const numOfItemsInCart = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)

    const {items: cartCtxIems} = cartCtx

    const btnClasses = `${styles.button} ${btnIsHightlighted ? styles.bump : ''}`

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return
        }
        setButtonIsHighlighted(true);

        const resetClassesTimer = setTimeout(() => {
            setButtonIsHighlighted(false)
        }, 300)

        return () => {clearTimeout(resetClassesTimer)}

    }, [cartCtxIems])

    return (
        <>
            <button className={btnClasses} onClick={props.onOpenCart}>
                <IoCart className={styles.icon}/>
                <span>Your Cart</span>
                <span className={styles.amount}>{numOfItemsInCart}</span>
            </button>
        </>
    )
}

export default HeaderCartButton
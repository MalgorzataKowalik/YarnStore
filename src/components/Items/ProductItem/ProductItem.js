import { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import styles from './ProductItem.module.css'
import emptyPhoto from '../../../assets/products/empty.jpg'
import ProductItemForm from './ProductItemForm'

const ProductItem = (props) => {
    const cartCtx = useContext(CartContext)

    const price = `${props.item.price}zł`
    const item = props.item

    const addItemToCartHandler = (amount) => {
        cartCtx.addItem({
            id: item.id,
            name: item.name,
            description: item.description,
            price: props.item.price,
            details: item.details,
            amount: amount
          })
    }

    return (
        <li className={styles.item}>
            <div className={styles['product-info']}>
                <div className={styles.photo}>
                    <img src={item.picture ?? emptyPhoto} alt='product'></img>
                </div>
                <div>
                    <h3>{item.name} {item.details && <span className={styles.details}>{item.details}</span>}</h3>
                    <div className={styles.description}>{item.description}</div>
                    <div className={styles.price}>{price}</div>
                </div>
            </div>
            <ProductItemForm itemId={item.id} onAddItemToCart={addItemToCartHandler}/>
        </li>
    )
}

export default ProductItem
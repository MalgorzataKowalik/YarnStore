import { useRef, useState } from 'react'
import Input from '../../UI/Input'
import styles from './ProductItemForm.module.css'

const ProductItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const inputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredValueStr = inputRef.current.value
        const enteredValue = +enteredValueStr
        if (enteredValueStr.trim().length === 0) {
            setAmountIsValid(false);
            return
        } else {
            if (!amountIsValid) {
                setAmountIsValid(true)
            }
            props.onAddItemToCart(enteredValue)
        }
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={inputRef}
                label='amount'
                input={{
                    id:'amount' + props.itemId,
                    type:'number',
                    min:'1',
                    max:'99',
                    step:'1',
                    defaultValue: '1'}}/>
            <button type='submit'>+ Add</button>
            {!amountIsValid && <p>Please enter amount between 1 and 99</p>}
        </form>
    )
}

export default ProductItemForm
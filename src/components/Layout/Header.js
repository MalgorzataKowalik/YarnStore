import React from 'react';
import styles from './Header.module.css';
import headerImg from '../../assets/header.jpeg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Wooland</h1>
                <HeaderCartButton onOpenCart={props.onOpenCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={headerImg} alt='header background'/>
            </div>
        </React.Fragment>
    )
}

export default Header
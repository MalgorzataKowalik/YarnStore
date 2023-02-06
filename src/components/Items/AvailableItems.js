import Card from '../UI/Card';
import styles from './AvailableItems.module.css'
import ProductItem from './ProductItem/ProductItem';
import flora from '../../assets/products/flora.jpg';
import kidSilk from '../../assets/products/kid-silk.jpg'


const DUMMY_ITEMS = [
    {
      id: 'i1',
      name: 'Drops Flora',
      description: '65% wool, 35% alpaca',
      price: 10.99,
      details: '09 amethyst',
      picture: flora
    },
    {
      id: 'i2',
      name: 'Drops Kid-Silk',
      description: '75% Mohair, 25% silk',
      price: 21.99,
      details: '06 blue mist',
      picture: kidSilk
    },
    {
      id: 'i3',
      name: 'Go Handmade Tencel Bamboo',
      description: '60% bamboo, 40% tencel',
      price: 17.99,
    },
    {
      id: 'i4',
      name: 'Rellana Organic Merin Tweed',
      description: '75% merino, 25% polyamide',
      price: 19.99,
    },
  ];

const AvailableItems = () => {
    return (
        <section>
            <Card>
                <ul className={styles.items}>
                    {DUMMY_ITEMS.map((item => {
                        return <ProductItem
                          key={item.id}
                          item={item}/>
                    }))}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableItems
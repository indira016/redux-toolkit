import ProductItem from './ProductItem';
import classes from './Products.module.css';


export const DUMMY_PRODACT=[
  {
    id:'1',
    title:"Harry Porter and Sorcerer Stone",
    price:50,
    deccription:'One of the most sold book in this month'
  },
  {
    id:'2',
    title:"Harry Porter and Fire Cup",
    price:20,
    deccription:'One of the most sold book in this month'
  },
  {
    id:'3',
    title:"Harry Porter and Sorcerer Stone",
    price:30,
    deccription:'One of the most sold book in this month'
  }
]


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODACT.map((el)=>(
 <ProductItem
 key={el.id}
 title={el.title}
 price={el.price}
 description={el.deccription}
 id={el.id}
/>
        ))}
       
      </ul>
    </section>
  );
};

export default Products;

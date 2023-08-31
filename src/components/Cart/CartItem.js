import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { addItemToCard, removeItemToCard } from '../../store/cartSlice';

const CartItem = (props) => {
  const dispatch=useDispatch()
  const { title, quantity, total, price,id } = props.item;
  console.log(props);
 
 const addItemHandler=()=>{
dispatch(addItemToCard({title,price,id}))
 }
 const removeItemHandler=()=>{
  dispatch(removeItemToCard({id}))
 }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

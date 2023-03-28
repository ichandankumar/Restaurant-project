import Modal from '../UI/Model';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Chichken Briyani', amount: 2, price: 340.00 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onclose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>350.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
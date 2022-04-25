import React, {useContext, useState} from "react";

import CartTable from "./CartContainer";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import Modal from '../UI/Modal'
import { CartContext } from "./Cart";

import styles from "./Cart.module.css";

const containerClasses = "container my-5";

const CartContent = (props) => {

  const {items, totalAmount} = useContext(CartContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitOrderHandler = () => {
      setIsSubmitted(true);
  };

  const onCloseHandler = () => {
      setIsSubmitted(false);
  }; 
  

  return (
    <React.Fragment>
    {isSubmitted && <Modal onClose={onCloseHandler}>
        <h2 className={styles.submitNote}>Succesfully placed the order!</h2>
<span className={styles.actions}>
  <button className={styles.button} onClick={onCloseHandler}>Close</button>
</span>
    </Modal>}
      <div className={`${containerClasses} ${styles.font}`}>
        <h1 className="text-center my-4 font-weight-bold ">Shopping Cart</h1>
        <div className="row">
          <div className="col-lg-8">
            <CartTable />
            {items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
          <div className="col-lg-4">
            <CartTotal 
                totalAmount={totalAmount}
                onBuy={submitOrderHandler}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartContent;

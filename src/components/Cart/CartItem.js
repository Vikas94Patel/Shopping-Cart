import { useContext } from "react";
import { CartContext } from "./Cart";
import styles from "./CartItem.module.css";

const CartItem = (props) => {

  const {removeItem, increaseItem, decreaseItem} = useContext(CartContext);

  const price = `₹${props.price.toFixed(2)}`;
  const total = props.quantity * props.price;

  const onIncreaseHandler = () => {
    increaseItem(props.id);
  };
  const onDecreaseHandler = () => {
    if (props.quantity > 1) {
      decreaseItem(props.id);
    }
    
  };

  const quantityChangeHandler = (event) => {

  };

  const removeItemHandler = () => {
    removeItem(props.id);
  };

  return (
    <li className={`${styles.li}`}>
      <div className="row my-3 d-flex align-items-center">
        <div className="col-sm-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <img src={props.img} alt="item" />
            </div>
            <div className="col-md-6">
              <p className="font-weight-bolder ">{props.name}</p>
            </div>
          </div>
        </div>
        <div className="col-md-2 ">
          <p>{price}</p>
        </div>
        <div className="col-md-2">
        <span className="border">
        <button className="btn btn-light p-0 " onClick={onDecreaseHandler}>-</button>
          <input className="w-50 border-0 text-center" type="text" min="1" onChange={quantityChangeHandler} value={props.quantity} />
          <button className="btn btn-light p-0 " onClick={onIncreaseHandler}>+</button>
          </span>
        </div>
        <div className="col-md-2">
          <p>₹{total.toFixed(2)}</p>
        </div>
        <div className="col-md-1">
          <button className="btn btn-light" onClick={removeItemHandler}>
          ✕
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

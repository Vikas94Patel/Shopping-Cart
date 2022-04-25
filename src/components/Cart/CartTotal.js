import React from "react";
import styles from './Cart.module.css';
import ColoredLine from "../UI/ColoredLine";

const CartTotal = (props) => {

    const totalAmount =  props.totalAmount;
    const shippingCharge = 200.00;

    const payableAmount = totalAmount + shippingCharge;
    
    return (
        <div className={`m-3 ${styles['bg-lightgreen']}`}>
            <h4 className="font-weight-bold">Cart Total</h4>
            <div className="row">
                <div className="col-sm-6">
                <p>Sub Total</p>
                </div>
                <div className="col-sm-6">
                <p className="text-success font-weight-bold">₹{totalAmount.toFixed(2)}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                <p>Shipping</p>
                </div>
                <div className="col-sm-6">
                {totalAmount < 1000 && <p className="font-weight-bold">Free</p>}
                {totalAmount >= 1000 && <p className="text-success font-weight-bold">₹{shippingCharge.toFixed(2)}</p>}
                </div>
            </div>
            <ColoredLine />
            <div className="row">
                <div className="col-sm-6 font-weight-bold">
                <p>Total</p>
                </div>
                <div className="col-sm-6">
                {totalAmount < 1000 && <p className="text-success font-weight-bold">₹{totalAmount.toFixed(2)}</p>}
                {totalAmount >= 1000 && <p className="text-success font-weight-bold">₹{payableAmount.toFixed(2)}</p>}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <button type="button" onClick={() => {props.onBuy()}} className="btn btn-success w-100 font-weight-bold" >Buy</button>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
import React from "react";
import ColoredLine from "../UI/ColoredLine";

const CartTable = () => {
return (
    <React.Fragment>
        <ColoredLine />
        <div className="row ">
            <div className="col-md-5">
                <h5 className="font-weight-bold">Product</h5>
            </div>
            <div className="col-md-2">
                <h5 className="font-weight-bold">Price</h5>
            </div>
            <div className="col-md-2">
                <h5 className="font-weight-bold">Quantity</h5>
            </div>
            <div className="col-md-2">
                <h5 className="font-weight-bold">Total</h5>
            </div>
            <div className="col-md-1">
            </div>
        </div>
        <ColoredLine />
    </React.Fragment>
);
};

export default CartTable;
import React from "react";

const BasketItem = (props) => {
    const {offerId, displayName, regularPrice, quantity, removeFromBasket, incQuantity, decQuantity} = props;

    return (
        <li className="collection-item item blue-grey darken-2">
            <span className="basket-text text-color">{displayName}</span>
            <span className="basket-text"> {regularPrice} руб./шт</span>
            <i className="material-icons basket-quantity" onClick={() => decQuantity(offerId)}>remove</i>
            <span className="basket-text"> х {quantity}</span>
            <i className="material-icons basket-quantity " onClick={() => incQuantity(offerId)}>add</i>
            <span className="basket-text text-color"> {regularPrice * quantity} руб.</span>
            <span className="secondary-content">
                <i className="material-icons delete-item" onClick={() => removeFromBasket(offerId)}>close</i>
            </span>
        </li>
    )
}

export default BasketItem;


import React from "react";
import BasketItem from "./BasketItem";

const BasketList = (props) => {
    const {order, handleBasketShow, removeFromBasket, incQuantity, decQuantity} = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.regularPrice * el.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active brown darken-4">Корзина</li>

            {
                order.length ? order.map(item => (
                    <BasketItem key={item.offerId} {...item}
                                removeFromBasket={removeFromBasket}
                                incQuantity={incQuantity}
                                decQuantity={decQuantity}
                    />
                )) : <li className="collection-item ">Корзина пуста</li>
            }
            <li className="collection-item active orange darken-4">Общая стоимость: {totalPrice} руб.
            <button className="btn checkout">Оформить</button>
            </li>
            <i className="material-icons close-basket" onClick={handleBasketShow}>close</i>
        </ul>
    )
}

export default BasketList;
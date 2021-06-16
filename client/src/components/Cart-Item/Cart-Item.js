import React from 'react';
import './Cart-Item.scss';

const CartItem = ({ item }) => {
    const { imageUrl, price, name, quantity} = item
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;
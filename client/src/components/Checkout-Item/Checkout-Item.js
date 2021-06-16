import React from 'react';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/Cart/Cart-Actions';
import './Checkout-Item.scss';

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
})

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
    const { imageUrl, price, name, quantity } = item
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={() => removeItem(item)} className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={() => addItem(item)} className='arrow'>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div onClick={() => clearItem(item)} className='remove-button'>&#10005;</div>
        </div>
    )
}

export default connect(null,mapDispatchToProps)(CheckoutItem);
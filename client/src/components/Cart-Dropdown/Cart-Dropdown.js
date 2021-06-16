import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import CustomButton from '../Custom-Button/Custom-Button';
import CartItem from '../Cart-Item/Cart-Item';
import { toggleCart } from '../../redux/Cart/Cart-Actions';
import { selectCartItems } from '../../redux/Cart/Cart-Selectors'
import './Cart-Dropdown.scss';

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            { cartItems.length ? 
                <div className='cart-items'>
                    {
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    }
                </div>
                :
                <span className='empty-message'>Your cart is empty</span>
            }
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCart())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default withRouter(connect(mapStateToProps)(CartDropdown));
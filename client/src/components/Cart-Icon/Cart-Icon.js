import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCart } from '../../redux/Cart/Cart-Actions';
import { selectCartItemsCount } from '../../redux/Cart/Cart-Selectors';
import './Cart-Icon.scss';

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleCart: () => dispatch(toggleCart())
})

const CartIcon = ({ toggleCart, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
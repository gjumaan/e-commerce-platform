import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/Cart/Cart-Selectors';
import CheckoutItem from '../../components/Checkout-Item/Checkout-Item';
import StripeCheckoutButton from '../../components/Stripe-Button/Stripe-Button';
import './Checkout.scss';

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
})

const Checkout = ({ cartItems, total }) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>

                <div className='header-block'>
                    <span>Description</span>
                </div>

                <div className='header-block'>
                    <span>Quantity</span>
                </div>

                <div className='header-block'>
                    <span>Price</span>
                </div>

                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem} />)
            }
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    )
}

export default connect(mapStateToProps)(Checkout);
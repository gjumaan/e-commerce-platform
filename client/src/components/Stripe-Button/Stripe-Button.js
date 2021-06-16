import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51InXZGIDTQqWPW0rNNj2x78DHEg4N2raUsPQnM8Q0UhMvxxym16yTXbZUR8DiIaloE9V8cgBNds4GtxKRmCBo5cl00HMbAVAti';

    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(resp => {
            alert('Payment Successful')
        }).catch(err => {
            console.log('Payment error: ', JSON.parse(err))
            alert('There was an issue with your payment. Please make sure you use the provided credit card')
        })
    }
    
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
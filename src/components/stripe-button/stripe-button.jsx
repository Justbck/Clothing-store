import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Gz33eA6exbqwJuMV78XM1ACmRlDdJ4HDIHG5XMKLsbFHE6OTyJm2rKpnHDoyie6ox3OORnfByGSXBF3gLrO9Pz100TAPd8HMp';


    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        
        <StripeCheckout 
            label = 'Pay Now'
            name= 'buco store'
            billingAddress
            shippingAddress
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
        
    );
};


export default StripeCheckoutButton;
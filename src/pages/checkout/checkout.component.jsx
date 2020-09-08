import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
import { motion } from 'framer-motion';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';


import './checkout.styles.scss';
import CartItem from '../../components/cart-item/cart-item.component';

const CheckoutPage = ({ cartItems, total }) => (

    <motion.div
    initial = {{ opacity:0 }}
    animate = {{ opacity:1 }} 
    exit = {{ opacity:0 }} >


    <div className = 'checkout-page'>
        <div className = 'checkout-header'>
            <div className = 'header-block'>
                <span> Product </span>
            </div>
            <div className = 'header-block'>
                <span> Description</span>
            </div>
            <div className = 'header-block'>
                <span> Quantity </span>
            </div>
            <div className = 'header-block'>
                <span> Price </span>
            </div>
            <div className = 'header-block'>
                <span> Remove </span>
            </div>  
        </div>
        {
            cartItems.map(cartItem =>
               <CheckoutItem key = {cartItem.id} cartItem = {cartItem}/>
            )
        }
        <div className = 'total'>
        <StripeCheckoutButton price = {total} />
            <span className = 'total-header'> TOTAL: ${total} </span>
        </div>
        
        
    </div>

    </motion.div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);

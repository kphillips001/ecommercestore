import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; 
  const publishableKey = 'pk_test_4W8JeaqhqrtlPJuNTpEFWxs200OBLUd1AC';

const onToken = token => {
  console.log(token);
  alert('Payment Successful')
}

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Majestic Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your price is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    /> 
  );
};

export default StripeCheckoutButton;
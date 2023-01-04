import React from 'react';
import './Payment.css';
import Paypal from '../Paypal';

function Payment({ paymentValue }) {
  return (
    <section className="payment">
      <h3>Payment</h3>

      <p>
        $
        {paymentValue}
      </p>
      <Paypal paymentValue={paymentValue} />
    </section>
  );
}

export default Payment;

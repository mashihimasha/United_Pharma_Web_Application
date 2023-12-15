import React, { useState } from 'react';
import PaymentCard from './PaymentCard';

const Payments = () => {
  const [cards, setCards] = useState([
    {
      cardType: 'Visa',
      cardNumber: '*1234',
    },
    {
        cardType: 'Visa',
        cardNumber: '*1234',
    },
    {
        cardType: 'Visa',
        cardNumber: '*1234',
    },
    {
        cardType: 'Visa',
        cardNumber: '*1234',
    },
    // Add more cards as needed
  ]);

  return (
    <div className="row">
      <h4 className="text-black my-4">Cards</h4>
      <div className="mx-auto pt-3">
        <div className="d-flex flex-row flex-wrap">
            {cards.map((card, index) => (
                <PaymentCard key={index} card={card} />
            ))}
            <button
                className="btn btn-light text-black my-3 mx-4 rounded-3 mb-4 shadow border-0 col-md-3 "
                >
                <i className="fa fa-plus-circle"></i> Add New Card
            </button>
        </div>
       
      </div>
    </div>
  );
};

export default Payments;

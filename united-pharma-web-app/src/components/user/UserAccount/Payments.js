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

  // Function to add a new card
  const addCard = () => {
    // Implement logic to add a new card to the state
  };

  // Function to remove a card
  const removeCard = (index) => {
    // Implement logic to remove the card from the state
  };

  return (
    <div className="row">
      <h4 className="text-black my-4">Cards</h4>
      <div className="mx-auto pt-3">
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {cards.map((card, index) => (
                <PaymentCard key={index} card={card} />
            ))}
        </div>
        <button
          className="btn btn-danger text-white sm my-3"
          onClick={() => removeCard(0)} // Pass the index of the card to remove
        >
          <i className="fa fa-times-circle"></i> Remove Card
        </button>
        <button
          className="btn btn-success text-white sm my-3 mx-2"
          onClick={addCard}
        >
          <i className="fa fa-plus-circle"></i> Add Another Card
        </button>
      </div>
    </div>
  );
};

export default Payments;

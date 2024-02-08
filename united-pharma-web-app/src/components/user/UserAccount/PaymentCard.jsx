import React from 'react';
import CardDetails from './CardDetails';

const PaymentCard = ({ card }) => {
  const { cardType, cardNumber } = card;
  const title = `${cardType} ${cardNumber}`;

  return (
    <CardDetails title={title}>
    </CardDetails>
  );
};

export default PaymentCard;

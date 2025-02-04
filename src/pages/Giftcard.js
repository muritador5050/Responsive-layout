import React, { useEffect, useState } from 'react';
import '../styles/gift.css';
import { giftCardPrice } from './contents';

export default function Giftcard() {
  const [display, setDisplay] = useState(false);
  const [local, setLocal] = useState([]);
  const [selectPriceId, setSelectPriceId] = useState();
  const selectedPrice = giftCardPrice.find(
    (price) => price.id === selectPriceId
  );

  function handleSelect(id) {
    setSelectPriceId(id);
  }
  useEffect(() => {
    localStorage.setItem('price', JSON.stringify(local));
    const items = JSON.parse(localStorage.getItem('price'));
    if (items) {
      setLocal(items);
    }
  }, [local]);

  return (
    <section className='gift'>
      <div className='gift__left'>
        <div className='gift__letf--card'>gift card</div>
      </div>
      <section className='gift__right'>
        <h1 className='gift__card--text'>eGift Card</h1>
        <div className='gift__right--sub'>
          <h2 className='gift__selected--price'>
            {' '}
            {selectedPrice
              ? `$${selectedPrice?.price}`
              : 'select price from below'}
          </h2>
          <p className='gift__article'>
            You can't go wrong with a gift card. Choose an amount and write a
            personalized message to make this gift your own
          </p>
          <div className='gift__amount'>
            <p className='amount-text'>Amount</p>
            <ul className='amount-list'>
              {giftCardPrice.map((price) => {
                return (
                  <li
                    onClick={() => handleSelect(price.id)}
                    className='price'
                    key={price.id}
                  >
                    ${price.price}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='gift__qty'>
            <p className='qty-text'>Quantity</p>
            <ul className='qty-list'>
              <li className='qty--vol-btn'>-</li>
              <li className='qty-number'>7</li>
              <li className='qty--vol-btn'>+</li>
            </ul>
          </div>
        </div>
        <div className='gift__owner'>
          <p className='owner-text'>Who's the gift card for?</p>
          <div className='select-owner'>
            <div className='buy--btn-div'>
              <button
                className='btn-for someone-btn'
                onClick={() => setDisplay(true)}
              >
                For someone else
              </button>
              <button
                className='btn-for myself-btn'
                onClick={() => setDisplay(false)}
              >
                For myself
              </button>
            </div>
            {display && (
              <form className='buy-form'>
                <label className='label-text'>Receipent Email*</label>
                <input type='email' className='receipent-mail' />
                <label className='label-text'>Receipent Name</label>
                <input type='text' className='receipent-name' />
                <label className='label-text'>Delivery</label>
                <input
                  type='month'
                  placeholder='Now'
                  className='delivery-date'
                />
                <label className='label-text'>Message</label>
                <input className='receipent-message' />
              </form>
            )}
            <br />
            <button className='buy-btn'>Buy Now</button>
          </div>
        </div>
      </section>
    </section>
  );
}

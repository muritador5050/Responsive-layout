import React from 'react';
import '../styles/Layout.css';
export default function Puffers() {
  return (
    <>
      <section>
        <div className='flex'>
          <div className='flex__left'>
            <h1 className='flex__text'>winter collection</h1>
            <p className='flex__text--small'>Everyday Essential Apparel</p>
            <button className='flex__btn'>Shop Now</button>
          </div>
          <div className='flex__right'>
            <img
              className='flex__img'
              src='../assets/user-pic.jpg'
              alt='big-img'
            />
          </div>
        </div>
        <div className='middle'>
          <div className='middle__page'>
            <img className='card__img' src='../assets/user-pic.jpg' alt='img' />
          </div>
          <ul className=' middle__page card__list'>
            <li>
              <div className='card__grid'></div>
              <p>name</p>
              <small>price</small>
            </li>
            <li>
              <div className='card__grid'></div>
              <p>name</p>
              <small>price</small>
            </li>
            <li>
              <div className='card__grid'></div>
              <p>name</p>
              <small>price</small>
            </li>
            <li>
              <div className='card__grid'></div>
              <p>name</p>
              <small>price</small>
            </li>
            <li>
              <div className='card__grid'></div>
              <p>name</p>
              <small>price</small>
            </li>
            <li>
              <div className='card__grid'></div>
              <p>name</p>
              <small>price</small>
            </li>
          </ul>
        </div>
        <div className='category'>
          <h2 className='category__text'>shop by category</h2>
          <ul className='category__list'>
            <li className='category__card'>
              <div className='card__flip'></div>
              <div className='card__temp'>
                <h3 className='card__name'>
                  men
                  <sub className='card__sub'>11 items</sub>
                </h3>
              </div>
            </li>
            <li className='category__card'>
              <div className='card__flip'></div>
              <div className='card__temp'>
                <h3 className='card__name'>
                  women<sub className='card__sub'>12 items</sub>
                </h3>
              </div>
            </li>
            <li className='category__card'>
              <div className='card__flip'></div>
              <div className='card__temp'>
                <h3 className='card__name'>
                  accessories<sub className='card__sub'>16 items</sub>
                </h3>
              </div>
            </li>
          </ul>
        </div>
        <div className='shop'>
          <div className='shop__img'>
            <h4>sale is on </h4>
            <p>End of the season last catch</p>
            <button>shop sale</button>
          </div>
        </div>
        <div className='social'>
          <h1 className='social__text'>find us on instagram</h1>
          <div className='social__flex'>
            <div className='social__item'></div>
            <div className='social__item'></div>
            <div className='social__item'></div>
            <div className='social__item'></div>
            <div className='social__item'></div>
            <div className='social__item'></div>
            <div className='social__item'></div>
            <div className='social__item'></div>
            <div className='social__item'></div>
            <div className='social__item'></div>
            <div className='social__item'></div>
            <div className='social__item'></div>
          </div>
        </div>
      </section>
    </>
  );
}

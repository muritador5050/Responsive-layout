import React from 'react';
import '../styles/puffers.css';
import userPic from '../assets.png/free-wearing.png';
import girl from '../assets.png/girl.png';
import { gridPictures, social } from './contents';

export default function Puffers() {
  return (
    <>
      <div className='flex'>
        <div className='flex__left'>
          <h1 className='flex__text'>winter collection</h1>
          <p className='flex__text--small'>Everyday Essential Apparel</p>
          <button className='flex__btn'>Shop Now</button>
        </div>
        <div className='container-img'>
          <img className='flex__img' src={userPic} alt='big-img' />
        </div>
      </div>
      <div className='middle'>
        <div className='middle__page'>
          <div className='middle__box'>
            <h1 className='middle__text'>new in</h1>
            <img className='card__img' src={girl} alt='img' />
            <button className='middle__btn'>shop now</button>
          </div>
        </div>

        <div className='card__list'>
          {gridPictures?.map((grid, index) => {
            return (
              <ul key={index} className='card__grid'>
                <li className='card__grid--list'>
                  <img className='grid-img' src={grid.picture} alt='grid-img' />
                </li>
                <li className='card__grid--list'>{grid.name}</li>
                <li className='card__grid--list'>{grid.price}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className='category'>
        <h2 className='category__text'>shop by category</h2>
        <ul className='category__list'>
          <li className='category__card'>
            <div className='flip-trans'>
              <img className='card__flip' src={girl} alt='card' />
              <div className='card__temp'>
                <h3 className='card__name'>
                  men
                  <sub className='card__sub'>11 items</sub>
                </h3>
              </div>
            </div>
          </li>
          <li className='category__card'>
            <div className='flip-trans'>
              <img className='card__flip' src={girl} alt='card' />
              <div className='card__temp'>
                <h3 className='card__name'>
                  women<sub className='card__sub'>12 items</sub>
                </h3>
              </div>
            </div>
          </li>
          <li className='category__card'>
            <div className='flip-trans'>
              <img className='card__flip' src={girl} alt='card' />
              <div className='card__temp'>
                <h3 className='card__name'>
                  accessories<sub className='card__sub'>16 items</sub>
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className='shop'>
        <div className='shop__deep'>
          <img className='shop__img' src={girl} alt='mw' />
          <div className='shop__text--span'>
            <h4 className='shop__text--1'>sale is on </h4>
            <p className='shop__text--2'>End of the season last catch</p>
          </div>
          <button className='shop__btn'>shop sale</button>
        </div>
      </div>
      <div className='social'>
        <h1 className='social__text'>find us on instagram</h1>
        <div className='social__flex'>
          {social.map((item, index) => {
            return (
              <ul key={index} className='social__item'>
                <li className='bg-relative'>
                  <img className='social__img' src={item.picture} alt='items' />
                  <div className='bg-absolute'>
                    #wix, #website, #freewebsite, #websitetemplate, #wix.com
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}

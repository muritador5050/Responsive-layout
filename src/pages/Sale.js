import React from 'react';
import '../styles/sub.css';
import { gridPictures } from './contents';
export default function Sale() {
  return (
    <div className='sub'>
      {gridPictures.map((grid, index) => {
        return (
          <ul key={index} className='sub__box'>
            <li className='img-bg'>
              <img className='sub__img' alt='i' src={grid.picture} />
            </li>
            <li>
              <p className='sub__name'>{grid.name}</p>
              <p className='sub__price'>{grid.price}</p>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

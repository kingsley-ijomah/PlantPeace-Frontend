import React from 'react';
import './Popular.scss';

import Cactus from '../../assets/cactus.jpg';

export default function Popular() {
  return (
    <main className='popular'>
      <h1>This Weeks Most Popular <span>And Best Selling</span></h1>

      <section className='popular__cardsSection'>
        <div className='card'>
          <img src={Cactus} />

          <div>
            <h3>Echinocereus Cactus</h3>
            <ul>
              <li>$15.00</li>
              <li>$35.00</li>
            </ul>
            <button>indoor</button>
          </div>
        </div>
        <div className='card'>
          <img src={Cactus} />

          <div>
            <h3>Echinocereus Cactus</h3>
            <ul>
              <li>$15.00</li>
              <li>$35.00</li>
            </ul>
            <button>indoor</button>
          </div>
        </div>
        <div className='card'>
          <img src={Cactus} />

          <div>
            <h3>Echinocereus Cactus</h3>
            <ul>
              <li>$15.00</li>
              <li>$35.00</li>
            </ul>
            <button>indoor</button>
          </div>
        </div>
        <div className='card'>
          <img src={Cactus} />

          <div>
            <h3>Echinocereus Cactus</h3>
            <ul>
              <li>$15.00</li>
              <li>$35.00</li>
            </ul>
            <button>indoor</button>
          </div>
        </div>
      </section>
    </main>
  );
}

// Menu.js
import React from 'react';
import mainDishImage from './pexels-enginakyurt-1487511.jpg';
import Breakfast from './pexels-solliefoto-299348.jpg';
import Dessert from './pexels-pietrozj-671956.jpg';
import BrowseAll from './pexels-ella-olsson-572949-1640772.jpg';
import Fattousht from './pexels-solliefoto-299348.jpg';
import Vegetable from './pexels-fotios-photos-1152237.jpg';
import Egg from './pexels-karolina-grabowska-4198024.jpg';
  

function Menu() {
  return (
    <section id="menu" className="menu-section">
      <h2>Popular Categories</h2>
      <div className="category-grid">
      <div
          className="menu-card"
          style={{
            backgroundImage: `url(${mainDishImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h3>Main Dish</h3>
          <p>86 dishes</p>
        </div>
        <div
          className="menu-card"
          style={{
            backgroundImage: `url(${Breakfast})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h3>Breakfast</h3>
          <p>12 breakfast dishes</p>
        </div>
        <div
          className="menu-card"
          style={{
            backgroundImage: `url(${Dessert})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h3>Dessert</h3>
          <p>48 desserts</p>
        </div>
        <div
          className="menu-card"
          style={{
            backgroundImage: `url(${BrowseAll})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h3>Browse All</h3>
          <p>255 items</p>
        </div>
      </div>

      <h2>Standout Dishes From Our Menu</h2 >
      <div className="menu-grid">
      <div
          className="menu-card"
          style={{
            backgroundImage: `url(${Fattousht})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h3>Fattoush Salad</h3>
          <p>$24.00</p>
          <span>Rating: 4.9</span>
        </div>
        <div
          className="menu-card"
          style={{
            backgroundImage: `url(${Vegetable})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h3>Vegetable Salad</h3>
          <p>$26.00</p>
          <span>Rating: 4.6</span>
        </div>
        <div
          className="menu-card"
          style={{
            backgroundImage: `url(${Egg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h3>Egg Vegi Salad</h3>
          <p>$23.00</p>
          <span>Rating: 4.5</span>
        </div>
      </div>
    </section>
  );
}

export default Menu;
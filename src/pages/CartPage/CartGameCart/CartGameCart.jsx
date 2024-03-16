import PropTypes from 'prop-types';

import './CartGameCart.css';
import { Link } from 'react-router-dom';

export default function CartGameCart({ id, imageSrc, name, price, removeGameFromCart }) {
  return (
    <div className='cart__game-card'>
      <Link className='cart__game-card-image-link' to={`/games/game/${id}`}>
        <img className='cart__game-card-image' src={imageSrc} alt='' aria-hidden />
      </Link>
      <div className='cart__game-card-description'>
        <Link className='cart__game-card-name' to={`/games/game/${id}`}>{name}</Link>
        <p className='cart__game-card-price'>${price}</p>
      </div>
      <button
        className='cart__remove-game-from-cart-button'
        type='button'
        aria-label='Remove from cart'
        onClick={() => {
          removeGameFromCart(id);
        }}
      >
        ⨉
      </button>
    </div>
  );
}

CartGameCart.propTypes = {
  id: PropTypes.number,
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  removeGameFromCart: PropTypes.func
};

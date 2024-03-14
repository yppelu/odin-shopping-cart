import PropTypes from 'prop-types';

import './CartGameCart.css';

export default function CartGameCart({ id, imageSrc, name, price, removeGameFromCart }) {
  return (
    <div className='cart__game-card'>
      <img className='cart__game-card-image' src={imageSrc} alt='' aria-hidden />
      <div className='cart__game-card-description'>
        <p className='cart__game-card-name'>{name}</p>
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
        X
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

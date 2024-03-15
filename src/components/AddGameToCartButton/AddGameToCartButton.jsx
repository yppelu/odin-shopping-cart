import PropTypes from 'prop-types';

import './AddGameToCartButton.css';

export default function AddGameToCartButton({ gameId, isGameInCart, removeGameFromCart, addGameToCart }) {
  return (
    <button
      className={
        isGameInCart
          ? 'games-page__add-to-cart-button games-page__add-to-cart-button--game-in-cart'
          : 'games-page__add-to-cart-button'
      }
      type='button'
      onClick={() => {
        if (isGameInCart) {
          removeGameFromCart(gameId);
        } else {
          addGameToCart(gameId);
        }
      }
      }
    >
      {
        isGameInCart
          ? 'Added ✔'
          : 'Add to cart +'
      }
    </button>
  );
}

AddGameToCartButton.propTypes = {
  gameId: PropTypes.number,
  isGameInCart: PropTypes.bool,
  removeGameFromCart: PropTypes.func,
  addGameToCart: PropTypes.func
};

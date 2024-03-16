import PropTypes from 'prop-types';

import './AddGameToCartButton.css';

export default function AddGameToCartButton({ gameId, imageSrc, name, price, isGameInCart, removeGameFromCart, addGameToCart }) {
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
          addGameToCart(gameId, imageSrc, name, price);
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
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  isGameInCart: PropTypes.bool,
  removeGameFromCart: PropTypes.func,
  addGameToCart: PropTypes.func
};

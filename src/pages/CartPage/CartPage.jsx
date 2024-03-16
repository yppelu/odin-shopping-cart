import { Link, useOutletContext } from 'react-router-dom';
import './CartPage.css';

import CartGameCart from './CartGameCart/CartGameCart.jsx';

export default function CartPage() {
  document.title = 'Cart | Game Database';

  const { gamesInCart, handleRemoveGameFromCart, handleClearCart } = useOutletContext();

  return (
    <main className='cart'>
      <h1 className='cart__title'>
        {`Your Cart (${gamesInCart.length} ${gamesInCart.length === 1 ? 'game' : 'games'})`}
      </h1>
      <div className='cart__body'>
        {
          gamesInCart.length < 1 ? null :
            <div className='cart__total-block'>
              <p>Total: ${gamesInCart.reduce((sum, game) => sum + +game.price, 0).toFixed(2)}</p>
              <Link
                className='cart__checkout-button'
                onClick={handleClearCart}
                to='/checkout'
              >
                Checkout
              </Link>
            </div>
        }
        <div className='cart__games-cards-container'>
          {
            gamesInCart.map(game => (
              <CartGameCart
                key={game.id}
                id={game.id}
                imageSrc={game.imageSrc}
                name={game.name}
                price={game.price}
                removeGameFromCart={handleRemoveGameFromCart}
              />
            ))
          }
        </div>
      </div>
    </main>
  );
}

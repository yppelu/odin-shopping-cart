import { Link, useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './CartPage.css';

import getGamePrice from '../../components/GamesPageMainSection/sections/getGamePrice.js';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator.jsx';
import CartGameCart from './CartGameCart/CartGameCart.jsx';

export default function CartPage() {
  document.title = 'Cart | Game Database';

  const { gamesInCart, handleRemoveGameFromCart, handleClearCart } = useOutletContext();
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getGames = async () => {
      setIsLoading(true);
      const urls = gamesInCart.map(gameId =>
        (`https://api.rawg.io/api/games/${gameId}?key=a3afb1618e7e41a1919d7b2a83905ec3`));
      const requests = urls.map(url => fetch(url, { mode: 'cors' }));
      try {
        const responses = await Promise.all(requests);
        const results = await Promise.all(responses.map(response => response.json()));
        const games = results.map(result => {
          return {
            id: result.id,
            imageSrc: result.background_image,
            name: result.name,
            price: getGamePrice(result.slug)
          };
        });
        setGames(games);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getGames();
  }, [gamesInCart]);

  if (isError) {
    return (
      <main className='cart'>
        <h2>Some error has ocurred!</h2>
        <p>We are terribly sorry! Please, try reloading the page. It should help.</p>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className='cart'>
        <h1 className='cart__title'>
          {`Your Cart (${gamesInCart.length} ${gamesInCart.length === 1 ? 'game' : 'games'})`}
        </h1>
        <div className='cart__body'><LoadingIndicator /></div>
      </main>
    );
  }

  return (
    <main className='cart'>
      <h1 className='cart__title'>
        {`Your Cart (${gamesInCart.length} ${gamesInCart.length === 1 ? 'game' : 'games'})`}
      </h1>
      <div className='cart__body'>
        {
          games.length < 1 ? null :
            <div className='cart__total-block'>
              <p>Total: ${games.reduce((sum, game) => sum + +game.price, 0).toFixed(2)}</p>
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
            games.map(game => (
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

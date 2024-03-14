import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './CartPage.css';

import getGamePrice from '../../components/GamesPageMainSection/sections/getGamePrice.js';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator.jsx';

export default function CartPage() {
  document.title = 'Cart | Game Database';

  const { gamesInCart, handleRemoveGameFromCart } = useOutletContext();
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

  return (
    <main className='cart'>
      <h1 className='cart__title'>
        {`Your Cart (${gamesInCart.length} ${gamesInCart.length === 1 ? 'game' : 'games'})`}
      </h1>
      <div className='cart__body'>
        {isLoading && <LoadingIndicator />}
        {
          games.length < 1 ? null :
            <div className='cart__total-block'>
              <p>
                {
                  'Total: $' + games.reduce((sum, game) => sum + Number(game.price), 0).toFixed(2)
                }
              </p>
              <button className='cart__checkout-button' type='button'>
                Checkout
              </button>
            </div>
        }
        <div className='cart__games-cards-container'>
          {
            games.map(game => (
              <div className='cart__game-card' key={game.id}>
                <img className='cart__game-card-image' src={game.imageSrc} alt='' aria-hidden />
                <div className='cart__game-card-description'>
                  <p className='cart__game-card-name'>{game.name}</p>
                  <p className='cart__game-card-price'>${game.price}</p>
                </div>
                <button
                  className='cart__remove-game-from-cart-button'
                  type='button'
                  aria-label='Remove from cart'
                  onClick={() => {
                    handleRemoveGameFromCart(game.id);
                  }}
                >
                  X
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  );
}

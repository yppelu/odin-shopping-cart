import GamesPageCard from '../GamesPageCard/GamesPageCard.jsx';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator.jsx';
import ErrorWhileLoading from './ErrorWhileLoading.jsx';
import getGamePrice from './getGamePrice.js';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.rawg.io/api/games?key=a3afb1618e7e41a1919d7b2a83905ec3&page_size=6';

export default function AllGamesSection() {
  const { handleAddGameToCart, handleRemoveGameFromCart, gamesInCart } = useOutletContext();
  const [pageNumber, setPageNumber] = useState(1);
  const [usersPageNumber, setUsersPageNumber] = useState(pageNumber);
  const [listOfGames, setListOfGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const numberOfPages = 500;

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true);
      const finalUrl = BASE_URL + '&ordering=-metascore' + `&page=${pageNumber}`;

      try {
        const response = await fetch(finalUrl, { mode: 'cors' });
        if (!response.ok) throw new Error(response.status);

        const result = await response.json();
        setListOfGames(result.results);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, [pageNumber]);

  if (isError) return <ErrorWhileLoading />;

  return (
    <main className='games-page__content'>
      <h1 className='games-page__content-title'>All Games</h1>
      {
        !isLoading &&
        <div className='games-page__games-grid'>
          {
            listOfGames.map(game => (
              !game.background_image ? null :
                <GamesPageCard
                  key={Number(game.id)}
                  id={Number(game.id)}
                  imageSrc={game.background_image}
                  name={game.name}
                  platforms={game.platforms.map(el => el.platform.slug)}
                  price={getGamePrice(game.slug)}
                  gamesInCart={gamesInCart}
                  addGameToCart={handleAddGameToCart}
                  removeGameFromCart={handleRemoveGameFromCart}
                />
            ))
          }
        </div>
      }
      {!isLoading &&
        <div className='games-page__change-page-buttons'>
          <button
            className='games-page__change-page-button'
            type='button'
            onClick={() => {
              if (Number(pageNumber) > 1) {
                setPageNumber(Number(pageNumber) - 1);
                setUsersPageNumber(Number(pageNumber) - 1);
              }
            }}
          >
            Previous page
          </button>
          <form
            className='game-page__page-number-container'
            onSubmit={(e) => {
              e.preventDefault();
              setPageNumber(usersPageNumber);
            }}
          >
            <input
              type='number'
              name='set page number'
              value={usersPageNumber}
              min={1}
              max={500}
              onChange={(e) => {
                setUsersPageNumber(e.target.value);
              }}
            />
          </form>
          <button
            className='games-page__change-page-button'
            type='button'
            onClick={() => {
              if (Number(pageNumber) < Number(numberOfPages)) {
                setPageNumber(Number(pageNumber) + 1);
                setUsersPageNumber(Number(pageNumber) + 1);
              }
            }}
          >
            Next page
          </button>
        </div>
      }
      {
        isLoading && <LoadingIndicator />
      }
    </main>
  );
}

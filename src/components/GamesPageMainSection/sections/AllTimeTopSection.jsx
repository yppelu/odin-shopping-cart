import PropTypes from 'prop-types';

import useFetchGames from '../useFetchGames.jsx';

import GamesPageCard from '../GamesPageCard/GamesPageCard.jsx';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator.jsx';
import ErrorWhileLoading from './ErrorWhileLoading.jsx';
import getGamePrice from './getGamePrice.js';

export default function AllTimeTopSection({ addGameToCart, removeGameFromCart, gamesInCart }) {
  const { listOfGames, isLoading, isError } = useFetchGames({
    ordering: '-metascore',
    pageSize: 40,
    page: 1
  });

  if (isError) return <ErrorWhileLoading />;

  return (
    <>
      <h1 className='games-page__content-title'>All Time Top</h1>
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
                  addGameToCart={addGameToCart}
                  removeGameFromCart={removeGameFromCart}
                />
            ))
          }
        </div>
      }
      {
        isLoading && <LoadingIndicator />
      }
    </>
  );
}

AllTimeTopSection.propTypes = {
  addGameToCart: PropTypes.func,
  removeGameFromCart: PropTypes.func,
  gamesInCart: PropTypes.array
};

import PropTypes from 'prop-types';

import useFetchGames from '../useFetchGames.jsx';

import GamesPageCard from '../GamesPageCard/GamesPageCard.jsx';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator.jsx';
import ErrorWhileLoading from './ErrorWhileLoading.jsx';
import getGamePrice from './getGamePrice.js';

export default function Last30DaysSection({ addGameToCart, removeGameFromCart, gamesInCart }) {
  const { listOfGames, isLoading, isError } = useFetchGames({
    startDate: get30DaysAgoDate().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10)
  });

  if (isError) return <ErrorWhileLoading />;

  return (
    <>
      <h1 className='games-page__content-title'>Last 30 Days</h1>
      {
        isLoading
          ? <LoadingIndicator />
          :
          <div className='games-page__games-grid'>
            {
              listOfGames.map(game => (
                !game.background_image ? null :
                  <GamesPageCard
                    key={game.id}
                    id={game.id}
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
    </>
  );
}

function get30DaysAgoDate() {
  const now = new Date();
  now.setDate(now.getDate() - 30);
  return now;
}

Last30DaysSection.propTypes = {
  addGameToCart: PropTypes.func,
  removeGameFromCart: PropTypes.func,
  gamesInCart: PropTypes.array
};

import PropTypes from 'prop-types';

import useFetchGames from '../useFetchGames.jsx';

import GamesPageCard from '../GamesPageCard/GamesPageCard.jsx';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator.jsx';
import ErrorWhileLoading from './ErrorWhileLoading.jsx';
import getGamePrice from './getGamePrice.js';

export default function ThisWeekSection({ addGameToCart, removeGameFromCart, gamesInCart }) {
  const { listOfGames, isLoading, isError } = useFetchGames({
    startDate: getStartOfCurrentWeekDate().toISOString().slice(0, 10),
    endDate: getEndOfCurrentWeekDate().toISOString().slice(0, 10)
  });

  if (isError) return <ErrorWhileLoading />;

  return (
    <>
      <h1 className='games-page__content-title'>This Week</h1>
      {
        isLoading
          ? <LoadingIndicator />
          :
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
    </>
  );
}

function getStartOfCurrentWeekDate() {
  const date = new Date();
  const currentDate = date.getDate();
  const currentDay = date.getDay();
  if (currentDay === 0) {
    date.setDate(currentDate - 6);
  } else {
    date.setDate(currentDate - (currentDay - 1));
  }
  return date;
}

function getEndOfCurrentWeekDate() {
  const date = new Date();
  const currentDate = date.getDate();
  const currentDay = date.getDay();
  if (currentDay !== 0) {
    date.setDate(currentDate + (7 - currentDay));
  }
  return date;
}

ThisWeekSection.propTypes = {
  addGameToCart: PropTypes.func,
  removeGameFromCart: PropTypes.func,
  gamesInCart: PropTypes.array
};

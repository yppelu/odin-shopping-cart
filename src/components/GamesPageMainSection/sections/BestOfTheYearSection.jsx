import PropTypes from 'prop-types';

import useFetchGames from '../useFetchGames.jsx';

import GamesPageCard from '../GamesPageCard/GamesPageCard.jsx';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator.jsx';
import ErrorWhileLoading from './ErrorWhileLoading.jsx';
import getGamePrice from './getGamePrice.js';

export default function BestOfTheYearSection({ gamesInCart, addGameToCart, removeGameFromCart }) {
  const { listOfGames, isLoading, isError } = useFetchGames({
    startDate: new Date().getFullYear() + '-01' + '-01',
    endDate: new Date().toISOString().slice(0, 10),
    ordering: '-metascore',
    pageSize: 30,
    page: 1
  });

  if (isError) return <ErrorWhileLoading />;

  return (
    <>
      <h1 className='games-page__content-title'>Best of the Year</h1>
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

BestOfTheYearSection.propTypes = {
  addGameToCart: PropTypes.func,
  removeGameFromCart: PropTypes.func,
  gamesInCart: PropTypes.array
};

import useFetchGames from '../useFetchGames.jsx';

import GamesPageCard from '../GamesPageCard/GamesPageCard.jsx';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator.jsx';
import ErrorWhileLoading from './ErrorWhileLoading.jsx';

export default function NextWeekSection() {
  const { listOfGames, isLoading, isError } = useFetchGames({
    startDate: getStartOfNextWeekDate().toISOString().slice(0, 10),
    endDate: getEndOfNextWeekDate().toISOString().slice(0, 10)
  });

  if (isError) return <ErrorWhileLoading />;

  return (
    <>
      <h1 className='games-page__content-title'>Next Week</h1>
      {
        isLoading
          ? <LoadingIndicator />
          :
          <div className='games-page__games-grid'>
            {
              listOfGames.map(game => (
                !game.background_image ? null :
                  <GamesPageCard key={game.id} imageSrc={game.background_image} name={game.name} platforms={game.platforms.map(el => el.platform.name)} />
              ))
            }
          </div>
      }
    </>
  );
}

function getStartOfNextWeekDate() {
  const date = new Date();
  const currentDate = date.getDate();
  const currentDay = date.getDay();
  if (currentDay === 0) {
    date.setDate(currentDate + 1);
  } else {
    date.setDate(currentDate + (7 - currentDay));
  }
  return date;
}

function getEndOfNextWeekDate() {
  const date = new Date();
  const currentDate = date.getDate();
  const currentDay = date.getDay();
  if (currentDay === 0) {
    date.setDate(currentDate + 7);
  } else {
    date.setDate(currentDate + (14 - currentDay));
  }
  return date;
}

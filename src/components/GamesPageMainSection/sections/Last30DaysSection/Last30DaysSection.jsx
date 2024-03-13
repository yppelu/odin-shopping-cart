import useFetchGames from '../../useFetchGames.jsx';

import GamesPageCard from '../../GamesPageCard/GamesPageCard.jsx';
import LoadingIndicator from '../../../LoadingIndicator/LoadingIndicator.jsx';
import ErrorWhileLoading from '../ErrorWhileLoading.jsx';

export default function Last30DaysSection() {
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
                  <GamesPageCard key={game.id} imageSrc={game.background_image} name={game.name} />
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

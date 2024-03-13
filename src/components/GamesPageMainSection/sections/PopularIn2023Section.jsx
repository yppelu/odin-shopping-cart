import useFetchGames from '../useFetchGames.jsx';

import GamesPageCard from '../GamesPageCard/GamesPageCard.jsx';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator.jsx';
import ErrorWhileLoading from './ErrorWhileLoading.jsx';

export default function PopularIn2023Section() {
  const { listOfGames, isLoading, isError } = useFetchGames({
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    ordering: '-rating',
    pageSize: 40,
    page: 1
  });

  if (isError) return <ErrorWhileLoading />;

  return (
    <>
      <h1 className='games-page__content-title'>Popular In 2023</h1>
      {
        !isLoading &&
        <div className='games-page__games-grid'>
          {
            listOfGames.map(game => (
              !game.background_image ? null :
                <GamesPageCard key={game.id} imageSrc={game.background_image} name={game.name} platforms={game.platforms.map(el => el.platform.name)} />
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

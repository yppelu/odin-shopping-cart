import useFetchGames from '../../useFetchGames.jsx';

import GamesPageCard from '../../GamesPageCard/GamesPageCard.jsx';
import LoadingIndicator from '../../../LoadingIndicator/LoadingIndicator.jsx';
import ErrorWhileLoading from '../ErrorWhileLoading.jsx';

export default function AllTimeTopSection() {
  const { listOfGames, isLoading, isError } = useFetchGames({
    ordering: '-metascore',
    pageSize: 40,
    page: 1
  });

  if (isError) return <ErrorWhileLoading />;

  return (
    <>
      <h1 className='games-page__content-title'>All Time Top 250</h1>
      {
        !isLoading &&
        <div className='games-page__games-grid'>
          {
            listOfGames.map(game => (
              !game.background_image ? null :
                <GamesPageCard key={game.id} imageSrc={game.background_image} name={game.name} />
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

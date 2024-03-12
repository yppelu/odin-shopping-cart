import './GamesPage.css';

import GamesPageNavigation from '../../components/GamesPageNavigation/GamesPageNavigation';

export default function GamesPage() {
  document.title = 'Games | Game Database';

  return (
    <main className='games-page'>
      <GamesPageNavigation />
    </main>
  );
}

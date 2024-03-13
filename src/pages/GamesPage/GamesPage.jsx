import { Outlet } from 'react-router-dom';

import './GamesPage.css';

import GamesPageNavigation from '../../components/GamesPageNavigation/GamesPageNavigation.jsx';

export default function GamesPage() {
  document.title = 'Games | Game Database';

  return (
    <div className='games-page'>
      <GamesPageNavigation />
      <Outlet />
    </div>
  );
}

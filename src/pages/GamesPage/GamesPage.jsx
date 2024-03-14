import { Outlet, useOutletContext } from 'react-router-dom';

import './GamesPage.css';

import GamesPageNavigation from '../../components/GamesPageNavigation/GamesPageNavigation.jsx';

export default function GamesPage() {
  document.title = 'Games | Game Database';

  const { handleAddGameToCart, handleRemoveGameFromCart, gamesInCart } = useOutletContext();

  return (
    <div className='games-page'>
      <GamesPageNavigation />
      <Outlet context={{ handleAddGameToCart, handleRemoveGameFromCart, gamesInCart }} />
    </div>
  );
}

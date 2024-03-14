import { useOutletContext, useParams } from 'react-router-dom';

import './GamesPageMainSection.css';

import Last30DaysSection from './sections/Last30DaysSection.jsx';
import ThisWeekSection from './sections/ThisWeekSection.jsx';
import NextWeekSection from './sections/NextWeekSection.jsx';
import BestOfTheYearSection from './sections/BestOfTheYearSection.jsx';
import PopularIn2023Section from './sections/PopularIn2023Section.jsx';
import AllTimeTopSection from './sections/AllTimeTopSection.jsx';

export default function GamesPageMainSection() {
  const { sectionName } = useParams();
  const { handleAddGameToCart, handleRemoveGameFromCart, gamesInCart } = useOutletContext();

  return (
    <main className='games-page__content'>
      {sectionName === 'last-30-days' && <Last30DaysSection addGameToCart={handleAddGameToCart} removeGameFromCart={handleRemoveGameFromCart} gamesInCart={gamesInCart} />}
      {sectionName === 'this-week' && <ThisWeekSection addGameToCart={handleAddGameToCart} removeGameFromCart={handleRemoveGameFromCart} gamesInCart={gamesInCart} />}
      {sectionName === 'next-week' && <NextWeekSection addGameToCart={handleAddGameToCart} removeGameFromCart={handleRemoveGameFromCart} gamesInCart={gamesInCart} />}
      {sectionName === 'best-of-the-year' && <BestOfTheYearSection addGameToCart={handleAddGameToCart} removeGameFromCart={handleRemoveGameFromCart} gamesInCart={gamesInCart} />}
      {sectionName === 'popular-in-2023' && <PopularIn2023Section addGameToCart={handleAddGameToCart} removeGameFromCart={handleRemoveGameFromCart} gamesInCart={gamesInCart} />}
      {sectionName === 'all-time-top' && <AllTimeTopSection addGameToCart={handleAddGameToCart} removeGameFromCart={handleRemoveGameFromCart} gamesInCart={gamesInCart} />}
    </main>
  );
}

import { useState } from 'react';
import './GamesPageNavigation.css';

import { gamesPageNavigationControls } from './gamesPageNavigationControls.jsx';
import GamesPageNavigationSection from './GamesPageNavigationSection/GamesPageNavigationSection.jsx';
import { Link } from 'react-router-dom';

export default function GamesPageNavigation() {
  const [isMenuHidden, setIsMenuHidden] = useState(window.screen.width <= 600);

  function handleHideMenu() {
    if (window.screen.width <= 600) {
      setIsMenuHidden(true);
    }
  }

  return (
    <nav
      className={
        isMenuHidden
          ? 'games-page__navigation games-page__navigation--hidden'
          : 'games-page__navigation'
      }
    >
      <button
        className={
          isMenuHidden
            ? 'games-page__navigation-button games-page__navigation-button--menu-hidden'
            : 'games-page__navigation-button'
        }
        type='button'
        onClick={() => setIsMenuHidden(!isMenuHidden)}
        aria-label={isMenuHidden ? 'Open menu' : 'Close menu'}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />
        </svg>
      </button>
      <Link className='games-page__all-games-link' to='/games' onClick={handleHideMenu}>
        All Games
      </Link>
      {
        gamesPageNavigationControls.map(section => (
          <GamesPageNavigationSection
            key={section.title}
            title={section.title}
            listItems={section.listItems}
            hideMenu={handleHideMenu}
          />
        ))
      }
    </nav>
  );
}

import './GamesPageNavigation.css';

import { gamesPageNavigationControls } from './gamesPageNavigationControls.jsx';
import GamesPageNavigationSection from './GamesPageNavigationSection/GamesPageNavigationSection';

export default function GamesPageNavigation() {
  return (
    <nav className='games-page__navigation'>
      {
        gamesPageNavigationControls.map(section => (
          <GamesPageNavigationSection
            key={section.title}
            title={section.title}
            listItems={section.listItems}
          />
        ))
      }
    </nav>
  );
}

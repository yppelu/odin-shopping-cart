import './HomePageNavigation.css';

import { homePageNavigationButtons } from './homePageNavigationButtons.jsx';
import HomePageNavigationListItem from './HomePageNavigationListItem/HomePageNavigationListItem';

export default function HomePageNavigation() {
  return (
    <nav className='home-page__navigation-block'>
      <h2 className='home-page_navigation-title'>Quick Navigation</h2>
      <ul className='home-page__navigation-list'>
        {
          homePageNavigationButtons.map(button => (
            <HomePageNavigationListItem key={button.title} title={button.title} icon={button.icon} />
          ))
        }
      </ul>
    </nav>
  );
}

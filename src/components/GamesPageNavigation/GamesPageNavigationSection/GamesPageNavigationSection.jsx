import PropTypes from 'prop-types';

import './GamesPageNavigationSection.css';

import GamesPageNavigationListItem from './GamesPageNavigationListItem/GamesPageNavigationListItem.jsx';

export default function GamesPageNavigationSection({ title, listItems, hideMenu }) {
  return (
    <div className='games-page__navigation-section'>
      <h2 className='games-page__navigation-section-title'>
        {title}
      </h2>
      <ul className='games-page__navigation-list'>
        {
          listItems.map(listItem => (
            <GamesPageNavigationListItem
              key={listItem.title}
              title={listItem.title}
              icon={listItem.icon}
              hideMenu={hideMenu}
            />
          ))
        }
      </ul>
    </div>
  );
}

GamesPageNavigationSection.propTypes = {
  title: PropTypes.string,
  listItems: PropTypes.array,
  hideMenu: PropTypes.func
};

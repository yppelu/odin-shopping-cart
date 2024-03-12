import PropTypes from 'prop-types';

import './GamesPageNavigationSection.css';

import GamesPageNavigationListItem from './GamesPageNavigationListItem/GamesPageNavigationListItem';

export default function GamesPageNavigationSection({ title, listItems }) {
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
            />
          ))
        }
      </ul>
    </div>
  );
}

GamesPageNavigationSection.propTypes = {
  title: PropTypes.string,
  listItems: PropTypes.array
};
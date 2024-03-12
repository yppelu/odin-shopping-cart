import PropTypes from 'prop-types';

import './GamesPageNavigationListItem.css';

export default function GamesPageNavigationListItem({ title, icon }) {
  return (
    <li className='games-page__navigation-list-item'>
      <button className='games-page__navigation-button' type='button'>
        <div className='games-page__navigation-icon-wrapper'>
          {icon}
        </div>
        {title}
      </button>
    </li>
  );
}

GamesPageNavigationListItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node
};

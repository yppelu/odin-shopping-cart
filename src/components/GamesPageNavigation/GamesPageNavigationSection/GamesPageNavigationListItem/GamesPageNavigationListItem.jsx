import PropTypes from 'prop-types';

import './GamesPageNavigationListItem.css';
import { NavLink } from 'react-router-dom';

export default function GamesPageNavigationListItem({ title, icon }) {
  const href = title.split(' ').map(word => word.toLowerCase()).join('-');

  return (
    <li className='games-page__navigation-list-item'>
      <NavLink className={({ isActive }) => isActive
        ? 'games-page__navigation-link games-page__navigation-link--active'
        : 'games-page__navigation-link'
      } to={href}
      >
        <div className='games-page__navigation-icon-wrapper'>{icon}</div>
        {title}
      </NavLink>
    </li >
  );
}

GamesPageNavigationListItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node
};

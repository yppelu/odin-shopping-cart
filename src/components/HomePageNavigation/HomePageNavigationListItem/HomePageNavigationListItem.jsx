import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './HomePageNavigationListItem.css';

export default function HomePageNavigationListItem({ title, icon }) {
  const href = title.split(' ').map(word => word.toLowerCase()).join('-');

  return (
    <li className='home-page__navigation-list-item'>
      <Link className='home-page__navigation-link' to={`/games/${href}`}>
        {icon}
        {title}
      </Link>
    </li>
  );
}

HomePageNavigationListItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node
};

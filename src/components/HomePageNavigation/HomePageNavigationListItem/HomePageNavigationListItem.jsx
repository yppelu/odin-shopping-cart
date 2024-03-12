import PropTypes from 'prop-types';

import './HomePageNavigationListItem.css';

export default function HomePageNavigationListItem({ title, icon }) {
  return (
    <li className='home-page__navigation-list-item'>
      <a className='home-page__navigation-link' href=''>
        {icon}
        {title}
      </a>
    </li>
  );
}

HomePageNavigationListItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node
};

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';
import SearchForm from './SearchForm/SearchForm';

export default function Header({ numberOfGamesInCart }) {
  return (
    <header className='header'>
      <Link className='header__home-link' to='/'>
        <svg
          className='header__home-link-icon'
          aria-label='Home page'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='15' height='15' rx='3' fill='black' />
          <path d='M9.54545 6.09375C9.4858 5.88636 9.40199 5.70312 9.29403 5.54403C9.18608 5.3821 9.05398 5.24574 8.89773 5.13494C8.74432 5.02131 8.56818 4.93466 8.36932 4.875C8.1733 4.81534 7.95597 4.78551 7.71733 4.78551C7.27131 4.78551 6.87926 4.89631 6.54119 5.1179C6.20597 5.33949 5.9446 5.66193 5.7571 6.08523C5.5696 6.50568 5.47585 7.01989 5.47585 7.62784C5.47585 8.2358 5.56818 8.75284 5.75284 9.17898C5.9375 9.60511 6.19886 9.9304 6.53693 10.1548C6.875 10.3764 7.27415 10.4872 7.73438 10.4872C8.15199 10.4872 8.50852 10.4134 8.80398 10.2656C9.10227 10.1151 9.32955 9.90341 9.4858 9.63068C9.64489 9.35795 9.72443 9.03551 9.72443 8.66335L10.0994 8.71875H7.84943V7.32955H11.5014V8.42898C11.5014 9.19602 11.3395 9.85511 11.0156 10.4062C10.6918 10.9545 10.2457 11.3778 9.67756 11.6761C9.10938 11.9716 8.45881 12.1193 7.72585 12.1193C6.90767 12.1193 6.18892 11.9389 5.5696 11.5781C4.95028 11.2145 4.46733 10.6989 4.12074 10.0312C3.77699 9.3608 3.60511 8.56534 3.60511 7.64489C3.60511 6.9375 3.70739 6.30682 3.91193 5.75284C4.11932 5.19602 4.40909 4.72443 4.78125 4.33807C5.15341 3.9517 5.58665 3.65767 6.08097 3.45597C6.57528 3.25426 7.1108 3.15341 7.6875 3.15341C8.18182 3.15341 8.64205 3.22585 9.06818 3.37074C9.49432 3.51278 9.87216 3.71449 10.2017 3.97585C10.5341 4.23722 10.8054 4.5483 11.0156 4.90909C11.2259 5.26705 11.3608 5.66193 11.4205 6.09375H9.54545Z' fill='white' />
        </svg>
        <span className='header__home-link-text' aria-hidden>Game Database</span>
      </Link>
      <SearchForm />
      <Link className='header__view-cart-link' to='/cart'>
        {
          numberOfGamesInCart > 0
            ? <span className='header__number-of-games-in-cart' title='Number of items in the cart'>
              {numberOfGamesInCart}
            </span>
            : null
        }
        <svg
          className='header__view-cart-link-icon'
          aria-label='View cart'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='white'
        >
          <path d='M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z' />
        </svg>
      </Link>
    </header>
  );
}

Header.propTypes = {
  numberOfGamesInCart: PropTypes.number
};

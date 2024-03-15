import { useState, useEffect } from 'react';

import './SearchForm.css';

import getGamePrice from '../../GamesPageMainSection/sections/getGamePrice.js';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator.jsx';
import { Link } from 'react-router-dom';

export default function SearchForm() {
  const [searchInput, setSearchInput] = useState('');
  const [listOfGames, setListOfGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [areSearchResultsShown, setAreSearchResultsShown] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`https://api.rawg.io/api/games?key=a3afb1618e7e41a1919d7b2a83905ec3&search=${searchInput}`, { mode: 'cors' });
        if (!response.ok) throw new Error(response.status);

        const result = await response.json();
        const games = result.results.map(game => (
          {
            id: game.id,
            imageSrc: game.background_image,
            name: game.name,
            price: getGamePrice(game.slug)
          }
        )).filter(game => game.imageSrc);
        if (games.length === 0) {
          setIsError(true);
        } else {
          setListOfGames(games);
          setIsError(false);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      if (searchInput === '') setListOfGames([]);
      if (searchInput !== '') fetchGames();
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchInput]);

  useEffect(() => {
    const closeSearchResultForm = (e) => {
      const searchForm = document.querySelector('.header__search-form');
      if (!searchForm.contains(e.target) || ['A', 'IMG'].includes(e.target.nodeName)) {
        setAreSearchResultsShown(false);
      }
    };

    const body = document.querySelector('body');
    body.addEventListener('click', closeSearchResultForm);

    return () => {
      body.removeEventListener('click', closeSearchResultForm);
    };
  });

  return (
    <form className='header__search-form' onSubmit={(e) => e.preventDefault()}>
      <input
        className='header__search-input'
        name='search'
        type='search'
        value={searchInput}
        onFocus={() => setAreSearchResultsShown(true)}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        placeholder='Search games...'
      />
      {
        searchInput !== '' &&
        <div className={areSearchResultsShown ? 'header__search-results header__search-results--active' : 'header__search-results'}>
          {
            isLoading ? <LoadingIndicator /> : isError
              ? <p>Can&apos;t find anything. Try another query, please.</p>
              : listOfGames.map(game => (
                <div key={game.id} className='header__game-card'>
                  <Link className='header__game-card-image-link' to={`/games/game/${game.id}`}>
                    <img className='header__game-card-image' src={game.imageSrc} alt='' aria-hidden />
                  </Link>
                  <div className='header__game-card-description'>
                    <Link
                      className='header__game-card-name-link'
                      to={`/games/game/${game.id}`}
                    >
                      {game.name}
                    </Link>
                    <p className='header__game-card-price'>${game.price}</p>
                  </div>
                </div>
              ))
          }
        </div>
      }
    </form>
  );
}

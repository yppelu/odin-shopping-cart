import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './GamesPageCard.css';

import { platformIcons } from './platformIcons';
import AddGameToCartButton from '../../AddGameToCartButton/AddGameToCartButton';

export default function GamesPageCard({ id, imageSrc, name, platforms, price, gamesInCart, addGameToCart, removeGameFromCart }) {
  const platformsWithoutDuplicates = () => {
    const visited = new Set();
    const platformsWithoutDuplicates = [];

    for (const platform of platforms) {
      if (!visited.has(platform)) {
        const platformData = platformIcons[platform];
        if (platformData) {
          for (const neighbor of platformData.neighbors) visited.add(neighbor);
          platformsWithoutDuplicates.push({ title: platformData.title, icon: platformData.icon });
        }
      }
    }

    return platformsWithoutDuplicates.sort((a, b) => a.title < b.title ? -1 : 1);
  };

  const clearedPlatforms = platformsWithoutDuplicates();
  const isGameInCart = gamesInCart.includes(id);

  return (
    <div className='games-page__game-card'>
      <Link to={`/games/game/${id}`}>
        <img className='games-page__game-card-image' src={imageSrc} alt='Game screenshot' aria-hidden />
      </Link>
      <div className='games-page__game-card-description'>
        <div className='games-page__game-card-shopping-block'>
          <AddGameToCartButton
            gameId={id}
            isGameInCart={isGameInCart}
            removeGameFromCart={removeGameFromCart}
            addGameToCart={addGameToCart}
          />
          <p>${price}</p>
        </div>
        <div className='games-page__game-card-platforms-container'>
          {
            clearedPlatforms.map(platform => (
              <div
                key={platform.title}
                className='games-page__game-card-platform-icon-container'
                title={platform.title}
              >
                {platform.icon}
              </div>
            ))
          }
        </div>
        <Link to={`/games/game/${id}`}>
          <h2 className='games-page__game-card-title'>{name}</h2>
        </Link>
      </div>
    </div>
  );
}

GamesPageCard.propTypes = {
  id: PropTypes.number,
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  platforms: PropTypes.array,
  price: PropTypes.string,
  gamesInCart: PropTypes.array,
  addGameToCart: PropTypes.func,
  removeGameFromCart: PropTypes.func
};

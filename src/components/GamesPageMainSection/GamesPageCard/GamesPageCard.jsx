import PropTypes from 'prop-types';

import './GamesPageCard.css';

import { platformIcons } from './platformIcons';

export default function GamesPageCard({ imageSrc, name, platforms }) {
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

  return (
    <div className='games-page__game-card'>
      <img className='games-page__game-card-image' src={imageSrc} alt='Game screenshot' aria-hidden />
      <div className='games-page__game-card-description'>
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
        <h2 className='games-page__game-card-title'>{name}</h2>
      </div>
    </div>
  );
}

GamesPageCard.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  platforms: PropTypes.array
};

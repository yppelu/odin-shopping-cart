import PropTypes from 'prop-types';

import './GamesPageCard.css';

export default function GamesPageCard({ imageSrc, name, platforms }) {
  return (
    <div className='games-page__game-card'>
      <img className='games-page__game-card-image' src={imageSrc} alt='Game screenshot' aria-hidden />
      <div className='games-page__game-card-description'>
        <div className='games-page__game-card-platforms-container'>

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

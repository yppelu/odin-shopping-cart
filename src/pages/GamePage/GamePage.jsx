import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './GamePage.css';

import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator.jsx';
import AddGameToCartButton from '../../components/AddGameToCartButton/AddGameToCartButton.jsx';

export default function GamePage() {
  const { gameId } = useParams();
  const { handleAddGameToCart, handleRemoveGameFromCart, gamesInCart } = useOutletContext();
  const isGameInCart = gamesInCart.includes(gameId);

  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getGameData = async () => {
      setIsLoading(true);

      try {
        const gameDataResponse = await fetch(`https://api.rawg.io/api/games/${gameId}?key=a3afb1618e7e41a1919d7b2a83905ec3`, { mode: 'cors' });
        const gameDataResult = await gameDataResponse.json();

        const gameScreenshotsResponse = await fetch(`https://api.rawg.io/api/games/${gameId}/screenshots?key=a3afb1618e7e41a1919d7b2a83905ec3`, { mode: 'cors' });
        const gameScreenshotsResult = await gameScreenshotsResponse.json();

        const game = {
          backgroundImageSrc: gameDataResult.background_image,
          description: gameDataResult.description,
          developers: gameDataResult.developers.map(el => el.name),
          genres: gameDataResult.genres.map(el => el.name),
          name: gameDataResult.name,
          platforms: gameDataResult.platforms.map(el => el.platform.name),
          publishers: gameDataResult.publishers.map(el => el.name),
          releaseDate: gameDataResult.released,
          screenshotsSrcs: gameScreenshotsResult.results.map(el => el.image)
        };

        setGame(game);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getGameData();
  }, [gameId]);

  if (isError) {
    return (
      <main className='game-page'>
        <h2>Some error has ocurred!</h2>
        <p>We are terribly sorry! Please, try reloading the page. It should help.</p>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className='game-page'>
        <LoadingIndicator />
      </main>
    );
  }

  return (
    <>
      <div
        className='game-page__background-image'
        style={{ backgroundImage: `url(${game.backgroundImageSrc})` }}
        aria-hidden
      >
      </div>
      <div className='game-page__background-image-cover' aria-hidden></div>
      <main className='game-page'>
        <div className='game-page__header'>
          <h1 className='game-page__title'>{game.name}</h1>
          <AddGameToCartButton
            gameId={gameId}
            isGameInCart={isGameInCart}
            removeGameFromCart={handleRemoveGameFromCart}
            addGameToCart={handleAddGameToCart}
          />
        </div>
        <section className='game-page__images-section'>
          <div className='game-page__images-section-navigation-buttons'>
            <button
              className='game-page__images-section-navigation-button'
              onClick={() => {
                const carousel = document.querySelector('.game-page__image-carousel');
                const firstImageWidth = carousel.querySelectorAll('img')[0].clientWidth;
                carousel.scrollLeft -= firstImageWidth;
              }}
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M14,7L9,12L14,17V7Z' />
              </svg>
            </button>
            <button
              className='game-page__images-section-navigation-button'
              onClick={() => {
                const carousel = document.querySelector('.game-page__image-carousel');
                const firstImageWidth = carousel.querySelectorAll('img')[0].clientWidth;
                carousel.scrollLeft += firstImageWidth;
              }}
            >
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path d='M10,17L15,12L10,7V17Z' />
              </svg>
            </button>
          </div>
          <div className='game-page__image-carousel'>
            {
              game.screenshotsSrcs && game.screenshotsSrcs.map(src => (
                <img key={src} className='game-page__carousel-image' src={src} alt='Game screenshot' />
              ))
            }
          </div>
        </section>
        <section>
          <h2 className='game-page__section-title'>About</h2>
          <div className='game-page__about-content-wrapper'>
            <div
              className='game-page__about-description'
              dangerouslySetInnerHTML={{ __html: game.description }}
            >
            </div>
            <div className='game-page__additional-info'>
              <div>
                <p className='game-page__additional-info-subtitle'>Platforms</p>
                <p>{game.platforms && game.platforms.join(', ')}</p>
              </div>
              <div>
                <p className='game-page__additional-info-subtitle'>Genres</p>
                <p>{game.genres && game.genres.join(', ')}</p>
              </div>
              <div>
                <p className='game-page__additional-info-subtitle'>Developers</p>
                <p>{game.developers && game.developers.join(', ')}</p>
              </div>
              <div>
                <p className='game-page__additional-info-subtitle'>Publishers</p>
                <p>{game.publishers && game.publishers.join(', ')}</p>
              </div>
              <div>
                <p className='game-page__additional-info-subtitle'>Release date</p>
                <p>{game.releaseDate}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
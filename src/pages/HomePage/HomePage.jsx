import './HomePage.css';

import HomePageNavigation from '../../components/HomePageNavigation/HomePageNavigation.jsx';

export default function HomePage() {
  document.title = 'Home | Game Database';

  return (
    <>
      <div className='home-page__background-image'></div>
      <main className='home-page'>
        <div className='home-page__info'>
          <div className='home-page__description-container'>
            <h1 className='home-page__title'>Game Database</h1>
            <p>
              It is not a commercial project, but a solution to one of <a className='home-page__link-in-description' href='https://www.theodinproject.com/' target='_blank' rel='noreferrer'>The Odin Project</a> assignments.
              You cannot buy any games here and all of the prices are generated to imitate a real game shop.
              <br />But feel free to poke around, there are plenty of things.
            </p>
          </div>
          <div className='home-page__links-to-my-sources'>
            <a className='home-page__link-to-my-source' href='https://github.com/yppelu/odin-shopping-cart' target='_blank' rel='noreferrer'>
              <img className='home-page__link-to-my-source-icon' src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' alt='' aria-hidden />
              Project Repo
            </a>
            <a className='home-page__link-to-my-source' href='https://rawg.io/apidocs' target='_blank' rel='noreferrer'>
              <img className='home-page__link-to-my-source-icon' src='https://rawg.io/assets/en/apple-icon-120x120.png?v=4' alt='' aria-hidden />
              RAWG API
            </a>
          </div>
        </div>
        <HomePageNavigation />
      </main>
    </>
  );
}

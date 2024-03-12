import { Link } from 'react-router-dom';

import './ErrorPage.css';


export default function ErrorPage() {
  document.title = '404 | Game Database';

  return (
    <>
      <div className='error-page__background-image'></div>
      <main className='error-page'>
        <h1 className='error-page__heading'>404</h1>
        <p className='error-page__description'>
          Whoops!<br />We couldn&apos;t find that page.
        </p>
        <Link className='error-page__return-link' to='/'>Home page</Link>
      </main>
    </>
  );
}

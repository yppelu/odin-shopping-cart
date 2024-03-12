import { Link } from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage() {
  return (
    <>
      <div className='error-page__background-image'></div>
      <div className='error-page'>
        <h1 className='error-page__heading'>404</h1>
        <p className='error-page__description'>
          Whoops!<br />We couldn&apos;t find that page.
        </p>
        <Link className='error-page__return-link' to='/'>Home page</Link>
      </div>
    </>
  );
}

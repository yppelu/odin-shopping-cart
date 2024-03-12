import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App.jsx';
import HomePage from '../pages/HomePage/HomePage.jsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';
import CartPage from '../pages/CartPage/CartPage.jsx';
import GamesPage from '../pages/GamesPage/GamesPage.jsx';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/cart',
          element: <CartPage />
        },
        {
          path: '/games',
          element: <GamesPage />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

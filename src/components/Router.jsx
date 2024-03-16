import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App.jsx';
import HomePage from '../pages/HomePage/HomePage.jsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';
import CartPage from '../pages/CartPage/CartPage.jsx';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage.jsx';
import GamesPage from '../pages/GamesPage/GamesPage.jsx';
import GamesPageMainSection from './GamesPageMainSection/GamesPageMainSection.jsx';
import GamePage from '../pages/GamePage/GamePage.jsx';
import AllGamesSection from './GamesPageMainSection/sections/AllGamesSection.jsx';

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
          path: '/checkout',
          element: <CheckoutPage />
        },
        {
          path: '/games',
          element: <GamesPage />,
          children: [
            {
              index: true,
              element: <AllGamesSection />
            },
            {
              path: '/games/:sectionName',
              element: <GamesPageMainSection />
            }
          ]
        },
        {
          path: '/games/game/:gameId',
          element: <GamePage />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

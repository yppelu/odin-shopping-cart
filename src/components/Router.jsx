import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from '../App.jsx';
import HomePage from '../pages/HomePage/HomePage.jsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';
import CartPage from '../pages/CartPage/CartPage.jsx';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage.jsx';
import GamesPage from '../pages/GamesPage/GamesPage.jsx';
import GamesPageMainSection from './GamesPageMainSection/GamesPageMainSection.jsx';

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
              path: '/games/:sectionName',
              element: <GamesPageMainSection />
            }
          ]
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

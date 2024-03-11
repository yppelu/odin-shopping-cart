import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />
    }
  ]);

  return <RouterProvider router={router} />;
}

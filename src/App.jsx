import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import { useState } from 'react';

export default function App() {
  const [gamesInCart, setGamesInCart] = useState(JSON.parse(localStorage.getItem('gamesInCart')));

  function handleAddGameToCart(id) {
    const newGamesInCart = [...gamesInCart];
    newGamesInCart.push(Number(id));
    localStorage.setItem('gamesInCart', JSON.stringify(newGamesInCart));
    setGamesInCart(newGamesInCart);
  }

  function handleRemoveGameFromCart(id) {
    const newGamesInCart = [...gamesInCart];
    const index = gamesInCart.indexOf(Number(id));
    newGamesInCart.splice(index, 1);
    localStorage.setItem('gamesInCart', JSON.stringify(newGamesInCart));
    setGamesInCart(newGamesInCart);
  }

  function handleClearCart() {
    setGamesInCart([]);
  }

  return (
    <>
      <Header numberOfGamesInCart={gamesInCart.length} />
      <Outlet context={{ handleAddGameToCart, handleRemoveGameFromCart, handleClearCart, gamesInCart }} />
    </>
  );
}

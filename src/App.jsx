import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import { useState } from 'react';

export default function App() {
  const [gamesInCart, setGamesInCart] = useState([]);

  function handleAddGameToCart(id) {
    const newGamesInCart = [...gamesInCart];
    newGamesInCart.push(id);
    setGamesInCart(newGamesInCart);
  }

  function handleRemoveGameFromCart(id) {
    const newGamesInCart = [...gamesInCart];
    const index = gamesInCart.indexOf(id);
    newGamesInCart.splice(index, 1);
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

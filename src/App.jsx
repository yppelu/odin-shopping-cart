import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';
import { useState } from 'react';

export default function App() {
  const [gamesInCart, setGamesInCart] = useState(JSON.parse(localStorage.getItem('gamesInCart')));

  function handleAddGameToCart(id, imageSrc, name, price) {
    const newGamesInCart = [...gamesInCart];
    const newGame = { id, imageSrc, name, price };
    newGamesInCart.push(newGame);
    localStorage.setItem('gamesInCart', JSON.stringify(newGamesInCart));
    setGamesInCart(newGamesInCart);
  }

  function handleRemoveGameFromCart(id) {
    const newGamesInCart = [...gamesInCart];
    let index;
    gamesInCart.forEach((game, i) => {
      if (game.id === Number(id)) index = i;
    });
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

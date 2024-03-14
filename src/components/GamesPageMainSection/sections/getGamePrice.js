export default
  function getGamePrice(string) {
  let code = 0;

  const primeNumber = 31;
  for (let i = 0; i < string.length; i++) {
    code = (primeNumber * code + string.charCodeAt(i)) % 1000;
  }

  return (code / 100 + 5).toFixed(2);
}

import { useState, useEffect } from 'react';

const BASE_URL = 'https://api.rawg.io/api/games?key=a3afb1618e7e41a1919d7b2a83905ec3';

export default function useFetchGames({ startDate, endDate, page, pageSize, ordering }) {
  const [listOfGames, setListOfGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getCombinedQueryParameters = () => {
      let result = '';

      if (startDate || endDate) {
        result += '&dates=';
        if (startDate) {
          result += startDate;
          if (endDate) result += ',';
        }
        if (endDate) result += endDate;
      }

      if (page) result += `&page=${page}`;

      if (pageSize) result += `&page_size=${pageSize}`;

      if (ordering) result += `&ordering=${ordering}`;

      return result;
    };

    const fetchGames = async () => {
      setIsLoading(true);
      const finalUrl = BASE_URL + getCombinedQueryParameters();

      try {
        const response = await fetch(finalUrl, { mode: 'cors' });
        if (!response.ok) throw new Error(response.status);

        const result = await response.json();
        setListOfGames(result.results);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, [endDate, ordering, page, pageSize, startDate]);

  return { listOfGames, isLoading, isError };
}

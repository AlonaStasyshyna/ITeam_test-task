import { useState, useEffect } from 'react';
import { fetchApi } from 'fetchApi/fetchApi';
import { GamesList } from './GamesList/GamesList';
import { Header } from './Header/Header';
import { Pagination } from './Pagination/Pagination';
import { Container } from 'utils/GlobalStyle';

export const App = () => {
  const [games, setGames] = useState([]);
  const [sortGames, setSortGames] = useState(false);
  const [favoriteGames, setFavoriteGames] = useState(
    () => JSON.parse(localStorage.getItem('favorite-games')) ?? []
  );
  const [listType, setListType] = useState('');
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('ascending');
  const [sortByCategory, setSortByCategory] = useState('Price ');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async (query, currentPage) => {
      const message = 'Nothing to show! Please, change yor request.';

      try {
        const { data } = await fetchApi(query, currentPage);

        if (!data.length) {
          throw new Error(message);
        }

        setGames(data);
      } catch (error) {
        setError(message);
      }
    };

    if (query) {
      fetchGames(query, currentPage);
    }
  }, [query, currentPage]);

  useEffect(() => {
    localStorage.setItem('favorite-games', JSON.stringify(favoriteGames));
  }, [favoriteGames]);

  useEffect(() => {
    if (sortGames) {
      sorting(games);
    }
  });

  const onSubmit = e => {
    e.preventDefault();

    setQuery(e.target.elements.query.value.toLowerCase().trim());
    setGames([]);
    setCurrentPage(1);
    setError(null);
  };

  const getListType = e => {
    setListType(e.target.textContent);
  };

  const changePage = e => {
    setCurrentPage(e.target.textContent);
  };

  const addToFavorite = link => {
    const favoriteGame = games.find(game => game.url === link);

    setFavoriteGames(prevState => [...prevState, favoriteGame]);
  };

  const removeFromFavorite = link => {
    const games = favoriteGames.filter(game => game.url !== link);

    setFavoriteGames(games);
  };

  const getCategoryOfSort = e => {
    setSortByCategory(e.target.textContent);

    setSortGames(true);
  };

  const getSortBy = e => {
    switch (e.target.textContent) {
      case 'Lower to bigger':
        setSortBy('ascending');
        break;

      case 'Bigger to lower':
        setSortBy('descending');
        break;
      default:
        break;
    }

    setSortGames(true);
  };

  const sorting = games => {
    if (sortByCategory === 'Price') {
      if (sortBy === 'ascending') {
        const sortGames = games.sort(
          (first, second) =>
            Number.parseFloat(first.price) - Number.parseFloat(second.price)
        );

        setGames(sortGames);
      }

      if (sortBy === 'descending') {
        const sortGames = games.sort(
          (first, second) =>
            Number.parseFloat(second.price) - Number.parseFloat(first.price)
        );

        setGames(sortGames);
      }
    }

    if (sortByCategory === 'Publish Date') {
      if (sortBy === 'ascending') {
        const sortGames = games.sort(
          (first, second) =>
            new Date(first.released) - new Date(second.released)
        );

        setGames(sortGames);
      }

      if (sortBy === 'descending') {
        const sortGames = games.sort(
          (first, second) =>
            new Date(second.released) - new Date(first.released)
        );

        setGames(sortGames);
      }
    }

    setSortGames(false);
  };

  return (
    <>
      <Header
        onSubmit={onSubmit}
        getListType={getListType}
        sortByCategory={sortByCategory}
        getCategoryOfSort={getCategoryOfSort}
        getSortBy={getSortBy}
      />
      <main>
        <Container>
          {error && <h1>{error}</h1>}
          {listType !== 'Like list' ? (
            <>
              <GamesList
                games={games}
                favoriteGames={favoriteGames}
                addToFavorite={addToFavorite}
                removeFromFavorite={removeFromFavorite}
              />
              <Pagination
                games={games}
                currentPage={currentPage}
                changePage={changePage}
              />
            </>
          ) : (
            <>
              <GamesList
                games={favoriteGames}
                favoriteGames={favoriteGames}
                addToFavorite={addToFavorite}
                removeFromFavorite={removeFromFavorite}
              />
            </>
          )}
        </Container>
      </main>
    </>
  );
};

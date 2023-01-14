import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { GameItem } from 'components/GameItem/GameItem';
import { List } from './GamesList.styled';

export const GamesList = ({
  games,
  favoriteGames,
  addToFavorite,
  removeFromFavorite,
}) => {
  return (
    <List>
      {games.map(gameItem => (
        <GameItem
          key={gameItem.appId || nanoid()}
          link={gameItem.url}
          img={gameItem.imgUrl}
          title={gameItem.title}
          date={gameItem.released}
          price={gameItem.price}
          favoriteGames={favoriteGames}
          addToFavorite={addToFavorite}
          removeFromFavorite={removeFromFavorite}
        />
      ))}
    </List>
  );
};

GamesList.protoTypes = {
  games: PropTypes.array.isRequired,
  favoriteGames: PropTypes.array.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
};

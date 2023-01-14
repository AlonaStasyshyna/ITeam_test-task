import PropTypes from 'prop-types';
import heartIcon from '../../images/heartIcon.svg';
import redHeartIcon from '../../images/redHeartIcon.svg';
import { Item, Title, Date, Price, Button } from './GameItem.styled';

export const GameItem = ({
  link,
  img,
  title,
  date,
  price,
  favoriteGames,
  addToFavorite,
  removeFromFavorite,
}) => {
  return (
    <Item>
      <a href={link}>
        <img src={img} alt={title} />

        <div>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <Price>{price.trim()}</Price>
        </div>
      </a>

      {favoriteGames.some(el => el.url === link) ? (
        <Button type="button" onClick={() => removeFromFavorite(link)}>
          <img src={redHeartIcon} alt="Red like icon" width="23" height="21" />
        </Button>
      ) : (
        <Button type="button" onClick={() => addToFavorite(link)}>
          <img src={heartIcon} alt="Like icon" width="23" height="21" />
        </Button>
      )}
    </Item>
  );
};

GameItem.protoTypes = {
  link: PropTypes.string,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  price: PropTypes.string,
  favoriteGames: PropTypes.array.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
};

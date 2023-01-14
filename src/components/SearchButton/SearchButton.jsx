import PropTypes from 'prop-types';
import { Div, Button } from './SearchButton.styled';

export const SearchButton = ({ getListType }) => {
  return (
    <Div>
      <Button type="submit" onClick={getListType}>
        Search
      </Button>

      <Button type="button" onClick={getListType}>
        Like list
      </Button>
    </Div>
  );
};

SearchButton.protoTypes = {
  getListType: PropTypes.func.isRequired,
};

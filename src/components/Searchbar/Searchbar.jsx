import PropTypes from 'prop-types';
import { SearchButton } from 'components/SearchButton/SearchButton';
import searchBtn from '../../images/searchBtn.svg';
import { Form, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit, getListType }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="query" placeholder="Enter an app name..." />
      <img src={searchBtn} alt="Search icon" width="19" height="19" />
      <SearchButton getListType={getListType} />
    </Form>
  );
};

Searchbar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
  getListType: PropTypes.func.isRequired,
};

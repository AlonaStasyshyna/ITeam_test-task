import PropTypes from 'prop-types';
import { Logo } from 'components/Logo/Logo';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Sorting } from 'components/Sorting/Sorting';
import { CustomizedContainer, HeaderSection } from './Header.styled';

export const Header = ({
  onSubmit,
  getListType,
  sortByCategory,
  getCategoryOfSort,
  getSortBy,
}) => {
  return (
    <HeaderSection>
      <CustomizedContainer>
        <Logo />
        <Searchbar onSubmit={onSubmit} getListType={getListType} />
        <Sorting
          sortByCategory={sortByCategory}
          getCategoryOfSort={getCategoryOfSort}
          getSortBy={getSortBy}
        />
      </CustomizedContainer>
    </HeaderSection>
  );
};

Header.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
  getListType: PropTypes.func.isRequired,
  sortByCategory: PropTypes.string.isRequired,
  getCategoryOfSort: PropTypes.func.isRequired,
  getSortBy: PropTypes.func.isRequired,
};

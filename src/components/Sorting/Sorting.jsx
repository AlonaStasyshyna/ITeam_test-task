import { useState } from 'react';
import PropTypes from 'prop-types';
import sortBtn from '../../images/sortBtn.svg';
import arrowDown from '../../images/arrowDown.svg';
import arrowUp from '../../images/arrowUp.svg';
import pricetag from '../../images/pricetag.svg';
import browser from '../../images/browser.svg';
import {
  ButtonsList,
  OrderSelection,
  OrderSelectionList,
  FilterButton,
  FilterButtonsList,
} from './Sorting.styled';

export const Sorting = ({ sortByCategory, getCategoryOfSort, getSortBy }) => {
  const [orderSelectionClicked, setOrderSelectionClicked] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);

  const onOrderSelectionClick = () => {
    if (filterClicked) {
      setFilterClicked(false);
    }

    setOrderSelectionClicked(prevState => !prevState);
  };

  const onFilterClick = () => {
    if (orderSelectionClicked) {
      setOrderSelectionClicked(false);
    }

    setFilterClicked(prevState => !prevState);
  };

  return (
    <ButtonsList>
      <li>
        <OrderSelection type="button" onClick={onOrderSelectionClick}>
          <img src={sortBtn} alt="Sorting icon" width="29" height="27" />
        </OrderSelection>

        {orderSelectionClicked && (
          <OrderSelectionList>
            <li>
              <button type="button" onClick={getSortBy}>
                Lower to bigger
              </button>
            </li>
            <li>
              <button type="button" onClick={getSortBy}>
                Bigger to lower
              </button>
            </li>
          </OrderSelectionList>
        )}
      </li>

      <li>
        <FilterButton type="button" onClick={onFilterClick}>
          {sortByCategory}
          {filterClicked ? (
            <img src={arrowUp} alt="Arrow up icon" width="28" height="30" />
          ) : (
            <img src={arrowDown} alt="Arrow down icon" width="28" height="30" />
          )}
        </FilterButton>

        {filterClicked && (
          <FilterButtonsList>
            <li>
              <button type="button" onClick={getCategoryOfSort}>
                Price
                <img
                  src={pricetag}
                  alt="Pricetag icon"
                  width="25"
                  height="25"
                />
              </button>
            </li>
            <li>
              <button type="button" onClick={getCategoryOfSort}>
                Publish Date
                <img src={browser} alt="Pricetag icon" width="25" height="25" />
              </button>
            </li>
          </FilterButtonsList>
        )}
      </li>
    </ButtonsList>
  );
};

Sorting.protoTypes = {
  sortByCategory: PropTypes.string.isRequired,
  getCategoryOfSort: PropTypes.func.isRequired,
  getSortBy: PropTypes.func.isRequired,
};

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import { List, Button } from './Pagination.styled';

export const Pagination = ({ games, currentPage, changePage }) => {
  const [displayedPages, setDisplayedPages] = useState([1, 2, 3]);
  const [nextStep, setNextStep] = useState(false);
  const [prevStep, setPrevStep] = useState(false);

  useEffect(() => {
    const newDisplayedPages = [];

    if (nextStep) {
      for (let i = 0; i < displayedPages.length; i += 1) {
        newDisplayedPages.push(displayedPages[i] + 3);
      }

      setDisplayedPages(newDisplayedPages);
      setNextStep(false);
    }

    if (prevStep) {
      for (let i = 0; i < displayedPages.length; i += 1) {
        if (displayedPages[i] === 1) {
          return;
        }

        newDisplayedPages.push(displayedPages[i] - 3);
      }

      setDisplayedPages(newDisplayedPages);
      setPrevStep(false);
    }
  }, [displayedPages, nextStep, prevStep]);

  const onNextClick = () => {
    setNextStep(true);
  };

  const onPrevClick = () => {
    setPrevStep(true);
  };

  return (
    <>
      {games.length > 0 && (
        <List>
          <li>
            <Button type="button" onClick={onPrevClick}>
              <img
                src={arrowLeft}
                alt="Arrow left icon"
                width="9"
                height="15"
              />
            </Button>
          </li>

          {displayedPages.map(page => (
            <li key={page}>
              <Button type="button" clicked={false} onClick={changePage}>
                {page}
              </Button>
            </li>
          ))}

          <li>
            <Button type="button" onClick={onNextClick}>
              <img
                src={arrowRight}
                alt="Arrow left icon"
                width="9"
                height="15"
              />
            </Button>
          </li>
        </List>
      )}
    </>
  );
};

Pagination.protoTypes = {
  games: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

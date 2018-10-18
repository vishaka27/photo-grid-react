import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Column, GridWrapper } from './StyledComps';

import './styles.css';

const Row = styled.div`
  &:after {
    content: '';
    clear: both;
    display: table;
  }
`;

const Grid = props => {
  const { data } = props;

  return (
    <GridWrapper className="photo-grid-wrapper">
      {data && (
        <Row>
          {data.map(photo => {
            console.log(photo.imageURL);
            return (
              <Column span="6" className="photo-column">
                <img src={photo.imageURL} alt={photo.title} />
              </Column>
            );
          })}
        </Row>
      )}
    </GridWrapper>
  );
};

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};
export default Grid;

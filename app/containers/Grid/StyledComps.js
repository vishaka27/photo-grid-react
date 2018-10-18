import styled from 'styled-components';

export const Column = styled.div`
  float: left;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: ${props => (props.span ? (props.span / 12) * 100 : '8.33')}%;
  }
`;

export const GridWrapper = styled.div`
  max-width: 1450px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

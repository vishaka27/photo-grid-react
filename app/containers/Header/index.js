/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHeader from './selectors';
import reducer from './reducer';
import saga from './saga';

import { loadHeader } from './actions';

import './styles.css';

const HeaderWrapper = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  padding: 10px;
`;
/* eslint-disable react/prefer-stateless-function */
export class Header extends React.PureComponent {
  componentDidMount() {
    this.props.loadHeaderDispatch();
  }

  render() {
    const { header } = this.props;
    return (
      <HeaderWrapper className="header-wrapper">
        {header && header.header && <h1>{header.header.title}</h1>}
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  loadHeaderDispatch: PropTypes.func.isRequired,
  header: PropTypes.shape({}),
};

const mapStateToProps = createStructuredSelector({
  header: makeSelectHeader(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadHeaderDispatch: () => dispatch(loadHeader()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'header', reducer });
const withSaga = injectSaga({ key: 'header', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Header);

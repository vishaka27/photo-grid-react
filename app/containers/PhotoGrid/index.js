/**
 *
 * PhotoGrid
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPhotoGrid from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadPhotos } from './actions';

import Grid from '../Grid/Loadable';

/* eslint-disable react/prefer-stateless-function */
export class PhotoGrid extends React.PureComponent {
  componentDidMount() {
    this.props.loadPhotosDispatch();
  }
  render() {
    const { photogrid } = this.props;
    const { allPhotos } = photogrid;
    return (
      <Grid data={allPhotos}>
        <Helmet>
          <title>PhotoGrid</title>
          <meta name="description" content="Description of PhotoGrid" />
        </Helmet>
      </Grid>
    );
  }
}

PhotoGrid.propTypes = {
  loadPhotosDispatch: PropTypes.func.isRequired,
  photogrid: PropTypes.shape({}),
};

const mapStateToProps = createStructuredSelector({
  photogrid: makeSelectPhotoGrid(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadPhotosDispatch: () => dispatch(loadPhotos()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'photoGrid', reducer });
const withSaga = injectSaga({ key: 'photoGrid', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PhotoGrid);

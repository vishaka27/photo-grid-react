/**
 *
 * Asynchronously loads the component for PhotoGrid
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

import { connect } from 'react-redux'
import withSpinner from '../../components/with-spinner/with-spinner.component'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import { selectIsFetching } from '../../redux/shop/shop.selectors'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
})

export default compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview)

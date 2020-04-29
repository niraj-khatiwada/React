import { connect } from 'react-redux'
import withSpinner from '../../components/with-spinner/with-spinner.component'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import Collection from '../../pages/collection/collection.component'

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
})

export default compose(connect(mapStateToProps), withSpinner)(Collection)

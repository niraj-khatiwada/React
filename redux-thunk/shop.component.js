import React from 'react'

import { Switch, withRouter, Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import Collection from '../../pages/collection/collection.component'
import {
  firestore,
  convertCollectionsSnapshotMap,
} from '../../firebase/firebase.utils'
import updateCollections from '../../redux/shop/shop.actions'
import { connect } from 'react-redux'
import withSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview)
const CollectionwithSpinner = withSpinner(Collection)

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionsSnapshotMap(snapshot)
      updateCollections(collectionMap)
      this.setState({ isLoading: false })
    })
  }

  render() {
    const { match } = this.props
    return (
      <div className="shop-page">
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={(routeProps) => (
              <CollectionOverviewWithSpinner
                isLoading={this.state.isLoading}
                {...routeProps}
              />
            )}
          />
          <Route
            exact
            path={`${match.path}/:categoryID`}
            render={(routeProps) => (
              <CollectionwithSpinner
                isLoading={this.state.isLoading}
                {...routeProps}
              />
            )}
          />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
})

export default withRouter(connect(null, mapDispatchToProps)(ShopPage))

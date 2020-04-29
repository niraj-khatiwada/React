import React from 'react'

import { Switch, withRouter, Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import Collection from '../../pages/collection/collection.component'
import {
  firestore,
  convertCollectionsSnapshotMap,
} from '../../firebase/firebase.utils'

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async (snapshot) =>
      convertCollectionsSnapshotMap(snapshot)
    )
  }

  render() {
    const { match } = this.props
    return (
      <div className="shop-page">
        <Switch>
          <Route exact path={`${match.path}`} component={CollectionOverview} />
          <Route
            exact
            path={`${match.path}/:categoryID`}
            component={Collection}
          />
        </Switch>
      </div>
    )
  }
}

export default withRouter(ShopPage)

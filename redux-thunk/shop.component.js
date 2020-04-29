import React from 'react'

import { Switch, withRouter, Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import Collection from '../../pages/collection/collection.component'
import updateCollections from '../../redux/shop/shop.actions'
import { connect } from 'react-redux'
import withSpinner from '../../components/with-spinner/with-spinner.component'
import { createStructuredSelector } from 'reselect'

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions'
import { selectIsFetching } from '../../redux/shop/shop.selectors'

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview)
const CollectionwithSpinner = withSpinner(Collection)

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionStartAsync()
  }

  render() {
    const { match, isFetching } = this.props
    return (
      <div className="shop-page">
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={(routeProps) => (
              <CollectionOverviewWithSpinner
                isLoading={isFetching}
                {...routeProps}
              />
            )}
          />
          <Route
            exact
            path={`${match.path}/:categoryID`}
            render={(routeProps) => (
              <CollectionwithSpinner isLoading={isFetching} {...routeProps} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopPage)
)

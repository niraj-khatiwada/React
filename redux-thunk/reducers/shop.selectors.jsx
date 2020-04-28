import { createSelector, createSelectorCreator } from 'reselect'

const selectShop = (state) => state.shop

const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
)

export const selectCollections = (routeParams) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[routeParams]
  )

export const shopCollectionArray = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((item) => collections[item])
)

export default selectShopCollections

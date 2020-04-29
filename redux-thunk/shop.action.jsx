import {
  convertCollectionsSnapshotMap,
  firestore,
} from '../../firebase/firebase.utils'

export const fetchCollectionStart = () => ({
  type: 'FETCH_COLLECTIONS_START',
})

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: 'FETCH_COLLECTIONS_SUCCESS',
  payload: collectionsMap,
})

export const fetchCollectionFailure = (err) => ({
  type: 'FETCH_COLLECTIONS_FAILURE',
  payload: err,
})

export const fetchCollectionStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection('collections')
  dispatch(fetchCollectionStart())

  collectionRef
    .get()
    .then((snapshot) => {
      const collectionMap = convertCollectionsSnapshotMap(snapshot)
      dispatch(fetchCollectionSuccess(collectionMap))
    })
    .catch((err) => dispatch(fetchCollectionFailure(err)))
}

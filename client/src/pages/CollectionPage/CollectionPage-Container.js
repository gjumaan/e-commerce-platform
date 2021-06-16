import { connect } from 'react-redux';
import { selectIsCollectionsLoaded } from '../../redux/Shop/Shop-Selectors';
import WithSpinner from '../../components/With-Spinner/With-Spinner';
import CollectionPage from '../CollectionPage/CollectionPage';

const mapStateToProps = (state) => ({
    isLoading: !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage))

export default CollectionPageContainer;
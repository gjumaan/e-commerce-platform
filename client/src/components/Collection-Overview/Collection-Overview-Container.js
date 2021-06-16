import { connect } from 'react-redux';
import { selectIsCollectionFetching } from '../../redux/Shop/Shop-Selectors';
import WithSpinner from '../../components/With-Spinner/With-Spinner';
import CollectionOverview from '../../components/Collection-Overview/Collection-Overview';

const mapStateToProps = (state) => ({
    isLoading: selectIsCollectionFetching(state), 
})

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))

export default CollectionOverviewContainer;
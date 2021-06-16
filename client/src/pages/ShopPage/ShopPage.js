import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverviewContainer from '../../components/Collection-Overview/Collection-Overview-Container';
import CollectionPageContainer from '../CollectionPage/CollectionPage-Container';
import { fetchCollectionsStart } from '../../redux/Shop/Shop-Actions';

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])

    return (
        <div className='shop-page'>  
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )

}

export default connect(null, mapDispatchToProps)(ShopPage);
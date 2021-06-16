import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/Shop/Shop-Selectors';
import CollectionPreview from '../Collection-Preview/Collection-Preview';
import './Collection-Overview.scss';

const mapStateToProps = (state) => ({
    collections: selectCollectionsForPreview(state)
})

const CollectionOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {
                collections.map( ({ id, ...otherCollectionProps }) => { 
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    )
                })
            }
        </div>
    )
}

export default connect(mapStateToProps)(CollectionOverview);
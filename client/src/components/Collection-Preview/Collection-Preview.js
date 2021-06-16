import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../Collection-Item/Collection-Item';
import './Collection-Preview.scss';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
    return (
        <div className='collection-preview'>
            <h1 onClick={() => history.push(`${match.path}/${routeName}`)} className='title'>{title.toUpperCase()}</h1>
            
            <div className='preview'> 
                {
                    items.filter((item, index) => index < 4).map((item) => {
                        return (
                            <CollectionItem key={item.id} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);
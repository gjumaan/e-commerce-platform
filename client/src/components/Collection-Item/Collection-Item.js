import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/Cart/Cart-Actions';
import CustomButton from '../Custom-Button/Custom-Button';
import './Collection-Item.scss';

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='collection-footer'>
                <span>{name}</span>
                <span>${price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
        </div> 
    )
}

export default connect(null,mapDispatchToProps)(CollectionItem);
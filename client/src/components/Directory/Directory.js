import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/Directory/Directory-Selectors'
import MenuItem from '../Menu-Item/Menu-Item';
import './Directory.scss';

const mapStateToProps = (state) => ({
    sections: selectDirectorySections(state)
})

const Directory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {
                sections.map( ({ title, id, imageUrl, size, linkUrl }) => { 
                    return (
                        <MenuItem title={title} imageUrl={imageUrl} size={size} key={id} linkUrl={linkUrl} />
                    )
                })
            }
        </div>
    )
}

export default connect(mapStateToProps)(Directory);
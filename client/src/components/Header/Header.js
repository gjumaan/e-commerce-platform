import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../Cart-Icon/Cart-Icon';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown';
import { selectCurrentUser } from '../../redux/User/User-Selectors';
import { selectCartHidden } from '../../redux/Cart/Cart-Selectors';
import { signOutStart } from '../../redux/User/User-Actions'
import './Header.scss';

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
})

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
})

const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                {
                    currentUser ?
                    <div className='option' onClick={signOutStart}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ?
                null
                :
                <CartDropdown />
            }
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage'
import LoginPage from './pages/LoginPage/LoginPage';
import Checkout from './pages/Checkout/Checkout';

import Header from './components/Header/Header';

import './App.css';

import { selectCurrentUser } from './redux/User/User-Selectors'
import { checkUserSession } from './redux/User/User-Actions';

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<LoginPage />)} />
        <Route exact path='/checkout' component={Checkout} />
      </Switch>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

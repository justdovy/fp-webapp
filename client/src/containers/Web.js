import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
//import styled from 'styled-components';
//import { disableBodyScroll, enableBodyScroll, } from 'body-scroll-lock';
import 'tachyons';

// Containers

// Admin
import AddProp from './admin/AddProp';

// Client
import Home from './client/Home';
import Account from './client/Account';
import Signup from './client/Signup';
import Login from './Login';
import BrowseProp from './client/BrowseProp';
import Property from './client/Property';
import SavedLoc from './client/SavedLoc';
import SavedProp from './client/SavedProp';

// Components


class Web extends Component {
    render() {
        const { location } = this.props;

        return (
            <div className="main">
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timout={{ enter: 600, exit: 300 }}
                        classNames="fade">
                        <Switch location={location} classNames="test-modify">
                            <Route render={() => <Home />} path="/" exact />
                            <Route render={() => <Account />} path="/account" exact />
                            <Route render={() => <Signup />} path="/signup" exact />
                            <Route render={() => <Login />} path="/login" exact />
                            <Route render={() => <BrowseProp />} path="/browse-properties" exact />
                            <Route render={() => <Property />} path="/property" exact />
                            <Route render={() => <SavedLoc />} path="/savedloc" exact />
                            <Route render={() => <SavedProp />} path="/savedprop" exact />

                            <Route render={() => <AddProp />} path="/addprop" exact />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default withRouter(Web);
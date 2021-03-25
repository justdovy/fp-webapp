import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { disableBodyScroll, enableBodyScroll, } from 'body-scroll-lock';
import 'tachyons';

// Containers
import Home from './Home';
import Account from './Account';
import Signup from './Signup';
import Login from './Login';
import BrowseProp from './BrowseProp';
import Property from './Property';
import SavedLoc from './SavedLoc';
import SavedProp from './SavedProp';

// Components
import mainMenu from '../components/mainMenu'

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
                            <Route render={()=> <Home>
                                <mainMenu/>
                            </Home>} path="/" exact/>
                            <Route render={()=> <Account/>} path="/account" exact/>
                            <Route render={()=> <Signup/>} path="/signup" exact/>
                            <Route render={()=> <Login/>} path="/login" exact/>
                            <Route render={()=> <BrowseProp/>} path="/browseProp" exact/>
                            <Route render={()=> <Property/>} path="/property" exact/>
                            <Route render={()=> <SavedLoc/>} path="/savedLoc" exact/>
                            <Route render={()=> <SavedProp/>} path="/savedProp" exact/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default withRouter(Web);
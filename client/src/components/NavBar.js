import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LeftMenu from '../components/Icon_Hamburger';
import RightMenu from '../components/Icon_Profile';

class Name extends Component {

    state = {
        leftMenu: "hide-left-menu",
        rightMenu: "hide-right-menu"
    }

    // closeMenu = () => {
    //     this.setState({
    //         leftMenu: "hide-left-menu",
    //         rightMenu: "hide-right-menu"
    //     })
    // }

    leftMenu = () => {
        if (this.state.leftMenu === "hide-left-menu") {
            this.setState({
                rightMenu: "hide-right-menu",
                leftMenu: "show-left-menu"
            })
        } else {
            this.setState({
                leftMenu: "hide-left-menu"
            })
        }
    }

    rightMenu = () => {
        if (this.state.rightMenu === "hide-right-menu") {
            this.setState({
                leftMenu: "hide-left-menu",
                rightMenu: "show-right-menu"
            })
        } else {
            this.setState({
                rightMenu: "hide-right-menu"
            })
        }
    }

    render() {
        return (
            <Wrapper>
                <div className="absolute left-1 top-1" onClick={this.leftMenu}>
                    <LeftMenu />
                </div>
                <div className="absolute right-1 top-1" onClick={this.rightMenu}>
                    <RightMenu />
                </div>
                <div className={`absolute top-0 left-list ${this.state.leftMenu}`}>
                    <div className="item">
                        <Link to="/browse-properties" className="link">Browse Properties</Link>
                    </div>
                    <div className="item">
                        <Link to="/" className="link">Tenant Guide</Link>
                    </div>
                    <div className="item">
                        <Link to="/" className="link">Contact Us</Link>
                    </div>
                    <div className="item">
                        <Link to="/" className="link">Blog</Link>
                    </div>
                </div>
                <div className={`absolute top-0 right-list ${this.state.rightMenu}`}>
                    <div className="item">
                        <Link to="/" className="link">Saved Properties</Link>
                    </div>
                    <div className="item">
                        <Link to="/" className="link">Saved Locations</Link>
                    </div>
                    <div className="item">
                        <Link to="/" className="link">Manage Account</Link>
                    </div>
                    <div className="item">
                        <Link to="/" className="link">Log out</Link>
                    </div>
                </div>
            </Wrapper>
        );
    }
};

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 48px;

    .left-list{
        width: 800px;
        left: 46px;
        //background: rgb(0,0,0, 0.3);
        height: 48px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: #fff;
    }
    .right-list{
        width: 800px;
        right: 46px;
        //background: rgb(0,0,0, 0.3);
        height: 48px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: #fff;
    }
    .item{
        //border-bottom: 1px solid #fff;
    }
    .link{
        color: #fff;
    }

    .hide-left-menu{
        z-index: 1;
        div:nth-child(1){
            margin-top: -70px;
            transition:0.2s;
            transition-delay:0.6s;
        }
        div:nth-child(2){
            margin-top: -70px;
            transition:0.2s;
            transition-delay:0.4s;
        }
        div:nth-child(3){
            margin-top: -70px;
            transition:0.2s;
            transition-delay:0.2s;
        }
        div:nth-child(4){
            margin-top: -70px;
            transition:0.2s;
            transition-delay:0s;
        }
    }
    .hide-right-menu{
        z-index: 1;        
        div:nth-child(1){
            margin-top: -70px;
            transition:0.2s;
            transition-delay:0s;
        }
        div:nth-child(2){
            margin-top: -70px;
            transition:0.2s;
            transition-delay:0.2s;
        }
        div:nth-child(3){
            margin-top: -70px;
            transition:0.2s;
            transition-delay:0.4s;
        }
        div:nth-child(4){
            margin-top: -70px;
            transition:0.2s;
            transition-delay:0.6s;
        }
    }
    .show-left-menu{
        z-index: 2;
        div:nth-child(1){
            margin-top: 0px;
            transition:0.2s;
            transition-delay:0s;
        }
        div:nth-child(2){
            margin-top: 0px;
            transition:0.2s;
            transition-delay:0.2s;
        }
        div:nth-child(3){
            margin-top: 0px;
            transition:0.2s;
            transition-delay:0.4s;
        }
        div:nth-child(4){
            margin-top: 0px;
            transition:0.2s;
            transition-delay:0.6s;
        }
    }
    .show-right-menu{
        z-index: 2;
        div:nth-child(1){
            margin-top: 0px;
            transition:0.2s;
            transition-delay:0.6s;
        }
        div:nth-child(2){
            margin-top: 0px;
            transition:0.2s;
            transition-delay:0.4s;
        }
        div:nth-child(3){
            margin-top: 0px;
            transition:0.2s;
            transition-delay:0.2s;
        }
        div:nth-child(4){
            margin-top: 0px;
            transition:0.2s;
            transition-delay:0s;
        }
    }
`;

export default Name;
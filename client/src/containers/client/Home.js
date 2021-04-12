import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import styled from 'styled-components';

// Components
import Title from '../../components/Title'
import SearchBar from '../../components/SearchBar'
import Featured from '../../components/Featured'
import NAPtitle from '../../components/NAPtitle'
import NAPitem from '../../components/NAPitem'
import HomeS1 from '../../components/HomeS1'
import HomeS2 from '../../components/HomeS2'

// Images
import bgImage from '../../imgs/general/bg-main.png'
import fImage from '../../imgs/general/featured-paddington.jpeg'
import pImage from '../../imgs/general/nap1.png'

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

// Home page container (smart component)
class home extends Component {
    render() {
        return (
            <Wrapper>
                <NavBar />
                <div className="bg">
                    <img src={bgImage} alt="" />
                </div>
                
                <div className="title center">
                    <Title />
                </div>
                <div className="search-bar center">
                    <SearchBar />
                </div>
                <div className="grid">
                    <div className="featured">
                        <Featured
                            image={fImage}
                            area="Paddington" />
                    </div>
                    <div className="featured">
                        <Featured
                            image={fImage}
                            area="Paddington" />
                    </div>
                    <div className="featured">
                        <Featured
                            image={fImage}
                            area="Paddington" />
                    </div>
                    <div className="featured">
                        <Featured
                            image={fImage}
                            area="Paddington" />
                    </div>
                    <div className="featured">
                        <Featured
                            image={fImage}
                            area="Paddington" />
                    </div>
                    <div className="featured">
                        <Featured
                            image={fImage}
                            area="Paddington" />
                    </div>
                </div>
                <div className="nap-title center">
                    <NAPtitle />
                </div>
                <div className="nap-items center">
                    <div className="">
                        <NAPitem
                            image={pImage}
                            area="Paddington"
                            price={1200}
                            bedrooms={2} />
                    </div>
                    <div className="">
                        <NAPitem
                            image={pImage}
                            area="Paddington"
                            price={1200}
                            bedrooms={2} />
                    </div>
                    <div className="">
                        <NAPitem
                            image={pImage}
                            area="Paddington"
                            price={1200}
                            bedrooms={2} />
                    </div>
                </div>
                <div className="section1 mt6 center">
                    <HomeS1 />
                </div>
                <div className="section2 mt6 center">
                    <HomeS2 />
                </div>
                <Footer />
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    overflow: hidden;
    //padding-bottom: 100px;
    
    .bg{
        position: absolute;
        top: 0;
        z-index: -1;
        width:100%;
        height:960px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
            object-position: 0% 0%;
        } 
    }
    .title{
        margin-top: 80px;
        width:fit-content;
    }
    .search-bar{
        margin-top: 60px;
        width:fit-content;
    }

    .grid{
        position: relative;
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
        width: 1060px;
        height: 510px;
        display: grid;
        grid-gap: 0px;
        grid-template-columns: 353px 353px 353px;
        grid-template-rows: 255px 255px;
    }

    .featured{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nap-title{
        position: relative;
        margin-top: 100px;
        width:fit-content;
    }
    .nap-items{
        width: 1060px;
        height: fit-content;
        display: flex;
        justify-content:space-between;
    }
    .section1{
       width:fit-content;
    }
    .section2{
        width:fit-content;
     }
`;

export default home;
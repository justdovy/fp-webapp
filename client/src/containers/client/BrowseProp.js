import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Title from '../../components/Title'
import SearchBar from '../../components/SearchBar'
import LocationsPicker from '../../components/LocationsPicker'
import Filter from '../../components/Filter'
import SingleFilter from '../../components/SingleFilter'
import ApplyFilters from '../../components/ApplyFilters'
import Gmaps from '../../components/Gmaps'

// Images
import bgImage from '../../imgs/general/bg-main.png'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

class BrowseProp extends Component {
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
                <div className="select-title center">Locations</div>
                <div className="locations center">
                    <LocationsPicker />
                </div>
                <div className="select-title center">Filters</div>
                <div className="filters center">
                    <div className="filter">
                        <Filter
                            name="Bedrooms"
                            options={[
                                "-",
                                "1",
                                "2",
                                "3",
                                "4+",
                                "Studio"
                            ]}
                        />
                    </div>
                    <div className="filter">
                        <Filter
                            name="Bathrooms"
                            options={[
                                "-",
                                "1",
                                "2",
                                "3+"
                            ]}
                        />
                    </div>
                    <div className="filter">
                        <Filter
                            name="Building Type"
                            options={[
                                "-",
                                "Apartment",
                                "House"
                            ]}
                        />
                    </div>
                    <div className="filter">
                        <Filter
                            name="Available"
                            options={[
                                "-",
                                "Immediately",
                                "Within 14 days",
                                "Within 30 days"
                            ]}
                        />
                    </div>
                    <div className="filter">
                        <Filter
                            name="Furniture"
                            options={[
                                "-",
                                "Un-furnished",
                                "Part-furnished",
                                "Furnished"
                            ]}
                        />
                    </div>
                    <div className="filter">
                        <Filter
                            name="Min. Lease"
                            options={[
                                "-",
                                "3 months",
                                "6 months",
                                "9+ months"
                            ]}
                        />
                    </div>
                </div>
                <div className="filters center">
                    <div className="single-filter">
                        <SingleFilter name="Accepts pets" />
                    </div>
                    <div className="single-filter">
                        <SingleFilter name="Parking access" />
                    </div>
                    <div className="single-filter">
                        <SingleFilter name="Playground" />
                    </div>
                    <div className="single-filter">
                        <SingleFilter name="Grocery store <500m" />
                    </div>
                    <div className="single-filter">
                        <SingleFilter name="Bills included" />
                    </div>
                </div>
                <div className="apply-filters center">
                    <ApplyFilters />
                </div>
                <div className="search-bar center">
                    <Gmaps />
                </div>
                <Footer />
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
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
        margin-top: 40px;
        margin-bottom: 60px;
        width:fit-content;
    }

    .select-title{
        width:884px;
        color:rgba(255,255,255, 0.8);
        font-weight: bold;
        font-size: 20px;
    }

    .locations{
        margin-top: 20px;
        margin-bottom: 20px;
        width:fit-content;
    }

    .filters{
        display: flex;
        justify-content: space-between;
        width:884px;
        height:fit-content ;
        margin-top: 20px;
    }
    
    .apply-filters{
        margin-top: 40px;
        margin-bottom: 100px;
    }
    `;

export default BrowseProp;
import React from 'react';
import styled from 'styled-components';

import image from '../imgs/general/homeS2.jpg'

const Name = () => {
    return (
        <Wrapper>
            <div className="text">
                <div className="title">
                    What is <br/>
                    Rent With Ease?
                </div>
                <div className="desc">
                    Get to know us and our goal in real estate business.
                </div>
            </div>
            <div className="image">
                <img src={image} alt="" />
            </div>
            
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 1060px;
    height: 560px;
    display:flex;
    flex-direction: row;
    justify-content: center;

    .text{
        display:flex;
        flex-direction: column;
        justify-content: center;
        width: 450px;
        color: #464646;
    }
    .title{
        font-size: 50px;
    }
    .desc{
        font-size: 40px;
    }

    .image{
        width: 666px;
        height: 500px;
        border-radius: 4px;
        overflow: hidden;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0% 0%;
    } 
`;

export default Name;

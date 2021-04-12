import React from 'react';
import styled from 'styled-components';

import house from '../imgs/general/house.jpg'
import flat from '../imgs/general/flat.jpg'

const Name = () => {
    return (
        <Wrapper>
            <div className="images">
                <div className="image house">
                    <img src={house} alt="" />
                </div>
                <div className="image flat">
                    <img src={flat} alt="" />
                </div>
            </div>
            <div className="text">
                <div className="title">
                    Flat or House?
                </div>
                <div className="desc">
                    Read our blog where we compare and give you key points for choosing what is best for you.
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 1060px;
    height: 460px;
    //background:pink;
    display:flex;
    flex-direction: row;
    justify-content: center;

    .images{
        flex:1;
        display:flex;
        flex-direction: row;
        //background:pink;
    }

    .image{
        width: 460px;
        height: 460px;
        border-radius: 50%;
        overflow: hidden;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 20% 0%;
    } 
    .house{
        z-index:1;
        margin-left:-160px;
    }
    .flat{
        margin-left:-200px;
    }

    .text{
        flex:1;
        display:flex;
        flex-direction: column;
        justify-content: center;
        width: 450px;
        margin-left: 60px;
        color: #464646;
    }
    .title{
        font-size: 50px;
    }
    .desc{
        font-size: 40px;
    }
`;

export default Name;

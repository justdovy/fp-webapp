import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import bgImage from '../imgs/general/bg-main2.png'
import styled from 'styled-components';

class home extends Component {
    render() {
        return (
            <Wrapper>
                <div className="bg">
                    <img src={bgImage}/>
                </div>
                
                
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    .bg{
        width:100%;
        height:960px;
        //background: red;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            overflow: hidden;
            object-position: 0% 0%;
        } 
    }
        
`;

export default home;
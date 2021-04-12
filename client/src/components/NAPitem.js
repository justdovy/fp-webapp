import React from 'react';
import styled from 'styled-components';

import IconBedrooms from '../components/Icon_Bedrooms'

const Name = (props) => {
    return (
        <Wrapper>
            <img src={props.image} alt=""/>
            <div className="area">
                {props.area}
            </div>
            <div className="price">
                <b>£{props.price}</b> monthly
            </div>
            <div className="icon">
                <IconBedrooms bedrooms={2}/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: 320px;
    height: fit-content;
    border: 1px solid #464646;
    cursor: pointer;
    color: #464646;
    .area{
        padding:10px 0px 5px 10px;
    }
    .price{
        padding:5px 0px 10px 10px;
    }
    .icon{
        position:absolute;
        right: 10px;
        bottom: 5px;
    }
`;

export default Name;

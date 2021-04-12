import React from 'react';
import styled from 'styled-components';

const Name = (props) => {
    return (
        <Wrapper>
            <img src={props.image} alt=""/>
            <div className="area">{props.area}</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 180px;
    transition: 0.2s;
    &:hover{
        width: 352px;
        height: 198px;
        transition: 0.2s;
    }
    border-radius:4px;
    border: 1px solid rgba(155, 146, 97, 0.6);
    box-shadow: 0 0 10px;
    cursor:pointer;

    img{
        position: absolute;
        object-fit: cover;
        overflow: hidden;
        object-position: 0% 0%;
        width: 100%;
        height: 100%;
        border-radius:4px;
    }
    .area{
        color: #fff;
        z-index: 1;
        font-size: 24px;
        text-shadow: 2px 2px 5px #000;
    }
`;

export default Name;

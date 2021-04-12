import React from 'react';
import styled from 'styled-components';

const Name = (props) => {
    return (
        <Wrapper>
            {props.name}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 10px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.8);
    color: #464646;
    transition: 0.1s;
    &:hover{
        background:rgba(155, 146, 97, 0.8);
        color: #fff;
    }
`;

export default Name;
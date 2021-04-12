import React from 'react';
import styled from 'styled-components';

const Name = () => {
    return (
        <Wrapper>
            Apply Filters and Show Results
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 884px;
    height: 48px;
    color: #fff;
    background: rgba(155, 146, 97, 0.8);
    transition: 0.1s;
    font-size: 18px;
    border-radius: 4px;
    &:hover{
        background: rgba(155, 146, 97, 1);
        transition: 0.1s;
    }
`;

export default Name;
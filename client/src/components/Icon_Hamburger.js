import React from 'react';
import styled from 'styled-components';

const mainMenu = () => {
    return (
        <Wrapper>
            <div className="hamburger l" />
            <div className="hamburger m" />
            <div className="hamburger s" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // top: 20px;
    // left: 20px;
    width: fit-content;
    height: 14px;
    .hamburger{
        background: #fff;
        height: 2px;                              
    }
    .l{width:30px;}
    .m{width:20px;}
    .s{width:10px;}
`;

export default mainMenu;
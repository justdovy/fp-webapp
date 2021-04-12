import React from 'react';
import styled from 'styled-components';

const Name = () => {
    return (
        <Wrapper>
            <div className="title">
                Newly Added Properties
            </div>
            <div className="lines">
                <div className="block"/>
                <div className="block right"/>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    .title{
        color: #464646;
        font-size: 30px;
        text-align: center;
    }
    .lines{
        display:flex;
        flex-direction: row;
        margin-top: 10px;
    }
    .block{
        width: 370px;
        height: 24px;
        border-top: 1px solid #464646;
        border-left: 1px solid #464646;
    }
    .right{
        border-right: 1px solid #464646;
    }
`;

export default Name;

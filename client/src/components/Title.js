import React from 'react';
import styled from 'styled-components';

const Name = () => {
    return (
        <Wrapper>
            <div className="top">
                Rent With Ease
            </div>
            <div className="bottom">
                London
            </div>
            
        </Wrapper>
    );
};

const Wrapper = styled.div`
    text-align: center;
    color: #fff;
    .top{
        font-size:36px;
        border-bottom: 2px solid #707070;
    }
    .bottom{
        margin-top:5px;
        font-size:18px;
    }
`;

export default Name;
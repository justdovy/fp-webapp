import React from 'react';
import styled from 'styled-components';

const icon = <svg width="20" height="20" viewBox="0 0 118 118" style={{ fill: "#fff" }}><g><path d="M115.97,101.597L88.661,74.286c4.64-7.387,7.333-16.118,7.333-25.488c0-26.509-21.49-47.996-47.998-47.996
   S0,22.289,0,48.798c0,26.51,21.487,47.995,47.996,47.995c10.197,0,19.642-3.188,27.414-8.605l26.984,26.986
   c1.875,1.873,4.333,2.806,6.788,2.806c2.458,0,4.913-0.933,6.791-2.806C119.72,111.423,119.72,105.347,115.97,101.597z
    M47.996,81.243c-17.917,0-32.443-14.525-32.443-32.443s14.526-32.444,32.443-32.444c17.918,0,32.443,14.526,32.443,32.444
   S65.914,81.243,47.996,81.243z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>

const Name = () => {
    return (
        <Wrapper>
            <form>

                <input className="input" 
                name="search-input" 
                placeholder="Ealing, King Cross, ..." 
                />

                <div className="button">
                    {icon}
                </div>
                
            </form>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    form{
        display: flex;
        flex-direction: row;
    }

    .input{
        width: 820px;
        height: 64px;
        background: rgba(255, 255, 255, 0.8);
        color: #B4B4B4;
        outline:none;
        border:none;
        border-radius: 4px 0px 0px 4px;
        display: flex;
        padding-left: 20px;
        align-items: center;
        font-style: italic;
        font-size: 20px; 
    }

    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 64px;
        background: rgba(155, 146, 97, 0.8);
        border-radius: 0px 4px 4px 0px;
        cursor:pointer;
        transition: 0.1s;
        &:hover{
            background: rgba(155, 146, 97, 1);
            transition: 0.1s;
        }
    }
`;

export default Name;

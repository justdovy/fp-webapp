import React from 'react';
import styled from 'styled-components';

const icon = <svg width="24" height="24" viewBox="0 0 30 30" style={{ fill: "#464646" }}><rect height="10" width="26" x="2" y="15" /><line style={{fill:"none", stroke:"#464646", strokeWidth:2, strokeLinecap:"round",strokeMiterlimit:10}} x1="28" x2="28" y1="26" y2="15" /><line style={{fill:"none", stroke:"#464646", strokeWidth:2, strokeLinecap:"round",strokeMiterlimit:10}} x1="2" x2="2" y1="26" y2="15" /><path d="M25,4H5C3.895,4,3,4.895,3,6v7h2v-2c0-0.552,0.448-1,1-1h7c0.552,0,1,0.448,1,1v2h2v-2c0-0.552,0.448-1,1-1h7  c0.552,0,1,0.448,1,1v2h2V6C27,4.895,26.105,4,25,4z" /></svg>;

const Name = (props) => {
    return (
        <Wrapper>
            {icon}<b>{props.bedrooms}</b>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    width: fit-content;
    b{
        margin-left:5px;
        color: #464646;
    }
`;

export default Name;
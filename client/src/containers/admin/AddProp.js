import React, { Component } from 'react';
import styled from 'styled-components';

import PropData from '../../components/PropData'

class Name extends Component {
    render() {
        return (
            <Wrapper>
                <PropData />

            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    //position:relative;
    display: flex;
    flex-direction: column;     
    align-items: center;
`;

export default Name;

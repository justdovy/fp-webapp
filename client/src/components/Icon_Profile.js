import React from 'react';
import styled from 'styled-components';

const icon = <svg width="16" height="16" viewBox="0 0 512 512" style={{ fill: "#fff" }}><g><g><path d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z"/></g></g><g><g><path d="M423.966,358.195C387.006,320.667,338.009,300,286,300h-60c-52.008,0-101.006,20.667-137.966,58.195C51.255,395.539,31,444.833,31,497c0,8.284,6.716,15,15,15h420c8.284,0,15-6.716,15-15C481,444.833,460.745,395.539,423.966,358.195z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>

const RightMenu = () => {
    return (
        <Wrapper>
            <div className="">
            {icon}
          </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    cursor: pointer;
`;

export default RightMenu;
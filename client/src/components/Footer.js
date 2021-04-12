import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const icons_size = "16";

const medium = <svg width={icons_size} height={icons_size} viewBox="0 0 24 24" style={{ fill: "#fff" }}><path d="m22.085 4.733 1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.956v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.049-.411.213-.534z" /></svg>

const twitter = <svg width={icons_size} height={icons_size} viewBox="0 0 512 512" style={{ fill: "#fff" }}><g><g><path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
       c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
       c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
       c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
       c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
       c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
       C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
       C480.224,136.96,497.728,118.496,512,97.248z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>

const facebook = <svg width={icons_size} height={icons_size} viewBox="0 0 24 24" style={{ fill: "#fff" }}><path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" /></svg>

const Name = () => {
    return (
        <Wrapper>
            <div className="signing">
                2021 Rent With Ease
            </div>

            <div className="links">
                <div className="block">
                    <div className="non-link">
                        +44 345 678 903
                    </div>
                    <div className="non-link">
                        CONTACT@MAIL.COM
                    </div>
                    <Link to="/" className="link">
                        ABOUT US
                    </Link>
                </div>
                <div className="block">
                    <Link to="/" className="link">
                        PROPERTIES FOR RENT
                    </Link>
                    <Link to="/" className="link">
                        TENANT GUIDE

                    </Link>
                    <Link to="/" className="link">
                        FEES AND TERMS
                    </Link>
                </div>
                <div className="block">
                    <Link to="/" className="link">
                        RENT YOUR PROPERTY

                    </Link>
                    <Link to="/" className="link">
                        LANDLORD GUIDE

                    </Link>
                    <Link to="/" className="link">
                        FEES AND TERMS
                    </Link>
                </div>
            </div>

            <div className="social">
                <a href=" https://www.medium.com" target="_blank" rel="noopener noreferrer" className="platform">
                    {medium}
                </a>
                <a href=" https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="platform">
                    {twitter}
                </a>
                <a href=" https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="platform">
                    {facebook}
                </a>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position:relative;
    height: 100px;
    margin-top: 100px;
    clear:both;
    background: #9F4646;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    font-size: 12px;

    .signing{
        position:absolute;
        bottom: 5px;
        left: 20px;
        color: #fff;
    }
    .social{
        position:absolute;
        width: 150px;
        height: 30px;
        bottom: 0px;
        right: 10px;
        
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .platform{

    }

    .links{
        position:relative;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        width: 550px;
        height: 60px;
        //background: skyblue;
    }
    .block{
        display: flex;
        flex-direction: column;
        justify-content:space-between;
    }
    .link{
        text-decoration: none;
        color: #fff;
    }
    .non-link{
        color: #fff;
    }
`;

export default Name;
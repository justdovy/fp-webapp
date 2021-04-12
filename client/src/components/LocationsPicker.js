import React, { Component } from 'react';
import styled from 'styled-components';

class LocationsPicker extends Component {
    render() {
        return (
            <Wrapper>
                <div className="selected">

                </div>
                <div className="selector">
                    <div className="alphabet">
                        <div className="char">A</div>
                        <div className="char">B</div>
                        <div className="char">C</div>
                        <div className="char">D</div>
                        <div className="char">E</div>
                        <div className="char">F</div>
                        <div className="char">G</div>
                        <div className="char">H</div>
                        <div className="char">I</div>
                        <div className="char">K</div>
                        <div className="char">L</div>
                        <div className="char">M</div>
                        <div className="char">N</div>
                        <div className="char">O</div>
                        <div className="char">P</div>
                        <div className="char">Q</div>
                        <div className="char">R</div>
                        <div className="char">S</div>
                        <div className="char">T</div>
                        <div className="char">U</div>
                        <div className="char">V</div>
                        <div className="char">W</div>
                        <div className="char">Y</div>
                    </div>

                    <div className="areas">
                        <div className="area-block"><div className="loc">Acton</div></div>
                        <div className="area-block"><div className="loc">Aldwych</div></div>
                        <div className="area-block"><div className="loc">Alperton</div></div>
                        <div className="area-block"><div className="loc">Addiscombe</div></div>
                        <div className="area-block"><div className="loc">Alperton</div></div>
                        <div className="area-block"><div className="loc">Anerley</div></div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position:relative;
    display:flex;
    flex-direction: column;
    width: 884px;
    height: fit-content;
    color: #464646;
    font-weight: bold;

    .selector{
        display: flex;
    }

    .alphabet{
        position: relative;
        width: fit-content;
        height: fit-content;
        display: grid;
        grid-gap: 3px;
        grid-template-columns: 40px 40px 40px 40px 40px;
        grid-template-rows: 30px 30px 30px 30px 30px;
    }
    .char{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.8);
    }

    .areas{
        position: relative;
        width: fit-content;
        height: fit-content;
        margin-left: 50px;
        //background: rgba(155, 155, 155, 0.8);
        display: grid;
        grid-column-gap: 0px;
        grid-row-gap: 3px;
        grid-template-columns: 207px 207px 207px;
        grid-template-rows: 30px 30px 30px 30px 30px;
    }
    .area-block{
        display: flex;
        // justify-content: center;
        // align-items: center;
        
    }
    .loc{
        display: flex;
        align-items: center;
        padding: 0 10px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.8);
    }
`;

export default LocationsPicker;
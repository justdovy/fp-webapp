import React, {useState} from 'react';
import styled from 'styled-components';
import axios from "axios";

const Name = () => {

    const [input, setInput] = useState({
        propID: "",

    })

    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const updateData = {
            propID: input.propID,
        }
        axios.post('http://localhost:3001/create', updateData)
    }

    return (
        <Wrapper>
            <div className="left-hs">
                {/* // left block */}
                <div className="prop-data-block">
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Property ID:
                        </label>
                        <input onChange={handleChange} name="propID" value={input.propID} className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Area:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Postcode:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Street:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Available:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Bedrooms:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Bathrooms:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Parking access:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Accepts pets:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                </div>
                {/* // right block */}
                <div className="prop-data-block">
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Landlord:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Service charge:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Lease:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Payment due by:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Contract length:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Start:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            End:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                    <div className="prop-data-row">
                        <label className="prop-data-label">
                            Deposit:
                        </label>
                        <input className="prop-data-input" placeholder="input-field" />
                    </div>
                </div>
            </div>
            <div className="right-hs">
                <div className="top-block">
                    <div className="title">
                        Status:
                    </div>
                    <div className="buttons">
                        <div className="btn">
                            Available
                        </div>
                        <div className="btn">
                            Occupied
                        </div>
                        <div className="btn">
                            Unlisted
                        </div>

                    </div>
                </div>
                <div className="bottom-block">
                    <div>
                        Agent:
                    </div>
                </div>
            </div>
            <button onClick={handleClick}>submit</button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    //position:relative;
    
    width: 1160px;
    display: flex;
    flex-direction: row;
    margin-top: 100px; 
    .left-hs{
        flex:3;
        display: flex;
        flex-direction: row;
        .prop-data-block{
            flex:1;
            display: flex;
            flex-direction: column;
            //justify-content: space-around;
            //align-items: space-around; 
            //background: skyblue;
            .prop-data-row{
                display: flex;
                flex-direction: row;
                 justify-content: space-around;
                 margin-bottom:10px;
                .prop-data-label{
                    //flex:1;
                    width:40%;
                }
                .prop-data-input{
                    //flex:1;
                    width:40%;
                }
            }
        }
    }
    .right-hs{
        flex:1;
        display: flex;
        flex-direction: column;
        .top-block{
            flex:1;
            display: flex;
            flex-direction: column;
            //background: blue;
            .title{
                flex:1;
            }
            .buttons{
                flex:5;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .btn{
                    text-align: center;
                    padding: 5px;
                    border: 1px solid #000;
                    width: 100px;
                }
            }
        }
        .bottom-block{
            flex:1;
            display: flex;
            flex-direction: column;
            //background: skyblue;    
            margin-top: 10px;       
        }
    }
`;

export default Name;
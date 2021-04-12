import React, { Component } from 'react';
import styled from 'styled-components';

class Name extends Component {

    state = {
        list: "hide-list",
        selection: "selected"
    }

    // toggleList = () => {
    //     if (this.state.list === "hide-list") {
    //         this.setState({ list: "show-list", selection: "selecting" })
    //     } else {
    //         this.setState({ list: "hide-list",selection: "selected" })
    //     }
    // }

    render() {
        return (
            <Wrapper>
                <div className="name">{this.props.name}</div>

                <div className={`selector ${this.state.list}`} onClick={this.toggleList}>
                    {/* <div className={`${this.state.selection}`}>{this.props.options[0]}</div> */}
                    {/* <div className="triangle" /> */}
                    <div className={`list ${this.state.list}`}>
                        {this.props.options.map((value, index)=> {
                            return(<div className="option">{value}</div>)
                        })}
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
    width: fit-content;
    height: fit-content;
    color: #464646;
    .name{
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        padding: 0 10px;
        background: rgba(255,255,255, 0.8);
        border-radius: 4px 4px 0 0;
        font-weight: bold;
    }
    .selector{
        position:relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: fit-content;
        margin-top: 1px;
        background: rgba(255,255,255, 0.8);
        border-radius: 0 0 4px 4px;
        cursor: pointer;

        .selected{
            padding: 5px 10px;
        }
        .selecting{
            padding: 5px 10px;
            border-bottom: 1px solid #fff;
        }

        .triangle{
            position:absolute;
            right:10px;
            top: 7px;
            width: 0; 
            height: 0; 
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 12px solid #464646;
        }

        .list{
            display: flex;
            flex-direction: column;

            div:last-child{
                border-radius: 0 0 4px 4px;
            }
            
            .option{
                display: flex;
                align-items: center;
                width: 100%;
                height: fit-content;
                padding: 5px 10px;
                transition: 0.1s;
                &:hover{
                    background:rgba(155, 146, 97, 0.8);
                    color: #fff;
                }
            }
        }

        // .hide-list{
        //     display: none;
        // }
        // .show-list{
        //     display: flex;
        //     flex-direction: column;
        // }

    }

`;

export default Name;
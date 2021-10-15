import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg';
import { Fade } from 'react-reveal';
import cardNav from './CardSection';
import chartNav from './ChartSection';
import messageNav from './MessagingSection';
import Payment from './PaymentSection';
import QandA from './FAQSection';

function Navigation() {
    return (
        <Fade top>
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>
                <a href="#">Home</a>
                </li>
                <li>
                <a href="#cardNav">Services</a>
                </li>
                <li>
                    <a href="#chartNav">Pricing</a>
                </li>
                <li>
                    <a href="#messageNav">Supports</a>
                </li>
                <li>
                    <a href="#Payment">Buy!</a>
                </li>
                <li>
                    <a href="#QandA">Q/A</a>
                </li>

            </ul>
            <PrimaryButton name={'Sign Up'} />
        </NavigationStyled>
        </Fade>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 70%;
    }
`;
export default Navigation

import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import logo from '../img/logo.svg';
import CardSection from './CardSection';
import cardNav from './CardSection';

function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
                <div className="footer-con">
                    <div className="logo-con">
                       <div className="logo-items">
                        <img src={logo} alt="" />
                            <p>
                                Suryamani Sudhakar <br />
                                
                            </p>
                       </div>
                    </div>
                    <ul className="botton-nav">
                        <div className="links1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                Press
                            </li>
                            <li>
                                Fees
                            </li>
                        </div>
                        <div className="links2">
                            <li>
                                Services
                            </li>
                            <li>
                                Projects
                            </li>
                            <li>
                                Affiliate
                            </li>
                        </div>
                        <div className="links3">
                            <li>
                               Terms of use
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                            <li>
                               Contact us
                            </li>
                        </div>
                    </ul>
                </div>
            </InnerLayout>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    padding: 0 18rem;
    background-color: #DCE2F0;
    @media screen and (max-width: 1347px){
        padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px){
        padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 5rem 4rem;
    }
    .footer-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .logo-con{
        display: flex;
        align-items: center;
        img{
            width: 90px;
        }
    }

    .botton-nav{
        display: flex;
        justify-content: space-between;
        li{
            padding: 2rem 0;
            color: #16194F;
        }
    }
`;

export default Footer

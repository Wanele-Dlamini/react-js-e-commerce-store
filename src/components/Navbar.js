import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logoImg from '../img/logo_1.png'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logoImg} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-auto">
                        <Link to="/" className="nav-link">
                            <h5>M&L FORMAL AFFAIR</h5>
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer><span className="mr-2"><i className="fas fa-cart-plus"/></span>my cart</ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
position: sticky;
top: 0;
z-index: 100;
height: 50px;
background: var(--mainDark) !important;
justify-content: space-between;
.nav-link{
    color: var(--mainWhite)!important;
    font-size: 0.5rem;
    text-align: center;
    text-transform: uppercase;
    margin-left: 25rem;
}
`
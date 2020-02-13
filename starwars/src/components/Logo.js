import React from 'react';
import styled from 'styled-components';
import logo from '../images/star-wars-logo.png';

const LogoContainer = styled.div`
    width: 100%;
    margin-top: 1rem;
`

const Header = styled.h1`
    font-size: 3.5rem;
    color: yellow;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
`
const LogoImg = styled.img`
    overflow: hidden;
    width: 25%;
    margin:0 auto;
`

const Logo = () => {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt='Star Wars Logo'/>
            <Header>Characters</Header>
        </LogoContainer>
    );
}

export default Logo;
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    height: 400px;
    width: 300px;
    transform-style: preserve-3d;
    perspective: 600px;
    transition: .5s;
    display: inline-block;
`

const CardFront = styled.div`
    margin: 0 auto;
    height: 100%;
    width: 100%;
    background-color: #000000;
    color: white;
    backface-visibility: hidden;
    transform: rotateX(0deg);
    transition: .5s;
    ${CardContainer}:hover & {
        transform: rotateX(-180deg);
    }
`

const CardBack = styled.div`
    height: 400px;
    width: 100%;
    margin-top: -400px; //To make even with the top of the card
    background-color: rgba(24, 24, 24, 0.8);
    backface-visibility: hidden;
    transform: rotateX(180deg);
    transition: .5s;
    color: #ffffff;
    text-align: center;
    border: 1px solid yellow;
    padding: 1rem;
    ${CardContainer}:hover & {
        transform: rotateX(0deg);
    }
`

const CardImg = styled.img`
    width: 100%;
`

const CardTitle = styled.h3`
    z-index: 1;
    font-size: 2.5rem;
    text-align: center;
    margin: ${props => props.marTop};
    transition-property: none;
`

const CardText = styled.p`
    text-align: left;
    margin: 0;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    span {
        font-size: 2rem;
    }
`

const Card = props => {
    let imgSrc;
    //Giving up on films and species for now to make sure I hit MVP

    function getPic() {
        if (props.name == 'C-3PO') {
            imgSrc = require('../images/2.jpg');
        } else if (props.name == 'R2-D2') {
            imgSrc = require('../images/3.jpg')
        } else {
            imgSrc = require('../images/1.jpg');
        }
    }

    return (
        <CardContainer>
            <CardFront>
                <CardImg src={require('../images/1.jpg')} />      
                 <CardTitle marTop='-8rem 1rem'>{props.name}</CardTitle>
            </CardFront>
            <CardBack>
                <CardTitle marTop='0 auto 2rem auto'>{props.name}</CardTitle>
                <CardText><span>height: </span>{props.height}</CardText>
                <CardText><span>mass: </span>{props.mass}</CardText>
                <CardText><span>gender: </span>{props.gender}</CardText>
                <CardText><span>hair color: </span>{props.hairColor}</CardText>
                {/* <CardText><span>species: </span>{props.species}</CardText> */}
                {/* <CardText><br/><span>films: </span><br/></CardText> */}
                {/* {Array.isArray(props.films[props.charId]) ? props.films[props.charId].map((film, i) => <CardText ky={i}>{film}</CardText>) : <CardText>Loading...</CardText>} */}
            </CardBack>
        </CardContainer>
    );
}

export default Card;
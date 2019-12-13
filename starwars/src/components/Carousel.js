import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CarouselContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const CarouselButton = styled.div`
    width: 10%;
    display: inline-block;
    cursor: pointer;
    color: white;
    font-size: 4rem;
`

const prevBtnText = '<';
const nextBtnText = '>';

const placeholderFilmArray = [
    'A New Hope',
    'The Empire Strikes Back',
    'Return of the Jedi',
    'The Last Jedi'
];

const Carousel = props => {
    return (
        <CarouselContainer>
            <CarouselButton>{prevBtnText}</CarouselButton>
            <Card   name={props.dataArray[0] === undefined ? 'Loading...' : props.dataArray[0].name} 
                    height={props.dataArray[0] === undefined ? 'Loading...' : props.dataArray[0].height} 
                    mass={props.dataArray[0] === undefined ? 'Loading...' : props.dataArray[0].mass} 
                    species={props.dataArray[0] === undefined ? 'Loading...' : props.dataArray[0].species} 
                    films={props.dataArray[0] === undefined ? 'Loading...' : props.dataArray[0].films} />
            <Card name='Luke Skywalker' height='172' mass='77' species='human' films={placeholderFilmArray} />
            <Card name='Luke Skywalker' height='172' mass='77' species='human' films={placeholderFilmArray} />
            <CarouselButton>{nextBtnText}</CarouselButton>
        </CarouselContainer>
    );
}

export default Carousel;
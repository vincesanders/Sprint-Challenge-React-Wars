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
                    gender={props.dataArray[0] === undefined ? 'Loading...' : props.dataArray[0].gender}
                    hairColor={props.dataArray[0] === undefined ? 'Loading...' : props.dataArray[0].hair_color}
                    // species={props.species[0] === undefined ? 'Loading...' : props.species} 
                    // films={props.films[0] === undefined ? 'Loading...' : props.films} charId={0} 
                    />
            <Card 
                name={props.dataArray[1] === undefined ? 'Loading...' : props.dataArray[1].name} 
                height={props.dataArray[1] === undefined ? 'Loading...' : props.dataArray[1].height} 
                mass={props.dataArray[1] === undefined ? 'Loading...' : props.dataArray[1].mass} 
                gender={props.dataArray[1] === undefined ? 'Loading...' : props.dataArray[1].gender}
                hairColor={props.dataArray[1] === undefined ? 'Loading...' : props.dataArray[1].hair_color}  
            />
            <Card
                name={props.dataArray[2] === undefined ? 'Loading...' : props.dataArray[2].name} 
                height={props.dataArray[2] === undefined ? 'Loading...' : props.dataArray[2].height} 
                mass={props.dataArray[2] === undefined ? 'Loading...' : props.dataArray[2].mass} 
                gender={props.dataArray[2] === undefined ? 'Loading...' : props.dataArray[2].gender}
                hairColor={props.dataArray[2] === undefined ? 'Loading...' : props.dataArray[2].hair_color}              
            />
            <CarouselButton>{nextBtnText}</CarouselButton>
        </CarouselContainer>
    );
}

export default Carousel;
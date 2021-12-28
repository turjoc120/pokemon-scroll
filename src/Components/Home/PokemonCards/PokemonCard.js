import React from 'react';
import { Col } from 'react-bootstrap';

const PokemonCard = ({ pokemon }) => {

    // Attacks
    let attacksArray = []
    const attacks = pokemon?.attacks?.map(attack => attacksArray.push(attack.name))

    // Abilities
    let abilitiesArray = []
    pokemon?.abilities?.map(abilitie => abilitiesArray.push(abilitie.name))

    return (
        <Col>
            <div className='p-3 bg-light card' style={{ borderRadius: '10px' }}>
                <img className='img-fluid' src={pokemon.images.large} alt="pokemon card" />
                <div>
                    <div className='d-flex justify-content-between align-items-center my-3'>
                        <h4>{pokemon.name}</h4>
                        <div className='fs-4'><span className='fw-bold'>HP: </span>{pokemon.hp}</div>

                    </div>
                    <div className='mt-4'>
                        <div><span className='fw-bold'>Attacks: </span> {attacksArray.join(',')} </div>
                    </div>
                    <div className='my-2'>
                        <div><span className='fw-bold'>Abilities: </span>  {pokemon.abilities ? abilitiesArray.join(',') : "N/A"} </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default PokemonCard;
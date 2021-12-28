import axios from 'axios';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import PokemonCard from './PokemonCards/PokemonCard';


const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        axios.get(`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=8`).then(res => {
            setPokemons(pokemons.concat(res.data.data))

        })

    }, [page])
    console.log(pokemons);

    return (
        <Container fluid className='home'>
            <Container >
                <div>
                    <InfiniteScroll
                        dataLength={pokemons?.length}
                        next={() => setPage(page + 1)}
                        hasMore={true}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! no more pokemons</b>
                            </p>}

                    />
                    <Row xs={1} md={2} lg={3} className="g-4">

                        {pokemons?.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} ></PokemonCard>)}

                    </Row>

                </div>
            </Container>
        </Container>
    );
};

export default Home;
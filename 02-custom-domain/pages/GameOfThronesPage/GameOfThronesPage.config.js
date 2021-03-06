import React from 'react';
import Header from '../../views/Header';
import CharacterList from './views/CharacterList';
import getJson from './getJson';

// We load the list of characters from a remote server.
const getInitialProps = async () => {
    const url = 'https://cors.io/?https://brillout-misc.github.io/game-of-thrones/characters/list.json';
    const characters = await getJson(url);
    return {characters};
};

// Our loaded list is then available at `props.characters`.
const GameOfThronesView = props => (
    <div>
        <Header/>
        <CharacterList characters={props.characters}/>
    </div>
);

export default {
    route: '/game-of-thrones',
    getInitialProps,
    view: GameOfThronesView,

    // Set the "static-ness" of the page.
    // (See the usage manual's "domStatic & htmlStatic" section.)
    htmlStatic: false,
    domStatic: true,
};

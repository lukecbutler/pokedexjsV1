// Pokemon instances: id; species; pokedexEntry; [height; weight; gender; catagory; abilities;] types; weakenesses
const pokemon = 
[
  {
    "id": 1,
    "species": "bulbasaur",
    "pokedexEntry": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "height": 7,
    "weight": 69,
    "gender": "87.5% male / 12.5% female",
    "category": "Seed Pokémon",
    "abilties": ["Overgrow"],
    "types": ["Grass", "Poison"],
    "weaknesses": ["Fire", "Ice", "Flying", "Psychic"],
    "evolutions": ["Ivysaur"]
  },
  {
    "id": 2,
    "species": "ivysaur",
    "pokedexEntry": "The bud on its back becomes large and leafy. When it radiates aroma, that aroma soothes the emotions of people.",
    "height": 10,
    "weight": 130,
    "gender": "87.5% male / 12.5% female",
    "category": "Seed Pokémon",
    "abilties": ["Overgrow"],
    "types": ["Grass", "Poison"],
    "weaknesses": ["Fire", "Ice", "Flying", "Psychic"],
    "evolutions": ["Venusaur"]
  },
  {
    "id": 3,
    "species": "venusaur",
    "pokedexEntry": "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    "height": 20,
    "weight": 1000,
    "gender": "87.5% male / 12.5% female",
    "category": "Seed Pokémon",
    "abilties": ["Overgrow"],
    "types": ["Grass", "Poison"],
    "weaknesses": ["Fire", "Ice", "Flying", "Psychic"],
    "evolutions": []
  },
  {
    "id": 4,
    "species": "charmander",
    "pokedexEntry": "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
    "height": 6,
    "weight": 85,
    "gender": "87.5% male / 12.5% female",
    "category": "Lizard Pokémon",
    "abilties": ["Blaze"],
    "types": ["Fire"],
    "weaknesses": ["Water", "Ground", "Rock"],
    "evolutions": ["Charmeleon"]
  },
  {
    "id": 5,
    "species": "charmeleon",
    "pokedexEntry": "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    "height": 11,
    "weight": 190,
    "gender": "87.5% male / 12.5% female",
    "category": "Flame Pokémon",
    "abilties": ["Blaze"],
    "types": ["Fire"],
    "weaknesses": ["Water", "Ground", "Rock"],
    "evolutions": ["Charizard"]
  },
  {
    "id": 6,
    "species": "charizard",
    "pokedexEntry": "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
    "height": 17,
    "weight": 905,
    "gender": "87.5% male / 12.5% female",
    "category": "Flame Pokémon",
    "abilties": ["Blaze"],
    "types": ["Fire", "Flying"],
    "weaknesses": ["Water", "Electric", "Rock"],
    "evolutions": []
  },
  {
    "id": 7,
    "species": "squirtle",
    "pokedexEntry": "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
    "height": 5,
    "weight": 90,
    "gender": "87.5% male / 12.5% female",
    "category": "Tiny Turtle Pokémon",
    "abilties": ["Torrent"],
    "types": ["Water"],
    "weaknesses": ["Electric", "Grass"],
    "evolutions": ["Wartortle"]
  },
  {
    "id": 8,
    "species": "wartortle",
    "pokedexEntry": "Often hides in its shell, then strikes back with spouts of water at every opportunity.",
    "height": 10,
    "weight": 225,
    "gender": "87.5% male / 12.5% female",
    "category": "Turtle Pokémon",
    "abilties": ["Torrent"],
    "types": ["Water"],
    "weaknesses": ["Electric", "Grass"],
    "evolutions": ["Blastoise"]
  },
  {
    "id": 9,
    "species": "blastoise",
    "pokedexEntry": "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.",
    "height": 16,
    "weight": 855,
    "gender": "87.5% male / 12.5% female",
    "category": "Shellfish Pokémon",
    "abilties": ["Torrent"],
    "types": ["Water"],
    "weaknesses": ["Electric", "Grass"],
    "evolutions": []
}]

// get elements & user inputs from the html document
// system outputs - all pokemon information
let idTextElem = document.getElementById('id-text')
let speciesTextElem = document.getElementById("species-text");
let pokedexEntryTextElem = document.getElementById("pokedex-entry-text");
let heightTextElem = document.getElementById("height-text");
let weightTextElem = document.getElementById("weight-text");
let genderTextElem = document.getElementById('gender-text');
let categoryTextElem = document.getElementById('category-text');
let abilitiesTextElem = document.getElementById("abilities-text");

// user inputs - text & button
const userInputElement = document.getElementById('input'); // used by getUserInput
const button = document.getElementById('button');

// input: pokedex ID number
// returns: that pokemon object with that id
function getPokemonObjectFromId(id){
    return pokemon.at(id - 1);
}

// input: pokemon species name
// returns: that specific pokemon with that species property
// purpose: takes a pokemon name & returns it's object
function getPokemonObjectFromSpecies(species){
  return pokemon.find(species) // error is here ('Uncaught TypeError: string "charmander" is not a function')
}

// input: the user input - current the pokemon id number
// returns: value of the user input
function getUserInput(){
    let input = userInputElement.value;
    input = input.toLowerCase();
    return input
}

// input: pokemon object
// returns: null
// purpose: set the innerHTML of the pokemon information elements (displays pokedex information)
function setPokemonInformation(pokemonObject){
    idTextElem.innerHTML = pokemonObject.id;
    speciesTextElem.innerHTML = pokemonObject.species;
    pokedexEntryTextElem.innerHTML = pokemonObject.pokedexEntry;
    heightTextElem.innerHTML = pokemonObject.height;
    weightTextElem.innerHTML = pokemonObject.weight;
    genderTextElem.innerHTML = pokemonObject.gender;
    categoryTextElem.innerHTML = pokemonObject.category;
    abilitiesTextElem.innerHTML = pokemonObject.abilties;

    // gathering & setting this pokemon data took multiple lines, so they are their own functions
    setPokemonTypes(pokemonObject);
    setPokemonWeaknesses(pokemonObject);
    setPokemonImage(pokemonObject);
}

// input: pokemon object
// return: null
// purpose: replace current html image with pokemon image
function setPokemonImage(pokemonObject){
  // get the pokemon id
    let id = pokemonObject.id;
  // find the sprite based on the id & set it to the html image element
    document.getElementById('image').src = "pokemon/" + id + ".png";
}

// input: pokemon object
// return: null
// purpose: sets pokemon's type(s) based on the given pokemon object
function setPokemonTypes(pokemonObject){
  // get the unordered list from html
    let typeListElem = document.getElementById('type-list');
  // clear the list Elements so they do not stack
    typeListElem.innerHTML = "";
  // get the types of the pokemon (array of strings)
    typeList = pokemonObject.types

  // for every type the pokemon has, put it in the innerHTML of the 'type-list' element
    for (i = 0; i < typeList.length; i++){
        let listElement = document.createElement('li');
        listElement.innerHTML = typeList[i];
        typeListElem.append(listElement);
    }
}

// input: pokemon object
// return: null
// purpose: sets pokemon's weaknesses based on the given pokemon object
function setPokemonWeaknesses(pokemonObject){
    // get the unordered list from html
    let weaknessesListElem = document.getElementById('weaknesses-list');
    // clear the list Elements so they do not stack
    weaknessesListElem.innerHTML = "";
    // get the types of the pokemon (array of strings)
    let weaknessesList = pokemonObject.weaknesses;

    for (i = 0; i < weaknessesList.length; i++){
        let li = document.createElement('li');
        li.innerHTML = weaknessesList[i];
        weaknessesListElem.append(li);
    }
}

// gets the pokemon by it's name
// purpose: runs all functions accordingly
function search() {
  // assume the user input will be the pokemon ID
    // let pokemonID = getUserInput();

  // the user input is the string of the pokemons name
    let pokemonName = getUserInput();
    console.log(pokemonName);

  // get the pokemon by it's species name
    let pokemonObject = getPokemonObjectFromSpecies(pokemonName);
    setPokemonInformation(pokemonObject);
}
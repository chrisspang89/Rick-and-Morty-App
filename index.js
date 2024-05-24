import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

// cardContainer.append(CharacterCard());
cardContainer.innerHTML = "";
async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  console.log(data);
  // Creates an array [1, 2, 3, ..., 20]
  // let htmlCards = new Array(20);
  // for (let i = 0; i < htmlCards.length; i++) {
  //   if (data.results[i] !== undefined) {
  //     htmlCards[i] = {
  //       title: data.results[i].name,
  //       status: data.results[i].status,
  //       image: data.results[i].image,
  //       type: data.results[i].type,
  //       occur: data.results[i].episode.length,
  //     };
  //   } else {
  //     htmlCards[i] = {
  //       title: null,
  //       status: null,
  //       image: null,
  //       type: null,
  //       occur: null,
  //     };
  //   }
  //   cardContainer.append(CharacterCard(htmlCards[i]));
  // }

  // console.log(htmlCards);

  data.results.forEach((element) => {
    cardContainer.append(CharacterCard(element));
    console.log(element);
  });
}

fetchCharacters();

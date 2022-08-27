const randomButton = document.querySelector('#button');

randomButton.addEventListener('click', (e) => {
  e.preventDefault();

  fetch('https://api.scryfall.com/cards/random')
    .then((response) => response.json())
    .then((data) => renderCard(data));
});

function renderCard(data) {
  const tile = document.getElementById('tile-container');
  const manaCost = document.getElementById('mana-cost');
  const set = document.getElementById('set');
  const cardType = document.getElementById('card-type');
  const content = document.getElementById('content');
  const powerToughness = document.getElementById('power-toughness');
  const price = document.getElementById('price');

  const img = document.createElement('img');
  img.src = data.image_uris.small;

  manaCost.innerHTML = `Mana Cost: ${data.mana_cost}`;
  set.innerHTML = `Set: ${data.set_name}`;
  cardType.innerHTML = `Type: ${data.type_line}`;
  content.innerHTML = `Text: ${data.oracle_text}`;
  powerToughness.innerHTML = `${data.power}/${data.toughness}`;
  price.innerHTML = `$${data.prices.usd}`;

  tile.appendChild(img);
}

function renderAllCards(data) {
  let cardTiles = [];
  const tile = document.getElementById('tile');
  tile.innerHTML = '';

  cardTiles = JSON.parse(data); //populate array with json data

  //loop through data in the JSON array
  for (i = 0; i <= cardTiles.length - 1; i++) {
    const img = document.createElement('img');
    img.src = cardTiles[i].image_uris.small;

    tile.appendChild(img);
  }
}

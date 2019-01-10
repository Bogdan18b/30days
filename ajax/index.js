const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const data = [];

fetch(endpoint)
  .then(data => data.json())
  .then(cities => data.push(...cities));

  function findMatches(searchTerm, cities) {
    return cities.filter(place => {
      const regex = new RegExp(searchTerm, 'gi'); // g - global i - case insensitive
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  const formatNumber = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");



  function displayMatches() {
    const matchArray = findMatches(this.value, data);
    const text = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${formatNumber(place.population)}</span>
        </li>
      `;
    }).join("");
    suggestions.innerHTML = text;
  }

  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);

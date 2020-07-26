import get from "./getElement.js";

const grid = get(".grid");
var div = "";

function displayEmployee(data) {
  data.results.forEach((person) => {
    const name = `${person.name.first} ${person.name.last}`;
    const email = `${person.email}`;
    const place = `${person.location.country}`;
    const image = `${person.picture.large}`;
    div += `
        <div class="employee employee2">
            <img src="${image}" alt="" /
            class="employee__image">
            <div class="employee__info">
              <h2 class="employee__name">${name}</h2>
              <p class="employee__email">${email}</p>
              <p class="employee__place">${place}</p>
            </div>
        </div>
        `;

    grid.innerHTML = div;
  });
  return grid;
}

export default displayEmployee;

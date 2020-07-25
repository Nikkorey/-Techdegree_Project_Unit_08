const grid = document.querySelector(".grid");
const URL = "https://randomuser.me/api/?results=12";

var div = "";

fetch(URL)
  .then((data) => data.json())
  .then((response) => displayEmployee(response))
  .catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH!");
    console.log(err);
  });

function displayEmployee(data) {
  data.results.forEach((person) => {
    console.log(person);
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
}

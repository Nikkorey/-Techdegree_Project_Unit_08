import get from "./getElement.js";

const grid = get(".grid");
var div = "";

function displayEmployee(data) {
  // const title = get(".title");
  // if (!data) {
  //   title.texContent = "sorry, no drinks matched your search";
  //   grid.innerHTML = null;
  // }
  data.results.forEach((person) => {
    const name = `${person.name.first} ${person.name.last}`;
    const email = `${person.email}`;
    const place = `${person.location.country}`;
    const image = `${person.picture.large}`;
    div += `
        <article class="employee employee2">
            <img src="${image}" alt="${name}" /
            class="employee__image">
            <div class="employee__info">
              <h2 class="employee__name">${name}</h2>
              <p class="employee__email">${email}</p>
              <p class="employee__place">${place}</p>
            </div>
        </article>
        `;

    grid.innerHTML = div;
  });

  const employee = get(".grid .employee");
  const modalOver = get(".modal__overlay");
  const modalClo = get(".close__btn");

  employee.addEventListener("click", () => {
    modalOver.classList.add("open-modal");
    console.log(employee);
  });

  modalClo.addEventListener("click", () => {
    modalOver.classList.remove("open-modal");
  });

  return grid;
}

export default displayEmployee;

import get from "./getElement.js";
import getAll from "./getAllElement.js";

var div = "";

const displayEmployee = (data) => {
  const grid = get(".grid");
  const employeeList = data.results
    .map((employee) => {
      const name = `${employee.name.first} ${employee.name.last}`;
      const email = `${employee.email}`;
      const place = `${employee.location.country}`;
      const image = `${employee.picture.large}`;

      return `
          <article class="employee">
            <img src="${image}" alt="${name}" /
            class="employee__image">
            <div class="employee__info">
              <h2 class="employee__name">${name}</h2>
              <p class="employee__email">${email}</p>
              <p class="employee__place">${place}</p>
            </div>
          </article>
            `;
    })
    .join("");
  grid.innerHTML = employeeList;

  const employee = document.querySelectorAll(".employee");
  employee.forEach((employeeCard) => {
    employeeCard.addEventListener("click", (e) => {
      const modal = get(".modal__overlay");
      modal.classList.toggle("open-modal");

      const employeeList = data.results
        .map((employee, employeeIndex) => {
          const name = `${employee.name.first} ${employee.name.last}`;
          const email = `${employee.email}`;
          const place = `${employee.location.country}`;
          const image = `${employee.picture.large}`;

          let position = "next";
          if (employeeIndex === 0) {
            position = "active";
          }
          if (employeeIndex === data.results.length - 1) {
            position = "last";
          }

          return `
              <div class="modal__container ${position}">
                <i class="fa fa-times close__btn"></i>
                <i class="fa fa-chevron-left"></i>
                <i class="fa fa-chevron-right"></i>
                <div class="modal__content">
                  <img src="${image}" alt="" /
                  class="employee__image">
                  <h2 class="employee__name">${name}</h2>
                  <p class="employee__email">${email}</p>
                  <p class="employee__place">${place}</p>
                  <hr />
                  <p class="employee__tel">(545)-129-2619</p>
                  <p class="employee__address">
                    1464 Blossom Hill Rd, Louisiana 28135
                  </p>
                  <p class="employee__birth">2/5/1984</p>
                </div>
            </div>`;
        })
        .join("");

      modal.innerHTML = employeeList;

      const closeBtn = get(".close__btn");
      closeBtn.addEventListener("click", closeButton);
    });
  });

  return grid;
};

function closeButton() {
  const modal = get(".modal__overlay");
  modal.classList.remove("open-modal");
}

export default displayEmployee;

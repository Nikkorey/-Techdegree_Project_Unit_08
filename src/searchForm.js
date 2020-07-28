import get from "./getElement.js";
import showEmployee from "./showEmployee.js";

const baseURL = "https://randomuser.me/api/?results=12";

const form = get(".search-form");
const input = get('[name="users"]');

form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  showEmployee(`${baseURL}${value}`);
});

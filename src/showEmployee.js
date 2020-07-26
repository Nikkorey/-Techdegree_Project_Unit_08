import fetchApi from "./fetchApi.js";
import displayEmployee from "./displayEmployee.js";

const showEmployee = async (url) => {
  const data = await fetchApi(url);
  console.log(data);
  const section = await displayEmployee(data);
  console.log(section);
};

export default showEmployee;

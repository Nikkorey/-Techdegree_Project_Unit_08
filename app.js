fetch("https://randomuser.me/api/?results=12")
  .then((response) => {
    response.json().then((data) => {
      for (let employee of data.results) {
        console.log(employee.name);
      }
    });
  })
  .catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH!");
    console.log(err);
  });

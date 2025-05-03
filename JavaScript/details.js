const params = new URLSearchParams(window.location.search);
const prodId = params.get("id");

// console.log(productId);

const URL = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = () => {
  fetch(URL + prodId, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTM2NTFjMjUwNDAwMTUxYWI2YmEiLCJpYXQiOjE3NDYxODAxNDIsImV4cCI6MTc0NzM4OTc0Mn0.gqHgm9oMRMV6a9xQfr0aPRASQQqUZKE5GrJFP4pK6qE",
    },
    body: JSON.stringify(),
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Errore nella fetch");
      }

      return resp.json();
    })
    .then((prodDett) => {
      console.log(prodDett);

      const h2 = document.querySelector("h2");
      h2.innerText = prodDett.name;

      const img = document.querySelector("img");
      img.src = prodDett.imageUrl;
      img.alt = prodDett.description;

      const h5 = document.querySelector("h5");
      h5.innerText = prodDett.name;

      const firstP = document.getElementById("first");
      firstP.innerText = prodDett.description;

      const secondP = document.getElementById("second");
      secondP.innerText = prodDett.brand;

      const thirdP = document.getElementById("third");
      thirdP.innerText = prodDett.price;
    })

    .catch((error) => {
      console.error(error);
    });
};

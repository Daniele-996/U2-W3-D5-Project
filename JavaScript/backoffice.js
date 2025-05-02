const URL = "https://striveschool-api.herokuapp.com/api/product";

const form = document.querySelector("form");
console.log(form);

form.onsubmit = function (e) {
  e.preventDefault();

  const inputName = document.getElementById("name");
  const inputDesc = document.getElementById("description");
  const inputBrand = document.getElementById("brand");
  const inputUrl = document.getElementById("imageUrl");
  const inputPrice = document.getElementById("price");

  const newValue = {
    name: inputName.value,
    description: inputDesc.value,
    brand: inputBrand.value,
    imageUrl: inputUrl.value,
    price: inputPrice.value,
  };

  console.log("SUBMIT", newValue);
  form.reset();

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTM2NTFjMjUwNDAwMTUxYWI2YmEiLCJpYXQiOjE3NDYxODAxNDIsImV4cCI6MTc0NzM4OTc0Mn0.gqHgm9oMRMV6a9xQfr0aPRASQQqUZKE5GrJFP4pK6qE",
    },
    body: JSON.stringify(newValue),
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Errore nella fetch");
      }

      return resp.json();
    })
    .catch((error) => {
      alert("Errore durante la creazione del prodotto!");
      console.error(error);
    });
};

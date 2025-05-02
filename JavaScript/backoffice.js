const URL = "https://striveschool-api.herokuapp.com/api/product";
const form = document.querySelector("form");
console.log(form);

const getObjet = (e) => {
  e.preventDefault();

  const newValue = {
    name: inputName.value,
    description: inputDesc.value,
    brand: inputBrand.value,
    imageUrl: inputUrl.value,
    price: inputPrice.value,
  };

  fetch(URL, {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTM2NTFjMjUwNDAwMTUxYWI2YmEiLCJpYXQiOjE3NDYxODAxNDIsImV4cCI6MTc0NzM4OTc0Mn0.gqHgm9oMRMV6a9xQfr0aPRASQQqUZKE5GrJFP4pK6qE",
    },
    body: JSON.stringify(newValue),
  })
    .then((obj) => {
      form.innerText = "";
      alert("Hai creato un nuovo prodotto!");
      inputName.value = "";
      inputDesc.value = "";
      inputBrand.value = "";
      inputUrl.value = "";
      inputPrice.value = "";
    })
    .catch((error) => {
      alert("Errore durante la creazione del prodotto!");
      console.error(error);
    });
};

form.addEventListener("submit", getObjet);

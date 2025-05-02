const URL = "https://striveschool-api.herokuapp.com/api/product";
const form = document.querySelector("form");
console.log(form);

const nameForm = document.createElement("label");
nameForm.innerText = "Name";
nameForm.for = "name";

const descForm = document.createElement("label");
descForm.innerText = "Description";
descForm.for = "description";

const brandForm = document.createElement("label");
brandForm.innerText = "Brand";
brandForm.for = "brand";

const urlForm = document.createElement("label");
urlForm.innerText = "Url";
urlForm.for = "url";

const priceForm = document.createElement("label");
priceForm.innerText = "Price";
priceForm.for = "price";

const btnSend = document.createElement("button");
btnSend.className = "btn btn-outline-success";
btnSend.type = "submit";
btnSend.innerText = "Invia nuovo elemento";

const inputName = document.createElement("input");
inputName.className = "form-control me-2 my-1";
inputName.type = "text";
inputName.placeholder = "Name";
inputName.ariaLabel = "Search";
inputName.required = true;

const inputDesc = document.createElement("input");
inputDesc.className = "form-control me-2 my-1";
inputDesc.type = "text";
inputDesc.placeholder = "Description";
inputDesc.ariaLabel = "Search";
inputDesc.required = true;

const inputBrand = document.createElement("input");
inputBrand.className = "form-control me-2 my-1";
inputBrand.type = "text";
inputBrand.placeholder = "Brand";
inputBrand.ariaLabel = "Search";
inputBrand.required = true;

const inputUrl = document.createElement("input");
inputUrl.className = "form-control me-2 my-1";
inputUrl.type = "url";
inputUrl.placeholder = "Url";
inputUrl.ariaLabel = "Search";
inputUrl.required = true;

const inputPrice = document.createElement("input");
inputPrice.className = "form-control me-2 my-1";
inputPrice.type = "number";
inputPrice.placeholder = "Price";
inputPrice.ariaLabel = "Search";
inputPrice.required = true;

form.appendChild(nameForm);
form.appendChild(inputName);

form.appendChild(descForm);
form.appendChild(inputDesc);

form.appendChild(brandForm);
form.appendChild(inputBrand);

form.appendChild(urlForm);
form.appendChild(inputUrl);

form.appendChild(priceForm);
form.appendChild(inputPrice);

form.appendChild(btnSend);

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
    .then((response) => {
      if (!response.ok) {
        throw new Error("Problemi di rete?!");
      }
      return response.json();
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

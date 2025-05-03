const URL = "https://striveschool-api.herokuapp.com/api/product/";
const row = document.getElementById("newRow");

const newCard = () => {
  fetch(URL, {
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
    .then((object) => {
      row.innerText = "";
      object.forEach((newObj) => {
        // console.log(newObj);
        // console.log(newObj._id);
        const detailsURL = "./details.html?" + "id=" + newObj._id;
        console.log(detailsURL);

        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-3 ";

        const colCard = document.createElement("div");
        colCard.className = "card-4 shadow p-1 mb-5 bg-body-tertiary rounded";

        const img = document.createElement("img");
        img.className = "bd-placeholder-img card-img-top cardImg";
        img.src = newObj.imageUrl;
        img.alt = newObj.description;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = newObj.name;

        const p = document.createElement("p");
        p.className = "card-text text-truncate";
        p.innerText = newObj.description;

        const brand = document.createElement("p");
        brand.className = "card-text text-truncate";
        brand.innerText = newObj.brand;

        const price = document.createElement("p");
        price.className = "card-text text-truncate";
        price.innerText = newObj.price + "€";

        const divBtn = document.createElement("div");
        divBtn.className = "d-flex justify-content-between align-items-center";

        const divBtnGroup = document.createElement("div");
        divBtnGroup.className = "btn-group";

        const btnFirst = document.createElement("a");
        btnFirst.type = "button";
        btnFirst.href = detailsURL;
        btnFirst.className = "btn btn-sm btn-success";
        btnFirst.innerText = "Details";

        const btnSecond = document.createElement("a");
        btnSecond.type = "button";
        btnSecond.className = "btn btn-sm btn-danger";
        btnSecond.innerText = "Delete";

        divBtnGroup.appendChild(btnFirst);
        divBtnGroup.appendChild(btnSecond);

        divBtn.appendChild(divBtnGroup);

        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        cardBody.appendChild(brand);
        cardBody.appendChild(price);
        cardBody.appendChild(divBtn);

        colCard.appendChild(img);
        colCard.appendChild(cardBody);

        col.appendChild(colCard);

        row.appendChild(col);
      });
    })

    .catch((error) => {
      alert("Errore durante la creazione del prodotto!");
      console.error(error);
    });
};

newCard();

// fetch(URL + newObj._id, {
//   method: "DELETE",
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0OTM2NTFjMjUwNDAwMTUxYWI2YmEiLCJpYXQiOjE3NDYxODAxNDIsImV4cCI6MTc0NzM4OTc0Mn0.gqHgm9oMRMV6a9xQfr0aPRASQQqUZKE5GrJFP4pK6qE",
//   },
//   body: JSON.stringify(),

// });

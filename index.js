const container = document.getElementById("container-id");
const button = document.getElementById("button-id");

function showRecord(record) {
    let element = document.createElement("div");
    let picture = document.createElement("img");
    let cell = document.createElement("p");
    let city = document.createElement("p");
    let country = document.createElement("p");
    let postcode = document.createElement("p");

    element.className = "item-class";
    picture.src = record.picture.large;
    cell.textContent = `Cell: ${record.cell}`;
    city.textContent = `City: ${record.location.city}`;
    country.textContent = `Country: ${record.location.country}`;
    postcode.textContent = `Postcode: ${record.location.postcode}`;

    element.appendChild(picture);
    element.appendChild(cell);
    element.appendChild(city);
    element.appendChild(country);
    element.appendChild(postcode);
    container.appendChild(element);
}

function onClick(e) {
    fetch("https://randomuser.me/api?results=5").then((res) => res.json()).then((data) => data.results.forEach((record) => showRecord(record))).catch((err) => console.error(err));
}

button.addEventListener("click", onClick);
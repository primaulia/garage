// TODO: Build an awesome garag

// create a const for the api
// create an event listener
// get input from user
// post to api
// fetch api with input
// create function to insert input into html
//
const garage = '253';
const form = document.querySelector('form');
const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
const brand = document.querySelector('#brand');
const model = document.querySelector('#model');
const owner = document.querySelector('#owner');
const plate = document.querySelector('#plate');
const cars = document.querySelector('.cars-list');

const fetchCar = () => {
  cars.innerHTML = '';
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data)
      data.forEach((car) => {
        cars.insertAdjacentHTML('afterbegin', `
          <div class="car">
            <div class="car-image">
              <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
            </div>
            <div class="car-info">
              <h4>${car.brand} ${car.model}</h4>
              <p><strong>Owner:</strong> ${car.owner}</p>
              <p><strong>Plate:</strong> ${car.plate}</p>
            </div>
          </div>
          `);
      });
    });
};

const carInGarage = () => {
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      brand: brand.value,
      model: model.value,
      owner: owner.value,
      plate: plate.value
    })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      fetchCar();
    });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(brand.value, owner.value, model.value, plate.value);
  carInGarage();
});

fetchCar();

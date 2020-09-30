const multiple = (value, num) => {
  let result = (value % num === 0) ? true : false;
  return result;
}

const showItem = (array, htmlElement) => {
  array.forEach((value) => htmlElement.innerHTML += `<span class="item"> ${value}</span>`);
}

const main = (e) => {
  e.preventDefault();
  let multipleNumber = [];
  let number = document.getElementById('number');
  let container = document.getElementById('container');
  container.innerHTML = '';

  for (let i = 1; i <= 100; i++) {
    if (multiple(i, number.value)) {
      multipleNumber.push(i);
    }
  }
  showItem(multipleNumber, container);
}


let button = document.getElementById('form-button');
button.addEventListener('click', main);


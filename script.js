const month = document.querySelector('#month');
const day = document.querySelector('#day');
const date = document.querySelector('#date');
const year = document.querySelector('#year');

const calender = new Date();

day.innerHTML = calender.toLocaleString('en', {
  weekday: 'long'
})
date.innerHTML = calender.getDate();
year.innerHTML = calender.getFullYear()

month.innerText = calender.toLocaleString('en', {
  month: "long"
})


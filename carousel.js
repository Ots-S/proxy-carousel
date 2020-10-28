let dataApi = [];

async function fetchDatas() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const url = "http://62.210.247.201:9000/test";
  const response = await fetch(proxyUrl + url);
  dataApi = await response.json();
}

fetchDatas();

const numberOfImages = 7;
const indexes = [];
for (let i = 0; i <= numberOfImages - 1; i++) {
  indexes.push(i);
}
const time = 1200;

function checkAndIncrement(index) {
  if (index < dataApi.length - 1) {
    return index + 1;
  } else {
    return 0;
  }
}

function changeImg() {
  for (let i = 0; i <= indexes.length - 1; i++) {
    document.getElementById("slide" + i).src = dataApi[indexes[i]].image;
  }
  for (let i = 0; i <= indexes.length - 1; i++) {
    indexes[i] = checkAndIncrement(indexes[i]);
  }
  setTimeout("changeImg()", time);
}

window.onload = setTimeout(function () {
  changeImg();
}, 500);

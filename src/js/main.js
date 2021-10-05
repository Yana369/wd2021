import "../scss/style.scss"
const text1 = document.getElementById("place1");
const text2 = document.getElementById("place2");
const text3 = document.getElementById("place3");
const text4 = document.getElementById("place4");
const text5 = document.getElementById("place5");
const text6 = document.getElementById("place6");
const text7 = document.getElementById("place7");
const text8 = document.getElementById("place8");
const text9 = document.getElementById("place9");
const text10 = document.getElementById("place10");
const text11 = document.getElementById("place11");
const text12 = document.getElementById("place12");
const text13 = document.getElementById("place13");
const text14 = document.getElementById("place14");
const text15 = document.getElementById("place15");

const URL1 ="https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d56e001cea63f3d5d9596d5e327ead62"
const URL2 = "https://jsonplaceholder.typicode.com/users"
const URL3 = "data.json"

let res1;
fetch(URL1)
  .then(response => res1 = response.json())
  .then(r => 
    {res1 = r;
    //console.log(res1)
    text1.textContent=`Temp: ${Math.round(res1.main.temp-273)} °`;
    text2.textContent =`Temp-min: ${Math.round(res1.main.temp_min-272.15)}°`;
    text3.textContent =`Temp-max: ${Math.round(res1.main.temp_max-272.15)}°`;
    text4.textContent=`Feels-like: ${Math.round(res1.main.feels_like-273)} °`;
    text5.textContent = `Humidity: ${res1.main.humidity}%`;
    text6.textContent =`Weather: ${res1.weather[0].description}`; 
    })
  .catch(err => console.log(err))


let res2;
  fetch(URL2)
  .then(response => res2 = response.json())
  .then(r => 
    {res2 = r;
      console.log(res2);
      text7.textContent= `Name: ${res2[0].name}`;
      text8.textContent= `Email: ${res2[0].email}`;
      text9.textContent= `Username: ${res2[0].username}`
      text10.textContent= `Name: ${res2[1].name}`;
      text11.textContent= `Email: ${res2[1].email}`;
      text12.textContent= `Username: ${res2[1].username}`
    })
  .catch(err => console.log(err))


let res3;
  fetch(URL3)
  .then(response => res3 = response.json())
  .then(r => 
    {res3 = r;
    //console.log(res3)
    text13.textContent= `Name: ${res3[0].name}`;
    text14.textContent= `Age: ${res3[0].age}`;
    text15.textContent= `Hobbies: ${res3[0].hobbies}`;
    })
  .catch(err => console.log(err))
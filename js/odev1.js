let nameUser = prompt("Lutfen Adınızı Giriniz: ");
let myName = document.querySelector("#myName");
myName.innerHTML = `${myName.innerHTML}${nameUser[0].toUpperCase()}${nameUser.slice(1).toLowerCase()}`;

let surnameUser = prompt("Lütfen Soyadınızı Giriniz: ");
let mySurname = document.querySelector("#mySurname");
mySurname.innerHTML = `${mySurname.innerHTML}${surnameUser[0].toUpperCase()}${surnameUser.slice(1).toLocaleLowerCase()}`;

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;
  document.querySelector("#myHour").innerHTML = time;


  
  
const da = new Date();
const weekday = new Array(7);
weekday[0] = "Pazar";
weekday[1] = "Pazartesi";
weekday[2] = "Salı";
weekday[3] = "Çarşamba";
weekday[4] = "Perşembe";
weekday[5] = "Cuma";
weekday[6] = "Cumartesi";

let day = weekday[da.getDay()];
document.querySelector("#myDays").innerHTML = day;
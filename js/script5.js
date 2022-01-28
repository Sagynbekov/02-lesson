//Задание №5
let number = prompt("Введите номер своей карты: ", 111111111);
let numberHidden = number.slice(0, 5);
let result = number.replace(numberHidden, "****");

document.write("<h4>Номер вашей карты: " + result + "</h4>");
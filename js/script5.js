//Задание №5
let number = prompt("Введите номер своей карты: ");
let numberHidden = number.slice(0, -4);
let result = number.replace(numberHidden, "****");

document.write("<h4>Номер вашей карты: " + result + "</h4>");
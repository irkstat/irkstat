//===============================================================
//                         ПРОДАЖА
//===============================================================

//Переменная города (ссылка города Иркутска)
let saleYearIrkutsk = document.querySelector("#sale_year_irkutsk");
let saleYearAngarsk = document.querySelector("#sale_year_angarsk");
let saleYearBratsk = document.querySelector("#sale_year_bratsk");
let saleYearUsolye = document.querySelector("#sale_year_usolye");

//Переменная года (ссылка года Иркутск)
let saleIrkutsk2019 = document.querySelector("#sale_irkutsk_2019");
let saleAngarsk2019 = document.querySelector("#sale_angarsk_2019");
let saleBratsk2019 = document.querySelector("#sale_bratsk_2019");
let saleUsolye2019 = document.querySelector("#sale_usolye_2019");

//Переменная блока с годами Иркутск
let saleBoxYearIrkutsk = document.querySelector("#sale_box_year_irkutsk");
let saleBoxYearAngarsk= document.querySelector("#sale_box_year_angarsk");
let saleBoxYearBratsk= document.querySelector("#sale_box_year_bratsk");
let saleBoxYearUsolye= document.querySelector("#sale_box_year_usolye");

//Переменная блока с месяцами Иркутск
let saleMonth2019Irkutsk = document.querySelector("#sale_month2019_irkutsk");
let saleMonth2019Angarsk = document.querySelector("#sale_month2019_angarsk");
let saleMonth2019Bratsk = document.querySelector("#sale_month2019_bratsk");
let saleMonth2019Usolye = document.querySelector("#sale_month2019_usolye");


//Переменная назад к блоку с городами
let backSaleCityIrkutsk = document.querySelector("#back_sale_city_irkutsk");
let backSaleCityAngarsk = document.querySelector("#back_sale_city_angarsk");
let backSaleCityBratsk = document.querySelector("#back_sale_city_bratsk");
let backSaleCityUsolye = document.querySelector("#back_sale_city_usolye");

//Переменная назад к блоку с годами
let backMonthIrkutsk2019 = document.querySelector("#back_month_irkutsk2019");
let backMonthAngarsk2019 = document.querySelector("#back_month_angarsk2019");
let backMonthBratsk2019 = document.querySelector("#back_month_bratsk2019");
let backMonthUsolye2019 = document.querySelector("#back_month_usolye2019");


//Функция перехода от блока городов к блоку годов Иркутска
saleYearIrkutsk.onclick = function () {
   saleBoxYearIrkutsk.style.transform = "scale(1)";
}
saleYearAngarsk.onclick = function () {
   saleBoxYearAngarsk.style.transform = "scale(1)";
}
saleYearBratsk.onclick = function () {
   saleBoxYearBratsk.style.transform = "scale(1)";
}
saleYearUsolye.onclick = function () {
   saleBoxYearUsolye.style.transform = "scale(1)";
}

//Функция перехода от блока годов к блоку месяцев Иркутска
saleIrkutsk2019.onclick = function () {
   saleMonth2019Irkutsk.style.transform = "scale(1)";
}
saleAngarsk2019.onclick = function () {
   saleMonth2019Angarsk.style.transform = "scale(1)";
}
saleBratsk2019.onclick = function () {
   saleMonth2019Bratsk.style.transform = "scale(1)";
}
saleUsolye2019.onclick = function () {
   saleMonth2019Usolye.style.transform = "scale(1)";
}


//Функция перехода от блока годов Иркутска к блоку городов (назад к выбору города)
backSaleCityIrkutsk.onclick = function () {
   saleBoxYearIrkutsk.style.transform = "scale(0)";
}
backSaleCityAngarsk.onclick = function () {
   saleBoxYearAngarsk.style.transform = "scale(0)";
}
backSaleCityBratsk.onclick = function () {
   saleBoxYearBratsk.style.transform = "scale(0)";
}
backSaleCityUsolye.onclick = function () {
   saleBoxYearUsolye.style.transform = "scale(0)";
}

//Функция перехода от блока месяцев Иркутска к блоку годов (назад к выбору года)
backMonthIrkutsk2019.onclick = function () {
   saleMonth2019Irkutsk.style.transform = "scale(0)";
}
backMonthAngarsk2019.onclick = function () {
   saleMonth2019Angarsk.style.transform = "scale(0)";
}
backMonthBratsk2019.onclick = function () {
   saleMonth2019Bratsk.style.transform = "scale(0)";
}
backMonthUsolye2019.onclick = function () {
   saleMonth2019Usolye.style.transform = "scale(0)";
}


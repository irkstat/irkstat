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
let backSaleMonthIrkutsk2019 = document.querySelector("#back_sale_month_irkutsk2019");
let backSaleMonthAngarsk2019 = document.querySelector("#back_sale_month_angarsk2019");
let backSaleMonthBratsk2019 = document.querySelector("#back_sale_month_bratsk2019");
let backSaleMonthUsolye2019 = document.querySelector("#back_sale_month_usolye2019");


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
backSaleMonthIrkutsk2019.onclick = function () {
   saleMonth2019Irkutsk.style.transform = "scale(0)";
}
backSaleMonthAngarsk2019.onclick = function () {
   saleMonth2019Angarsk.style.transform = "scale(0)";
}
backSaleMonthBratsk2019.onclick = function () {
   saleMonth2019Bratsk.style.transform = "scale(0)";
}
backSaleMonthUsolye2019.onclick = function () {
   saleMonth2019Usolye.style.transform = "scale(0)";
}


//===============================================================
//                         АРЕНДА
//===============================================================

//Переменная города (ссылка города Иркутска)
let rentYearIrkutsk = document.querySelector("#rent_year_irkutsk");
let rentYearAngarsk = document.querySelector("#rent_year_angarsk");
let rentYearBratsk = document.querySelector("#rent_year_bratsk");
let rentYearUsolye = document.querySelector("#rent_year_usolye");

//Переменная года (ссылка года Иркутск)
let rentIrkutsk2019 = document.querySelector("#rent_irkutsk_2019");
let rentAngarsk2019 = document.querySelector("#rent_angarsk_2019");
let rentBratsk2019 = document.querySelector("#rent_bratsk_2019");
let rentUsolye2019 = document.querySelector("#rent_usolye_2019");

//Переменная блока с годами Иркутск
let rentBoxYearIrkutsk = document.querySelector("#rent_box_year_irkutsk");
let rentBoxYearAngarsk = document.querySelector("#rent_box_year_angarsk");
let rentBoxYearBratsk = document.querySelector("#rent_box_year_bratsk");
let rentBoxYearUsolye = document.querySelector("#rent_box_year_usolye");

//Переменная блока с месяцами Иркутск
let rentMonth2019Irkutsk = document.querySelector("#rent_month2019_irkutsk");
let rentMonth2019Angarsk = document.querySelector("#rent_month2019_angarsk");
let rentMonth2019Bratsk = document.querySelector("#rent_month2019_bratsk");
let rentMonth2019Usolye = document.querySelector("#rent_month2019_usolye");


//Переменная назад к блоку с городами
let backRentCityIrkutsk = document.querySelector("#back_rent_city_irkutsk");
let backRentCityAngarsk = document.querySelector("#back_rent_city_angarsk");
let backRentCityBratsk = document.querySelector("#back_rent_city_bratsk");
let backRentCityUsolye = document.querySelector("#back_rent_city_usolye");

//Переменная назад к блоку с годами
let backRentMonthIrkutsk2019 = document.querySelector("#back_rent_month_irkutsk2019");
let backRentMonthAngarsk2019 = document.querySelector("#back_rent_month_angarsk2019");
let backRentMonthBratsk2019 = document.querySelector("#back_rent_month_bratsk2019");
let backRentMonthUsolye2019 = document.querySelector("#back_rent_month_usolye2019");


//Функция перехода от блока городов к блоку годов Иркутска
rentYearIrkutsk.onclick = function () {
   rentBoxYearIrkutsk.style.transform = "scale(1)";
}
rentYearAngarsk.onclick = function () {
   rentBoxYearAngarsk.style.transform = "scale(1)";
}
rentYearBratsk.onclick = function () {
   rentBoxYearBratsk.style.transform = "scale(1)";
}
rentYearUsolye.onclick = function () {
   rentBoxYearUsolye.style.transform = "scale(1)";
}

//Функция перехода от блока годов к блоку месяцев Иркутска
rentIrkutsk2019.onclick = function () {
   rentMonth2019Irkutsk.style.transform = "scale(1)";
}
rentAngarsk2019.onclick = function () {
   rentMonth2019Angarsk.style.transform = "scale(1)";
}
rentBratsk2019.onclick = function () {
   rentMonth2019Bratsk.style.transform = "scale(1)";
}
rentUsolye2019.onclick = function () {
   rentMonth2019Usolye.style.transform = "scale(1)";
}

//Функция перехода от блока годов Иркутска к блоку городов (назад к выбору города)
backRentCityIrkutsk.onclick = function () {
   rentBoxYearIrkutsk.style.transform = "scale(0)";
}
backRentCityAngarsk.onclick = function () {
   rentBoxYearAngarsk.style.transform = "scale(0)";
}
backRentCityBratsk.onclick = function () {
   rentBoxYearBratsk.style.transform = "scale(0)";
}
backRentCityUsolye.onclick = function () {
   rentBoxYearUsolye.style.transform = "scale(0)";
}

//Функция перехода от блока месяцев Иркутска к блоку годов (назад к выбору года)
backRentMonthIrkutsk2019.onclick = function () {
   rentMonth2019Irkutsk.style.transform = "scale(0)";
}
backRentMonthAngarsk2019.onclick = function () {
   rentMonth2019Angarsk.style.transform = "scale(0)";
}
backRentMonthBratsk2019.onclick = function () {
   rentMonth2019Bratsk.style.transform = "scale(0)";
}
backRentMonthUsolye2019.onclick = function () {
   rentMonth2019Usolye.style.transform = "scale(0)";
}


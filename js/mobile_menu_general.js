//Мобильное меню GENERAL===================================
let bgMenuGeneral = document.querySelector("#bg_menu_general");
let topNavMobileGeneral = document.querySelector(".top_nav_mobile_general");
let closeMobileMenuGeneral = document.querySelector(".close_mobile_menu_general");

bgMenuGeneral.onclick = function(){
   topNavMobileGeneral.style.display = "flex";
}
closeMobileMenuGeneral.onclick = function(){
   topNavMobileGeneral.style.display = "none";
}
let bgMenu = document.querySelector("#bg_menu");
let topNavMobileIndex = document.querySelector(".top_nav_mobile_index");
let closeMobileMenu = document.querySelector(".close_mobile_menu");

bgMenu.onclick = function(){
   topNavMobileIndex.style.display = "flex";
}
closeMobileMenu.onclick = function(){
   topNavMobileIndex.style.display = "none";
}
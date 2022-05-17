// =====================Search============
var search = document.querySelector('.search');
var btnSearch = document.querySelector('.button__search');
var searchInput = document.querySelector('.search__input');
btnSearch.addEventListener('click', function() {
    search.classList.toggle("addwidth");
    btnSearch.classList.toggle("addright");
    searchInput.focus();
})

//show list language
var btnLanguage = document.querySelector('.footer__language');
var Language = document.querySelector('.list__langguage');
btnLanguage.addEventListener('click', function() {
    Language.classList.toggle("showListLanguage");
})
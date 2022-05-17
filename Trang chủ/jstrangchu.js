/**
 * Nav on mobile
 */
var iconBar = document.querySelector(".menu-tablet-mobile i");
var modal = document.querySelector(".modal");
var navHeader = document.querySelector(".header__nav-mobile");
var iconClose = document.querySelector(".nav__mobile-item:first-child i");

function addOrRemove() {
    modal.classList.toggle("show");
    navHeader.classList.toggle("show");
}

iconBar.addEventListener("click", addOrRemove);
modal.addEventListener("click", addOrRemove);
iconClose.addEventListener("click", addOrRemove);

/*  ====================list language=================== */
var itemLanguage = document.querySelector(".header__right-item:last-child");
var listLanguage = document.querySelector(".list__language");
var itemLanguageMobile = document.querySelector(".nav__mobile-item:last-child");
var listLanguageMobile = document.querySelector(".list__language-mobile");
itemLanguage.addEventListener("click", function() {
    listLanguage.classList.toggle("show");
});
itemLanguageMobile.addEventListener("click", function() {
    listLanguageMobile.classList.toggle("show");
});

/*====================== liset user=====================*/
var formListUser = document.querySelector(".form-list__user");
var listUser = document.querySelector(".list__user");
formListUser.addEventListener("click", function() {
    listUser.classList.toggle("showListUser");
});

// =================================show chat box=================
var chatBox = document.querySelector('.chat-box');
var chatMes = document.querySelector('.chat-mes');
var Mes = document.querySelector('.mes');
var iconCloseBoxChat = document.querySelector('.box-icon');
console.log(iconCloseBoxChat);

Mes.addEventListener("click", function() {
    chatBox.classList.toggle("showChatBox");
});
chatMes.addEventListener("click", function() {
    chatMes.classList.toggle("move");
    chatBox.classList.toggle("showChatBox");
});
iconCloseBoxChat.addEventListener("click", function() {
    chatBox.classList.toggle("showChatBox");
});
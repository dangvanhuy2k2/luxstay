var modal = document.querySelector('.modal');
var formLogin = document.querySelector('.form__login');
var iconClose = document.querySelector('.icon-close');
var openForm = document.querySelector('.header__login');
openForm.addEventListener('click', function() {
    modal.classList.toggle('showModal');
    formLogin.classList.toggle('showFormLogin');
    iconClose.classList.toggle('turnIconclose');
})
iconClose.addEventListener('click', function() {
    modal.classList.toggle('showModal');
    formLogin.classList.toggle('showFormLogin');
})

// ========---Bars
var bars = document.querySelector('.bars');
var iconOpenBars = document.querySelector('.icon-bars');

var iconCloseModal = document.querySelector('.icon-close-modal');
iconOpenBars.addEventListener('click', function() {
    iconCloseModal.classList.toggle('turnIconclose');
    modal.classList.toggle('showModal');
    bars.classList.toggle('showBars');
})
iconCloseModal.addEventListener('click', function() {
    iconCloseModal.classList.toggle('turnIconclose');
    modal.classList.toggle('showModal');
    bars.classList.toggle('showBars');
})


// show search bars on mobile
var iconSearchMobile = document.querySelector('.icon-search-mobile');
var iconCloseMobile = document.querySelector('.icon-close-mobile');
var SearchMobile = document.querySelector('.search-bar');
iconSearchMobile.addEventListener('click', function() {
    console.log(SearchMobile);
    SearchMobile.classList.toggle('showSearchBar');
    iconSearchMobile.classList.toggle('showIconSearchMobile');
    iconCloseMobile.classList.toggle('showIconCloseMobile');
})
iconCloseMobile.addEventListener('click', function() {
    console.log(SearchMobile);
    SearchMobile.classList.toggle('showSearchBar');
    iconSearchMobile.classList.toggle('showIconSearchMobile');
    iconCloseMobile.classList.toggle('showIconCloseMobile');
})

// back top
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.back').fadeIn();
        } else $('.back').fadeOut();
    });
    $('.back').click(function() {
        $('html , body').animate({ scrollTop: 0 }, 500);
    })
});



// hiện thị ảnh
var images = document.querySelectorAll('.category-body img');
var modal1 = document.querySelector('.modal1');
var imageModal = document.querySelector('.img-modal');
var modalPrev = document.querySelector('.modal-prev');
var modalNext = document.querySelector('.modal-next');
var len = images.length;
var i = 0;
for (i = 0; i < len; ++i) {
    images[i].addEventListener('click', handleImage);
}
var SrcImg;

function handleModal() {
    modal1.classList.toggle('hide');
}

function handleImage(e) {
    handleModal();
    SrcImg = e.target.getAttribute("src");
    imageModal.setAttribute('src', `${SrcImg}`);
}

function showImage(i) {
    SrcImg = images[i].getAttribute("src");
    imageModal.setAttribute('src', `${SrcImg}`);
}
modal1.addEventListener('click', function(e) {
    if (e.target == this) {
        handleModal();
    }
})
modalNext.addEventListener('click', function(e) {
    ++i;
    if (i >= len) i = 0;
    showImage(i);
})
modalPrev.addEventListener('click', function(e) {
    --i;
    if (i < 0) i = len - 1;
    showImage(i);
})
const colseBtn = document.querySelector('.modal-close')
const modal = document.querySelector('.modal')
const modalContainer = document.querySelector('.modal-container')
const openModal = document.querySelector('.header-setting')
const openModalMoblie = document.querySelector('.header-setting-mobile')
const fBtn = document.getElementById("F")
const cBtn = document.getElementById("C")
const tewleBtn = document.getElementById("12")
const tweentyFourBtn = document.getElementById("24")

function showModal() {
    modal.classList.add('open')
} 

function hideModal() {
    modal.classList.remove('open')
}
openModal.addEventListener('click', showModal);
openModalMoblie.addEventListener('click', showModal);

colseBtn.addEventListener('click', hideModal);

modal.addEventListener('click', hideModal);

modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})

function showF() {
    fBtn.classList.add('modal-content-item-setting-item-color')
} 

function hideF() {
    fBtn.classList.remove('modal-content-item-setting-item-color')
}
function showC() {
    cBtn.classList.add('modal-content-item-setting-item-color')
} 

function hideC() {
    cBtn.classList.remove('modal-content-item-setting-item-color')
}

function showTewle() {
    tewleBtn.classList.add('modal-content-item-setting-item-color')
} 

function hideTewle() {
    tewleBtn.classList.remove('modal-content-item-setting-item-color')
}
function showTweentyFour() {
    tweentyFourBtn.classList.add('modal-content-item-setting-item-color')
} 

function hideTweentyFour() {
    tweentyFourBtn.classList.remove('modal-content-item-setting-item-color')
}

if(fBtn.className !== 'modal-content-item-setting-color'){
    fBtn.addEventListener('click',function(){
        showF();
        hideC();
    })
} else{
    cBtn.addEventListener('click',function(){
        showC();
        hideF();
    })
}
if(cBtn.className !== 'modal-content-item-setting-color'){
    cBtn.addEventListener('click',function(){
        showC();
        hideF();
    })
} else{
    fBtn.addEventListener('click',function(){
        showF();
        hideC();
    })
}

if(tewleBtn.className !== 'modal-content-item-setting-color'){
    tewleBtn.addEventListener('click',function(){
        showTewle();
        hideTweentyFour();
    })
} else{
    tweentyFourBtn.addEventListener('click',function(){
        hideTewle();
        showTweentyFour();
    })
}
if(tweentyFourBtn.className !== 'modal-content-item-setting-color'){
    tweentyFourBtn.addEventListener('click',function(){
        hideTewle();
        showTweentyFour();
    })
} else{
    tewleBtn.addEventListener('click',function(){
        showTewle();
        hideTweentyFour();
    })
}
    

// for(const tabBtn of tabBtns) {
//     // tabBtn.classList.remove('tab-btn-chosen');
//     tabBtn.addEventListener('click', function(){
//         tabBtn.classList.add('tab-btn-chosen')
//     })
// }
// const $tabBtns = $(".tab-btn");

// $tabBtns.on("click", function() {
//   $tabBtns.removeClass("tab-btn-chosen");
//   $(this).addClass("tab-btn-chosen");
// });

// let currentSelected = null; 
// tabBtns.forEach((tabBtn, i) => {
//     tabBtn.addEventListener('click', () => {
//                 if (tabBtn !== currentSelected) {
//                     if (currentSelected) {
//                         currentSelected.classList.remove('tab-btn-chosen');
//                     }
//                     tabBtn.classList.add('tab-btn-chosen');
//                     currentSelected = tabBtn;
//                 }
                
//     });
// });

const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach((tabBtn, i) => {
    tabBtn.addEventListener('click', function() {
        removeSelected(tabBtns);
        this.classList.add('tab-btn-chosen');
    });
});
function removeSelected(tabBtns) {
  for (var i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove('tab-btn-chosen');
  }
}

// menu mobile
const openMenu = document.querySelector('.header-menu')
const menu = document.querySelector('.menu-mobile')
function showMenu() {
    menu.classList.add('open')
}
function hideMenu() {
    menu.classList.remove('open')
}



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

// tab moon
var moon = [
    {
        img : "half_moon.png",
        title : "Waning Gibbous"
    },
    {
        img : "full_moon.png",
        title : "Waxing Gibbous"
    },
    {
        img : "1_4moon.png",
        title : "Waxing Crescent"
    },
    {
        img : "6_7moon.png",
        title : "Waxing Gibbous"
    },
    {
        img : "0_moon.png",
        title : "Waxing Crescent"
    },
    {
        img : "1_8moon.png",
        title : "Waxing Crescent"
    },
    {
        img : "half_moon.png",
        title : "Waning Gibbous"
    },
    {
        img : "full_moon.png",
        title : "Waxing Gibbous"
    },
    {
        img : "1_4moon.png",
        title : "Waxing Crescent"
    },
    {
        img : "6_7moon.png",
        title : "Waxing Gibbous"
    },
    {
        img : "half_moon.png",
        title : "Waning Gibbous"
    },
    {
        img : "full_moon.png",
        title : "Waxing Gibbous"
    }
];

const moonConditions = document.querySelectorAll('.moon-conditon');
const moonTitles = document.querySelector('.moon-title');
const moonTitleImg = document.querySelector('.moon-title-content img');
const moonTitleContent= document.querySelector('.moon-title-content p');

console.log(moonConditions);
moonConditions.forEach((item, index) => {

    item.addEventListener('click', function() {
        removeaActive(moonConditions);
        console.log(moon[index].img);
        this.classList.add('moon-active');
        moonTitleImg.src = "./asset/img/moon/" + moon[index].img;
        moonTitleContent.innerHTML = moon[index].title;
    });
});
function removeaActive(item) {
  for (var i = 0; i < item.length; i++) {
    item[i].classList.remove('moon-active');
  }
}


// .tab place
const place = [
    {
        currnetPlace : "Ha noi",
        currentTem : "23",
        img: "weather_mostlysun (1).png",
        minTem : "19",
        speedWind: "6.679 km/h",
        timeSun : "06:11",
        uv : "4 (High)",
        feelTem: "22",
        maxTem : "23",
        imgTitle: "Mostly cloudy"
    },
    {
        currnetPlace : "Istanbul",
        currentTem : "15",
        img: "weather_cloudy@2x.png",
        minTem : "12",
        speedWind: "5.56 km/h",
        timeSun : "7:05",
        uv : "2 (Medium)",
        feelTem: "18",
        maxTem : "19",
        imgTitle: "Mostly rainy"
    },
    {
        currnetPlace : "Tokyo",
        currentTem : "19",
        img: "weather_mostlysun (1).png",
        minTem : "18",
        speedWind: "2.568km/h",
        timeSun : "06:30",
        uv : "5 (High)",
        feelTem: "25",
        maxTem : "26",
        imgTitle: "Mostly cloudy"
    },
    
]
 
var time = new Date();
var currentTime =  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
var currentDate = time.getDate() + '.' + (time.getMonth()+1)  + '.' + time.getFullYear();
console.log(currentDate);
console.log(currentTime);
document.querySelector('.detail-place-date h2').innerHTML = currentTime;
document.querySelector('.detail-place-date p').innerHTML = currentDate;

const currentTimes = document.querySelectorAll('.curent-place-content')
const placeTitle = document.querySelector('.detail-palce-title-content p')
const placeCurrentTem = document.querySelector('.current-tem span')
const placeCurrentImg = document.querySelector('.detail-place-icon img')
const placeCurrentImgTitle = document.querySelector('.detail-place-icon p')

currentTimes.forEach((item, index) => {
    
    item.addEventListener('click', function(){
        placeTitle.innerHTML = place[index].currnetPlace;
        placeCurrentTem.innerHTML = place[index].currentTem;
        placeCurrentImgTitle.innerHTML = place[index].imgTitle;
        document.getElementById("min-tem").innerHTML = place[index].minTem;
        document.getElementById("speed-wind").innerHTML = place[index].speedWind;
        document.getElementById("time-sun").innerHTML = place[index].timeSun;
        document.getElementById("uv").innerHTML = place[index].uv;
        document.getElementById("feel-tem").innerHTML = place[index].feelTem;
        document.getElementById("max-tem").innerHTML = place[index].maxTem;
        placeCurrentImg.src = "./asset/img/" + place[index].img;
        
        
    })
})

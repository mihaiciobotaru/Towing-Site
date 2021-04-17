const card1 = document.querySelector('.container-1');
const card2 = document.querySelector('.container-2');
const card3 = document.querySelector('.container-3');

let card_list=[card1,card2,card3]

const closeBtn = document.querySelector('.close-info');


card_list.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector(".info-cover").style.display = "flex";
        document.querySelector("body").style.overflowX = "none";

    });    
});


card1.addEventListener('click', () => {
    document.querySelector(".info-1").style.display = "flex";
});  

card2.addEventListener('click', () => {
    document.querySelector(".info-2").style.display = "flex";
});  

card3.addEventListener('click', () => {
    document.querySelector(".info-3").style.display = "flex";
});  

closeBtn.addEventListener('click', () => {
    document.querySelector(".info-cover").style.display = "none";
    document.querySelector(".info-1").style.display = "none";
    document.querySelector(".info-2").style.display = "none";
    document.querySelector(".info-3").style.display = "none";

});    
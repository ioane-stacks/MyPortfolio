var extInfo = document.getElementById("extInfBox");
var Home = document.getElementById("Home");
var Portfolio = document.getElementById("Portfolio");
var Contact = document.getElementById("Contact");
var TriangleTop = document.getElementById("extInfshower");
var showContent = document.getElementById("showContent");
var myHeader = document.getElementById("myHeader");

function showInfo(variant){
        extInfo.style.display = "block";
    switch(variant) {
        case 1:
            showHome();
            break;
        case 2:
            showPortfolio();
            break;
        case 3:
            showContact();
            break;
    }
}

function closeInfo(){
    extInfo.style.display = "none";
    Home.style.backgroundImage = "url('icons/Home.svg')";
    Portfolio.style.backgroundImage = "url('icons/Portfolio.svg')";
    Contact.style.backgroundImage = "url('icons/Contact.svg')";
}

function showHome() {
    Home.style.backgroundImage = "url('icons/Home2.svg')";
    Portfolio.style.backgroundImage = "url('icons/Portfolio.svg')";
    Contact.style.backgroundImage = "url('icons/Contact.svg')";
    TriangleTop.style.top = 20;
    showContent.src = "pages/general.html";
    myHeader.innerHTML = "მოგესალმებით";
    extInfo.style.overflowY = "scroll";
}
function showPortfolio() {
    Home.style.backgroundImage = "url('icons/Home.svg')";
    Portfolio.style.backgroundImage = "url('icons/Portfolio2.svg')";
    Contact.style.backgroundImage = "url('icons/Contact.svg')";
    TriangleTop.style.top = 170;
    myHeader.innerHTML = "პორტფოლიო";
}
function showContact() {
    Home.style.backgroundImage = "url('icons/Home.svg')";
    Portfolio.style.backgroundImage = "url('icons/Portfolio.svg')";
    Contact.style.backgroundImage = "url('icons/Contact2.svg')";
    TriangleTop.style.top = 320;
    myHeader.innerHTML = "კონტაქტი";
}
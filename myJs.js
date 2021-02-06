var extInfo = document.getElementById("extInfBox");
var Home = document.getElementById("Home");
var Portfolio = document.getElementById("Portfolio");
var Contact = document.getElementById("Contact");
var TriangleTop = document.getElementById("extInfshower");
var showContent = document.getElementById("showContent");
var myHeader = document.getElementById("myHeader");

var widthPers;

function Show() {
    extInfo.style.opacity = 1;
    extInfo.style.marginLeft = '110px';
}

function Hide() {
    extInfo.style.opacity = 0;
    extInfo.style.marginLeft = '90px';
}

function showInfo(variant){ 
    Show();
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

function closeInfo() {
    Hide();
    Home.style.backgroundImage = "url('icons/Home.svg')";
    Portfolio.style.backgroundImage = "url('icons/Portfolio.svg')";
    Contact.style.backgroundImage = "url('icons/Contact.svg')";
}

function showHome() {
    Home.style.backgroundImage = "url('icons/Home2.svg')";
    Portfolio.style.backgroundImage = "url('icons/Portfolio.svg')";
    Contact.style.backgroundImage = "url('icons/Contact.svg')";
    showContent.src = "pages/general.html";
    myHeader.innerHTML = "მოგესალმებით";
    TriangleTop.style.top = '20px';
}
function showPortfolio() {
    Home.style.backgroundImage = "url('icons/Home.svg')";
    Portfolio.style.backgroundImage = "url('icons/Portfolio2.svg')";
    Contact.style.backgroundImage = "url('icons/Contact.svg')";
    TriangleTop.style.top = '170px';
    myHeader.innerHTML = "პორტფოლიო";
}
function showContact() {
    Home.style.backgroundImage = "url('icons/Home.svg')";
    Portfolio.style.backgroundImage = "url('icons/Portfolio.svg')";
    Contact.style.backgroundImage = "url('icons/Contact2.svg')";
    TriangleTop.style.top = '320px';
    myHeader.innerHTML = "კონტაქტი";
}
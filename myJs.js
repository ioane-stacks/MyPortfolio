document.oncontextmenu = new Function("return false;");
var extInfo = document.getElementById("extInfBox");
var Home = document.getElementById("Home");
var Portfolio = document.getElementById("Portfolio");
var Contact = document.getElementById("Contact");
var TriangleTop = document.getElementById("extInfshower");
var showContent = document.getElementById("showContent");
var myHeader = document.getElementById("myHeader");
var showWebBack = document.getElementById("showWebBack");

var widthPers;

function Show() {
    extInfo.style.opacity = 1;
    extInfo.style.marginLeft = '110px';
    showContent.style.display = 'block';
}

function Hide() {
    extInfo.style.opacity = 0;
    extInfo.style.marginLeft = '90px';
    showContent.style.display = 'none';
}

function showInfo(variant) {
    Show();
    switch (variant) {
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
    TriangleTop.style.top = '50px';
}
function showPortfolio() {
    Home.style.backgroundImage = "url('icons/Home.svg')";
    Portfolio.style.backgroundImage = "url('icons/Portfolio2.svg')";
    Contact.style.backgroundImage = "url('icons/Contact.svg')";
    showContent.src = "pages/portfolio.html"
    TriangleTop.style.top = '200px';
    myHeader.innerHTML = "პორტფოლიო";
}
function showContact() {
    Home.style.backgroundImage = "url('icons/Home.svg')";
    Portfolio.style.backgroundImage = "url('icons/Portfolio.svg')";
    Contact.style.backgroundImage = "url('icons/Contact2.svg')";
    showContent.src = "pages/contact.html";
    TriangleTop.style.top = '350px';
    myHeader.innerHTML = "კონტაქტი";
}

function copyToClipboard(Id) {
    var textOfli = document.getElementById(Id).innerText;
    var newTextArea = document.createElement("textarea");
    newTextArea.value = textOfli;
    newTextArea.style.width = "0px";
    newTextArea.style.height = "0px";
    newTextArea.style.position = "absolute";
    newTextArea.style.opacity = 0;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    newTextArea.setSelectionRange(6, 999);
    document.execCommand('copy');
    document.body.removeChild(newTextArea);
}

function textCopy(mLeft, Id) {
    copyToClipboard(Id);
    var createSpan = document.createElement("span");
    var node = document.createTextNode("დაკოპირებულია");
    var tooltipAdd = document.getElementById("tooltip");
    createSpan.style.left = mLeft + "px";
    createSpan.classList.add("tooltiptext");
    createSpan.appendChild(node);
    tooltipAdd.appendChild(createSpan);
    var removeSpan = setInterval(() => {
        tooltipAdd.removeChild(createSpan);
        clearInterval(removeSpan);
    }, 1000);
}

function disableInfo() {
    var createSpan = document.createElement("span");
    var node = document.createTextNode("დროებით მიუწვდომელია");
    var tooltipAdd = document.getElementById("tooltip");
    createSpan.style.display = "absolute";
    createSpan.style.left = 30 + "px";
    createSpan.style.top = 310 + "px";
    createSpan.classList.add("tooltiptext");
    createSpan.appendChild(node);
    tooltipAdd.appendChild(createSpan);
    //document.querySelectorAll(".tooltiptext")[0].style.top = "300px";
    var removeSpan = setInterval(() => {
        tooltipAdd.removeChild(createSpan);
        clearInterval(removeSpan);
    }, 1000);
}

function ShowDetailed(Name) {
    switch (Name) {
        case 'learncodding':
            window.open("https://ioane-stacks.github.io/LearnCoding/", "_blank");
            break;
        case 'read':
            window.open("https://ioane-stacks.github.io/Read/", "_blank");
            break;
        case 'registration':
            window.open("https://ioane-stacks.github.io/Registration-Form/", "_blank");
            break;
        case 'starshipwars':
            window.open("https://ioane-stacks.github.io/StarShipWars/", "_blank");
            break;
        case 'airship':
            window.open("https://ioane-stacks.github.io/AirShip/", "_blank");
            break;
        case 'rollingball':
            window.open("https://ioane-stacks.github.io/Rolling-Ball/", "_blank");
            break;
        case 'calculator':
            window.open("https://ioane-stacks.github.io/Javascript-Calculator/", "_blank");
            break;
        case 'mydrawingapp':
            window.open("https://ioane-stacks.github.io/MyDrawingApp/", "_blank");
            break;
    }
}
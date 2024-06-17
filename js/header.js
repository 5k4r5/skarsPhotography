const logo = document.createElement('img');
const nav = document.createElement('nav');
const menu = document.createElement('menu');
const servicesLink = document.createElement('a');
const aboutMeLink = document.createElement('a');
const portfolioLink = document.createElement('a');
const contactMeLink = document.createElement('a');
const landingPageLink = document.createElement('a');
const header = document.createElement('header');
const hamburgerImage = document.createElement('img');

const servicesItem = document.createElement('li');
const aboutMeItem = document.createElement('li');
const portfolioItem = document.createElement('li');
const contactMeItem = document.createElement('li');
const landingPageItem = document.createElement('li');

let pathname = window.location.pathname;
logo.src = pathname.includes('categories')? "../../images/webpage/elements/skars_logo_big.png" : "../images/webpage/elements/skars_logo_big.png";
landingPageLink.href = pathname.includes('categories')? "../../pages/index.html" : "../pages/index.html";
servicesLink.href = pathname.includes('categories')? "../../pages/services.html" : "../pages/services.html";
aboutMeLink.href = pathname.includes('categories')? "../../pages/aboutMe.html" : "../pages/aboutMe.html";
portfolioLink.href = pathname.includes('categories')? "../../pages/portfolio.html" : "../pages/portfolio.html";
contactMeLink.href = pathname.includes('categories')? "../../pages/services.html#contactMe" : "../pages/services.html#contactMe";
hamburgerImage.src = pathname.includes('categories')? "../../images/webpage/elements/hamburger_menu3.png" : "../images/webpage/elements/hamburger_menu3.png";
hamburgerImage.classList = 'hamburger';

servicesLink.innerText = 'Services';
logo.classList = 'logo';
aboutMeLink.innerText = 'About Me';
portfolioLink.innerText = 'Pictures';
contactMeLink.innerText = 'Contact me';

servicesItem.appendChild(servicesLink);
aboutMeItem.appendChild(aboutMeLink);
portfolioItem.appendChild(portfolioLink);
contactMeItem.appendChild(contactMeLink);
landingPageItem.appendChild(landingPageLink);

landingPageLink.appendChild(logo);
menu.append(servicesItem, aboutMeItem, portfolioItem, contactMeItem, landingPageItem);
nav.appendChild(landingPageLink);
nav.appendChild(menu);
nav.appendChild(hamburgerImage);
header.appendChild(nav);
document.body.appendChild(header);

hamburgerImage.addEventListener('click', (e) => {
    if(menu.classList.contains('show')) {
        menu.classList = '';
        hamburgerImage.src = pathname.includes('categories')? "../../images/webpage/elements/hamburger_menu3.png" : "../images/webpage/elements/hamburger_menu3.png";
    }
    else{
        menu.classList = 'show';
        hamburgerImage.src = pathname.includes('categories')? "../../images/webpage/elements/close_button.png" : "../images/webpage/elements/close_button.png";
    }
});

underlineCurrnetPage();

function underlineCurrnetPage(){
    let pathname = window.location.pathname;
    links = document.querySelectorAll('header nav a');
    console.log(links);
    links.forEach(link => {
        link.href.includes(pathname) && !link.href.includes('contact')? link.style.textDecoration = 'underline': true;
    });
}
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

logo.src = "../images/webpage/elements/skars_logo_big.png";
landingPageLink.href = "../pages/index.html";
servicesLink.href = "../pages/services.html";
aboutMeLink.href = "../pages/aboutMe.html";
portfolioLink.href = "../pages/portfolio.html";
contactMeLink.href = "../pages/services.html#contactMe";
hamburgerImage.src = "../images/webpage/elements/hamburger_menu3.png";
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
        hamburgerImage.src = "../images/webpage/elements/hamburger_menu3.png";
    }
    else{
        menu.classList = 'show';
        hamburgerImage.src = "../images/webpage/elements/close_button.png"
    }
});

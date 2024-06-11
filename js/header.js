const logo = document.createElement('img');
const menu = document.createElement('menu');
const servicesLink = document.createElement('a');
const aboutMeLink = document.createElement('a');
const portfolioLink = document.createElement('a');
const contactMeLink = document.createElement('a');
const landingPageLink = document.createElement('a');
const header = document.createElement('header');

const servicesItem = document.createElement('li');
const aboutMeItem = document.createElement('li');
const portfolioItem = document.createElement('li');
const contactMeItem = document.createElement('li');
const landingPageItem = document.createElement('li');

logo.src = "../images/webpage/elements/skars_logo_small.png";
landingPageLink.href = "../pages/index.html";
servicesLink.href = "../pages/services.html";
aboutMeLink.href = "../pages/aboutMe.html";
portfolioLink.href = "../pages/portfolio.html";
contactMeLink.href = "../pages/services.html#contactMe";

servicesLink.innerText = 'Services';
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
header.appendChild(landingPageLink);
header.appendChild(menu);
document.body.appendChild(header);

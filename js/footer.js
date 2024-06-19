const footer = document.createElement('footer');

// Create a container div for the footer information and set its class
const containerDiv = document.createElement('div');
containerDiv.classList = 'infoContainer';

// Create the footer background image and set its attributes
const footerBackgroundImg = document.createElement('img');
footerBackgroundImg.classList = 'footerBackgroundImage';
footerBackgroundImg.alt = 'footer image';
// Set the source of the background image based on the current path
footerBackgroundImg.src = pathname.includes('categories') ? '../../images/webpage/elements/footer_background.png' : '../images/webpage/elements/footer_background.png';

// Create the contact information section
const contactInfo = document.createElement('address');
contactInfo.className = 'footer-section';
// Set the inner HTML of the contact information based on the current path
contactInfo.innerHTML = pathname.includes('categories') ? `
    <h3>Contact Information</h3>
    <ul>
        <li><img src="../../images/webpage/elements/phone_icon_black.svg" alt=""><a href="tel:+359888555491">+359 888 555 491</a></li>
        <li><img src="../../images/webpage/elements/mail_icon_black.svg" alt=""><a href="mailto:info@skarsphotography.com">info@skarsphotography.com</a></li>
        <li><img src="../../images/webpage/elements/insta_icon_black.svg" alt=""><a href="https://www.instagram.com/skars_ph/">@skars_ph</a></li>
    </ul>
` : `
    <h3>Contact Information</h3>
    <ul>
        <li><img src="../images/webpage/elements/phone_icon_black.svg" alt=""><a href="tel:+359888555491">+359 888 555 491</a></li>
        <li><img src="../images/webpage/elements/mail_icon_black.svg" alt=""><a href="mailto:info@skarsphotography.com">info@skarsphotography.com</a></li>
        <li><img src="../images/webpage/elements/insta_icon_black.svg" alt=""><a href="https://www.instagram.com/skars_ph/">@skars_ph</a></li>
    </ul>
`;

// Create the quick links section
const quickLinks = document.createElement('nav');
quickLinks.className = 'footer-section';
// Set the inner HTML of the quick links section based on the current path
quickLinks.innerHTML = pathname.includes('categories') ? `
    <h3>Quick Links</h3>
    <ul>
        <li><a href="../../pages/portfolio.html">Images</a></li>
        <li><a href="../../pages/services.html">Hire Me</a></li>
        <li><a href="../../pages/aboutMe.html">About Me</a></li>
        <li><a href="../../pages/services.html#contactMe">Contact Me</a></li>
    </ul>
` : `
    <h3>Quick Links</h3>
    <ul>
        <li><a href="../pages/portfolio.html">Images</a></li>
        <li><a href="../pages/services.html">Hire Me</a></li>
        <li><a href="../pages/aboutMe.html">About Me</a></li>
        <li><a href="../pages/services.html#contactMe">Contact Me</a></li>
    </ul>
`;

// Create the legal section
const legal = document.createElement('div');
legal.className = 'footer-section';
// Set the inner HTML of the legal section
legal.innerHTML = `
    <h3>Legal</h3>
    <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
    </ul>
`;

// Create the footer logo section
const footerLogo = document.createElement('figure');
footerLogo.className = 'footer-logo';
const logoImg = document.createElement('img');
// Set the source of the logo image based on the current path
logoImg.src = pathname.includes('categories') ? '../../images/webpage/elements/skars_logo_black_big.png' : '../images/webpage/elements/skars_logo_black_big.png';
logoImg.alt = 'Logo';

footerLogo.appendChild(logoImg);
containerDiv.appendChild(contactInfo);
containerDiv.appendChild(quickLinks);
containerDiv.appendChild(legal);
footer.appendChild(containerDiv);
footer.appendChild(footerLogo);
footer.appendChild(footerBackgroundImg);
document.body.appendChild(footer);

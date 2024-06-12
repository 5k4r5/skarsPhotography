const footer = document.createElement('footer');

const footerBackgroundImg = document.createElement('img');
footerBackgroundImg.classList = 'footerBackgroundImage';
footerBackgroundImg.alt = 'footer image';
footerBackgroundImg.src = '../images/webpage/elements/footer_background.png';

const contactInfo = document.createElement('address');
contactInfo.className = 'footer-section';
contactInfo.innerHTML = `
        <h3>Contact Information</h3>
        <ul>
            <li><a href="tel:+359888555491">📞 +359 888 555 491</a></li>
            <li><a href="mailto:info@skarsphotography.com">📧 info@skarsphotography.com</p></li>
            <li><a href="https://www.instagram.com/skars_ph/">📷 @skars_ph</p></li>
        </ul>
`;

const quickLinks = document.createElement('nav');
quickLinks.className = 'footer-section';
quickLinks.innerHTML = `
        <h3>Quick Links</h3>
        <ul>
            <li><a href="../pages/portfolio.html">Images</a></li>
            <li><a href="../pages/services.html">Hire Me</a></li>
            <li><a href="../pages/aboutMe.html">About Me</a></li>
            <li><a href="../pages/services.html#contactMe">Contact Me</a></li>
        </ul>
    `;

const legal = document.createElement('div');
legal.className = 'footer-section';
legal.innerHTML = `
    <h3>Legal</h3>
    <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
    </ul>
    `;

const footerLogo = document.createElement('figure');
footerLogo.className = 'footer-logo';
const logoImg = document.createElement('img');
logoImg.src = '../images/webpage/elements/skars_logo_black_big.png';
logoImg.alt = 'Logo';
footerLogo.appendChild(logoImg);

footer.appendChild(contactInfo);
footer.appendChild(quickLinks);
footer.appendChild(legal);
footer.appendChild(footerLogo);

footer.appendChild(footerBackgroundImg);
document.body.appendChild(footer);
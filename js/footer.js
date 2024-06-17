const footer = document.createElement('footer');

const containerDiv = document.createElement('div');
containerDiv.classList = 'infoContainer';

const footerBackgroundImg = document.createElement('img');
footerBackgroundImg.classList = 'footerBackgroundImage';
footerBackgroundImg.alt = 'footer image';
footerBackgroundImg.src = pathname.includes('categories')? '../../images/webpage/elements/footer_background.png' : '../images/webpage/elements/footer_background.png';

const contactInfo = document.createElement('address');
contactInfo.className = 'footer-section';
contactInfo.innerHTML = pathname.includes('categories')? `
        <h3>Contact Information</h3>
        <ul>
            <li><img src="../../images/webpage/elements/phone_icon_black.svg" alt=""><a href="tel:+359888555491">+359 888 555 491</a></li>
            <li><img src="../../images/webpage/elements/mail_icon_black.svg" alt=""><a href="mailto:info@skarsphotography.com">info@skarsphotography.com</a></li>
            <li><img src="../../images/webpage/elements/insta_icon_black.svg" alt=""><a href="https://www.instagram.com/skars_ph/">@skars_ph</a></li>
        </ul>
`: `
<h3>Contact Information</h3>
<ul>
    <li><img src="../images/webpage/elements/phone_icon_black.svg" alt=""><a href="tel:+359888555491">+359 888 555 491</a></li>
    <li><img src="../images/webpage/elements/mail_icon_black.svg" alt=""><a href="mailto:info@skarsphotography.com">info@skarsphotography.com</a></li>
    <li><img src="../images/webpage/elements/insta_icon_black.svg" alt=""><a href="https://www.instagram.com/skars_ph/">@skars_ph</a></li>
</ul>
`;

const quickLinks = document.createElement('nav');
quickLinks.className = 'footer-section';
quickLinks.innerHTML = pathname.includes('categories')? `
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
logoImg.src = pathname.includes('categories')? '../../images/webpage/elements/skars_logo_black_big.png' : '../images/webpage/elements/skars_logo_black_big.png';
logoImg.alt = 'Logo';
footerLogo.appendChild(logoImg);

containerDiv.appendChild(contactInfo);
containerDiv.appendChild(quickLinks);
containerDiv.appendChild(legal);
footer.appendChild(containerDiv);
footer.appendChild(footerLogo);

footer.appendChild(footerBackgroundImg);
document.body.appendChild(footer);

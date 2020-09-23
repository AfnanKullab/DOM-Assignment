const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here

const nav1 = document.querySelector('header nav a:first-child');
nav1.textContent = siteContent.nav['nav-item-1'];
nav1.style.color = "green";

const nav2 = document.querySelector('header nav a:nth-child(2)');
nav2.textContent = siteContent.nav['nav-item-2'];
nav2.style.color = "green";

const nav3 = document.querySelector('header nav a:nth-child(3)');
nav3.textContent = siteContent.nav['nav-item-3'];
nav3.style.color = "green";

const nav4 = document.querySelector('header nav a:nth-child(4)');
nav4.textContent = siteContent.nav['nav-item-4'];
nav4.style.color = "green";

const nav5 = document.querySelector('header nav a:nth-child(5)');
nav5.textContent = siteContent.nav['nav-item-5'];
nav5.style.color = "green";

const nav6 = document.querySelector('header nav a:last-child');
nav6.textContent = siteContent.nav['nav-item-6'];
nav6.style.color = "green";

const item1 = document.createElement('a');
item1.textContent = "new item 1";
item1.style.color = "green";

const item2 = document.createElement('a');
item2.textContent = "new item 2";
item2.style.color = "green";
// add two new items to the navigation system:  
const nav = document.querySelector('header nav');
nav.appendChild(item1);
nav.appendChild(item2);

const logoImg = document.getElementById('logo-img');
logoImg.setAttribute('src', siteContent.nav['img-src']);

//1st section:
const h1 = document.querySelector('body > div > section.cta > div > h1');
h1.textContent = siteContent.cta.h1;
const button = document.querySelector('body > div > section.cta > div > button');
button.textContent = siteContent.cta.button;
const headerImg = document.getElementById('cta-img')
headerImg.setAttribute('src', siteContent.cta['img-src']);

// 2nd section:
const Features = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > h4');
Features.textContent = siteContent['main-content']['features-h4'];
const featuresContent = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > p');
featuresContent.textContent = siteContent['main-content']['features-content'];

const about = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > h4')
about.textContent = siteContent['main-content']['about-h4'];
const aboutContent = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > p');
aboutContent.textContent = siteContent['main-content']['about-content'];
 
const middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const services = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > h4');
services.textContent = siteContent['main-content']['services-h4'];
const servicesContent = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > p');
servicesContent.textContent = siteContent['main-content']['services-content'];

const product = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > h4');
product.textContent = siteContent['main-content']['product-h4'];
const productContent = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > p');
productContent.textContent = siteContent['main-content']['product-content'];

const vision = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > h4');
vision.textContent = siteContent['main-content']['vision-h4'];
const visionContent = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > p');
visionContent.textContent = siteContent['main-content']['vision-content'];
// 3rd section:
const contactHeading = document.querySelector('body > div > section.contact > h4');
contactHeading.textContent = siteContent.contact['contact-h4'];
const address = document.querySelector('body > div > section.contact > p:nth-child(2)');
address.textContent = siteContent.contact['address'];
const phone = document.querySelector('body > div > section.contact > p:nth-child(3)');
phone.textContent = siteContent.contact['phone'];
const email = document.querySelector('body > div > section.contact > p:nth-child(4)');
email.textContent = siteContent.contact['email'];

// footer section:
const footer = document.querySelector(' footer p');
footer.textContent = siteContent.footer.copyright;
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
// const navs = document.getElementsByTagName('header nav');
// for (i = 0; i < nav.length; i++){
//   navs.style.color = "green";
// }
const headerImg = document.getElementById('logo-img');
headerImg.setAttribute('src', 'img/logo.png');


const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

const langToggle = document.getElementById('langToggle');
let currentLanguage = 'ar';

if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('english', currentLanguage === 'en');

    document.querySelectorAll('[data-ar][data-en]').forEach((element) => {
      element.textContent = element.getAttribute(currentLanguage === 'ar' ? 'data-ar' : 'data-en');
    });
    langToggle.textContent = currentLanguage === 'ar' ? 'EN' : 'عربي';
  });
}

document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navMenu');
    if (menu && menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

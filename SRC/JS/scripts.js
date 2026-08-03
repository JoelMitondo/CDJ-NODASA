import { translations } from './translations.js';

const DEFAULT_LANG = 'fr';

// 1. Récupérer la langue courante (depuis localStorage ou par défaut)
export function getLanguage() {
  return localStorage.getItem('cdj_lang') || DEFAULT_LANG;
}

// 2. Obtenir la traduction d'une clé spécifique
export function t(key, lang = getLanguage()) {
  return translations[lang]?.[key] || translations[DEFAULT_LANG]?.[key] || key;
}

// 3. Appliquer la traduction sur toute la page
export function setLanguage(lang) {
  if (!translations[lang]) lang = DEFAULT_LANG;

  // Sauvegarde de la préférence utilisateur
  localStorage.setItem('cdj_lang', lang);
  document.documentElement.lang = lang;

  // Traduction des textes (balises standards)
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = t(key, lang);
  });

  // Traduction des champs de saisie (placeholders)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.placeholder = t(key, lang);
  });

  // Synchronisation du sélecteur de langue s'il est présent
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = lang;
  }
}

// 4. Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getLanguage();
  setLanguage(currentLang);

  // Écouteur sur le sélecteur de langue
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
});


// GESTION DU MENU BURGER MOBILE & SOUS-MENUS AU CLIC
const mobile_menu_btn = document.getElementById("mobile-menu-btn")
const burger_icon = document.getElementById("burger-icon")
const close_icon = document.getElementById("close_icon")
const mobile_menu=document.getElementById("mobile-menu")
mobile_menu_btn.addEventListener("click", ()=>{
  burger_icon.classList.toggle("hidden")
  close_icon.classList.toggle("hidden")
  mobile_menu.classList.toggle("hidden")
})
function cacher_afficher(a,b){
  a.addEventListener("click", ()=>{
  b.classList.toggle("hidden")
  })
}
const menu_mobile_grDeVie=document.getElementById("menu_mobile_grDeVie")
const mobile_sub_groupes=document.getElementById("mobile_sub_groupes")
cacher_afficher(menu_mobile_grDeVie,mobile_sub_groupes)

const menu_mobile_agenda=document.getElementById("menu_mobile_agenda")
const mobile_sub_agenda=document.getElementById("mobile_sub_agenda")
cacher_afficher(menu_mobile_agenda,mobile_sub_agenda)

const menu_mobile_contact=document.getElementById("menu_mobile_contact")
const mobile_sub_contact=document.getElementById("mobile_sub_contact")
cacher_afficher(menu_mobile_contact,mobile_sub_contact)

const search_btn=document.querySelector(".search_btn")
const search_modal=document.getElementById("search-modal")
cacher_afficher(search_btn,search_modal)

const closes_earch_modal=document.getElementById("close-search-modal")
cacher_afficher(closes_earch_modal,search_modal)

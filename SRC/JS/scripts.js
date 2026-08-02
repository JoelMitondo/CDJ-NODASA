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
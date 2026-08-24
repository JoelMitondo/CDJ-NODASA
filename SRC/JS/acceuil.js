const svgIconeLieu = `
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" />
    </svg>`

const svgIconeMontre = `
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> 
            <path d="M0 0h24v24H0z" fill="none" /> 
            <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /> 
        </svg>`
const svgMonnaie = `
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 
        24"> 
        <path d="M0 0h24v24H0z" fill="none" /> 
        <path fill="currentColor" d="M13.5 16a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" /> 
        <path fill="currentColor" d="m14.347.66l3.18 4.456l2.097-.715L21.538 
        10h.962v12h-21V10h.51v-.01l.648.006zM9.397 10h10.028l-1.037-3.033l
        1.522.487zM7.839 8.417L15.55 5.79l-1.604-2.25zM5.5 12h-2v2a2 2 0 0 0 2-2m10 4a3.5 
        3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0m5 4v-2a2 2 0 0 0-2 2zm-2-8a2 2 0 0 0 2 2v-2zm-15 8h2a2 2 
        0 0 0-2-2z" /> 
    </svg>`;
const svgMegaphone = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h3l5 4V4zm9.5 4c0 1.71-.96 3.26-2.5 4V8c1.53.75 2.5 2.3 2.5 4" />
                        </svg>`
function initialiserAgenda() {
  const lesEvenements = JSON.parse(localStorage.getItem("evenements")) || [];
  const containerEvenement = document.getElementById("conteneur-evenements");
  const conteneurFiltres = document.getElementById("filtres-agenda");

  if (!containerEvenement) return;

  // Couleurs et thèmes
  const couleurUn = "bg-cdj-primary";
  const couleurDeux = "bg-cdj-secondary";
  const couleurTexteUn = "text-cdj-primary";
  const couleurTexteDeux = "text-cdj-secondary";
  const groupHoverUn = "group-hover:text-cdj-primary";
  const groupHoverDeux = "group-hover:text-cdj-secondary";

  const nomMois = ["Janv", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];

  // Fonction principale d'affichage filtré
  function afficherEvenements(filtre = "tous") {
    containerEvenement.innerHTML = "";

    // Filtrage des données selon le groupe responsable
    const evenementsFiltres = lesEvenements.filter((item) => {
      const responsable = (item.groupe_responsable || "").toLowerCase();
      if (filtre === "cdj") {
        return responsable.includes("bureau") || responsable.includes("cdj");
      }
      if (filtre === "groupes") {
        return !responsable.includes("bureau") && !responsable.includes("cdj");
      }
      return true; // 'tous'
    });

    if (evenementsFiltres.length === 0) {
      containerEvenement.innerHTML = `
        <div class="col-span-full text-center py-12 text-cdj-muted text-sm font-semibold">
          Aucun événement disponible dans cette catégorie.
        </div>`;
      return;
    }

    let htmlBuffer = "";

    evenementsFiltres.forEach((item, index) => {
      const estPair = index % 2 === 1;
      const couleurUtilisee = estPair ? couleurDeux : couleurUn;
      const couleurTexte = estPair ? couleurTexteDeux : couleurTexteUn;
      const groupeHover = estPair ? groupHoverDeux : groupHoverUn;

      const dateParts = (item.date_evenement || "2026-01-01").split("-");
      const annee = dateParts[0];
      const mois = nomMois[Number(dateParts[1]) - 1] || "Janv";
      const jour = dateParts[2];

      htmlBuffer += `
        <article class="carte-evenement lg:col-span-2 border-2 border-cdj-primary/40 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
          <div class="blocEvenement">                
            <div class="blocEvenementVisible flex flex-col sm:flex-row gap-6 relative overflow-hidden group">
              
              <!-- Bloc Date -->
              <div class="flex sm:flex-col items-center justify-center gap-2 sm:gap-0 ${couleurUtilisee} text-white p-4 sm:p-6 rounded-2xl shrink-0 sm:w-28 text-center shadow-lg">
                <span class="text-3xl sm:text-4xl font-black leading-none">${jour}</span>
                <span class="text-xs sm:text-sm font-bold uppercase tracking-wider">${mois}</span>
                <span class="text-[10px] opacity-80 font-semibold hidden sm:block mt-1">${annee}</span>
              </div>

              <!-- Détails -->
              <div class="flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div class="flex items-center gap-2 mb-2 flex-wrap">
                    <span class="px-2.5 py-0.5 rounded-full bg-cdj-primary/20 ${couleurTexte} dark:text-sky-300 font-bold text-[11px] uppercase">
                      Événement : ${item.groupe_responsable}
                    </span>
                    <span class="text-xs text-cdj-muted font-semibold flex items-center gap-1">
                      ${svgIconeLieu} ${item.lieu}
                    </span>
                  </div>

                  <h3 class="text-xl sm:text-2xl font-black text-cdj-text ${groupeHover} transition-colors mb-2">
                    ${item.nom_evenement}
                  </h3>

                  <p class="text-xs sm:text-sm text-cdj-muted leading-relaxed line-clamp-2 sm:line-clamp-none">
                    ${item.description_evenement}
                  </p>
                </div>

                <!-- Pied de carte -->
                <div class="pt-4 border-t border-cdj-border/60 flex items-center justify-between gap-4">
                  <div class="flex items-center gap-3 text-xs text-cdj-muted font-bold">
                    <span>${svgIconeMontre}</span>
                    <span>${item.heure_debut} - ${item.heure_fin}</span>
                  </div>

                  <button class="btnEvenement inline-flex items-center gap-2 px-4 py-2 rounded-xl ${couleurUtilisee} text-white text-xs font-bold hover:bg-opacity-90 transition-all shadow-md cursor-pointer">
                    <span class="spanEvenementVoirPlus">Voir plus</span>
                    <span class="spanEvenementVoirMoins hidden">Réduire</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Détails déroulants -->
            <div class="details-evenement hidden mt-6 pt-6 border-t border-sky-400/20 space-y-4 animate-fadeIn">
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div class="p-3 rounded-2xl bg-sky-500/5 border border-sky-400/20">
                  <span class="text-[10px] uppercase font-black text-sky-500 block mb-1">Public Autorisé</span>
                  <span class="font-bold text-cdj-text">${item.droit_entree || 'Tous'}</span>
                </div>

                <div class="p-3 rounded-2xl bg-sky-500/5 border border-sky-400/20">
                  <span class="flex gap-2 text-[10px] uppercase font-black text-sky-500 block mb-1">${svgMonnaie} Droit d'entrée</span>
                  <span class="font-bold text-cdj-text">${item.frais || 'Gratuit'}</span>
                </div>

                <div class="p-3 rounded-2xl bg-sky-500/5 border border-sky-400/20">
                  <span class="flex gap-2 text-[10px] uppercase font-black text-sky-500 block mb-1">${svgMegaphone} Orateur</span>
                  <span class="font-bold text-cdj-text">${item.orateur || 'N/A'}</span>
                </div>
              </div>

              <div class="p-4 rounded-2xl bg-sky-500/5 border border-sky-400/20 text-xs text-cdj-muted space-y-2 leading-relaxed">
                <h4 class="font-black text-cdj-text uppercase text-[11px] text-sky-500">Description Détaillée :</h4>
                <p>${item.apropos_evenement}</p>
              </div>
            </div>
          </div>
        </article>`;
    });

    containerEvenement.innerHTML = htmlBuffer;
  }

  // Événement Clic : Bouton Voir plus / Réduire
  containerEvenement.addEventListener("click", (event) => {
    const bouton = event.target.closest(".btnEvenement");
    if (!bouton) return;

    const blocEvenement = bouton.closest(".blocEvenement");
    const blocCache = blocEvenement.querySelector(".details-evenement");
    const spanVoirPlus = blocEvenement.querySelector(".spanEvenementVoirPlus");
    const spanVoirMoins = blocEvenement.querySelector(".spanEvenementVoirMoins");

    blocCache.classList.toggle("hidden");
    spanVoirPlus.classList.toggle("hidden");
    spanVoirMoins.classList.toggle("hidden");
  });

  // Événement Clic : Filtres de catégorie
  if (conteneurFiltres) {
    const boutons = conteneurFiltres.querySelectorAll("button");

    conteneurFiltres.addEventListener("click", (event) => {
      const btnSelectionne = event.target.closest("button");
      if (!btnSelectionne) return;

      // Réinitialiser les styles de tous les boutons
      boutons.forEach((btn) => {
        btn.className = "px-4 py-2 rounded-xl text-xs font-bold text-cdj-muted hover:text-cdj-text transition-all shrink-0 cursor-pointer";
      });

      // Appliquer le style actif au bouton cliqué
      btnSelectionne.className = "px-4 py-2 rounded-xl text-xs font-bold transition-all bg-cdj-primary text-white shadow-sm shrink-0 cursor-pointer";

      // Identifier le filtre à appliquer
      let typeFiltre = "tous";
      if (btnSelectionne.id === "bouton-filtre-cdj") typeFiltre = "cdj";
      if (btnSelectionne.id === "bouton-filtre-groupes") typeFiltre = "groupes";

      afficherEvenements(typeFiltre);
    });
  }

  // Chargement initial avec tous les événements
  afficherEvenements("tous");
}

// Lancement au chargement du DOM
document.addEventListener("DOMContentLoaded", initialiserAgenda);
const svgIconeLieu = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`;
const svgIconeMontre = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
const svgUsers = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`;
const svgMonnaie = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5z"/></svg>`;const nomMois = ["JAN", "FÉV", "MAR", "AVR", "MAI", "JIN", "JUL", "AOÛ", "SEP", "OCT", "NOV", "DÉC"];

// État global des filtres
let filtresActifs = {
  categorie: "tous",
  recherche: "",
  triDate: "chronologique",
  triAlphabetique: "defaut",
  frais: "tous"
};
console.log("la vie")
function initAgenda() {
  attacherEvenementsFiltres();
  afficherEvenement();
}
initAgenda()
function afficherEvenement() {
  const donneesBrutes = localStorage.getItem("evenements");
  const containerEvenement = document.getElementById("conteneur-evenements");
  const messageAucun = document.getElementById("message-aucun-resultat");

  if (!containerEvenement) return;
  containerEvenement.innerHTML = "";

  let lesEvenements = donneesBrutes ? JSON.parse(donneesBrutes) : [];

  // 1. Filtrage par recherche textuelle
  if (filtresActifs.recherche.trim() !== "") {
    const requete = filtresActifs.recherche.toLowerCase();
    lesEvenements = lesEvenements.filter(ev => 
      ev.nom_evenement?.toLowerCase().includes(requete) ||
      ev.description_evenement?.toLowerCase().includes(requete) ||
      ev.lieu?.toLowerCase().includes(requete) ||
      ev.orateur?.toLowerCase().includes(requete) ||
      ev.groupe_responsable?.toLowerCase().includes(requete)
    );
  }

  // 2. Filtrage par Catégorie
  if (filtresActifs.categorie !== "tous") {
    if (filtresActifs.categorie === "CDJ") {
      lesEvenements = lesEvenements.filter(ev => ev.groupe_responsable?.toUpperCase().includes("CDJ") || ev.groupe_responsable?.toUpperCase().includes("BUREAU"));
    } else if (filtresActifs.categorie === "Groupes") {
      lesEvenements = lesEvenements.filter(ev => !ev.groupe_responsable?.toUpperCase().includes("CDJ"));
    }
  }

  // 3. Filtrage par Droit d'entrée / Frais
  if (filtresActifs.frais !== "tous") {
    if (filtresActifs.frais === "gratuit") {
      lesEvenements = lesEvenements.filter(ev => ev.frais?.toLowerCase().includes("gratuit") || ev.frais?.toLowerCase().includes("libre") || ev.frais === "0");
    } else if (filtresActifs.frais === "payant") {
      lesEvenements = lesEvenements.filter(ev => !ev.frais?.toLowerCase().includes("gratuit") && !ev.frais?.toLowerCase().includes("libre") && ev.frais !== "0");
    }
  }

  // 4. Tri par Date
  lesEvenements.sort((a, b) => {
    const dateA = new Date(a.date_evenement);
    const dateB = new Date(b.date_evenement);
    return filtresActifs.triDate === "chronologique" ? dateA - dateB : dateB - dateA;
  });

  // 5. Tri Alphabétique (Surpasse le tri par date si actif)
  if (filtresActifs.triAlphabetique === "az") {
    lesEvenements.sort((a, b) => a.nom_evenement.localeCompare(b.nom_evenement));
  } else if (filtresActifs.triAlphabetique === "za") {
    lesEvenements.sort((a, b) => b.nom_evenement.localeCompare(a.nom_evenement));
  }

  // Affichage du message si aucun événement ne correspond
  if (lesEvenements.length === 0) {
    if (messageAucun) messageAucun.classList.remove("hidden")
        containerEvenement.classList.add("hidden");
    return;
  } else {
    if (messageAucun) messageAucun.classList.add("hidden")
        containerEvenement.classList.remove("hidden");
  }

  // 6. Rendu HTML de la liste filtrée
  const couleurUn = "bg-cdj-primary";
  const couleurDeux = "bg-sky-500";
  const couleurTexteUn = "text-cdj-primary";
  const couleurTexteDeux = "text-sky-500";

  let htmlEvenement = "";

  lesEvenements.forEach((ev, i) => {
    const couleurUtilisee = (i % 2 === 1) ? couleurDeux : couleurUn;
    const couleurTexte = (i % 2 === 1) ? couleurTexteDeux : couleurTexteUn;

    const partieDate = ev.date_evenement.split("-");
    const annee = partieDate[0] || "2026";
    const mois = nomMois[Number(partieDate[1]) - 1] || "JAN";
    const jour = partieDate[2] || "01";

    htmlEvenement += `
      <article class="carte-evenement bg-cdj-card border-2 border-cdj-border rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
        <div class="blocEvenement">                
          <div class="blocEvenementVisible flex flex-col sm:flex-row gap-6 relative overflow-hidden group">
            
            <!-- Bloc Date Magnétique -->
            <div class="flex sm:flex-col items-center justify-center gap-2 sm:gap-0 ${couleurUtilisee} text-white p-4 sm:p-6 rounded-2xl shrink-0 sm:w-28 text-center shadow-lg">
              <span class="text-3xl sm:text-4xl font-black leading-none">${jour}</span>
              <span class="text-xs sm:text-sm font-bold uppercase tracking-wider">${mois}</span>
              <span class="text-[10px] opacity-80 font-semibold hidden sm:block mt-1">${annee}</span>
            </div>

            <!-- Détails de l'événement -->
            <div class="flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div class="flex items-center gap-2 mb-2 flex-wrap">
                  <span class="px-2.5 py-0.5 rounded-full bg-sky-500/15 ${couleurTexte} dark:text-sky-300 font-bold text-[11px] uppercase border border-sky-400/20">
                    Organisateur : ${ev.groupe_responsable || 'CDJ'}
                  </span>
                  <span class="text-xs text-cdj-muted font-semibold flex items-center gap-1">
                    ${svgIconeLieu} ${ev.lieu || 'Paroisse NODASA'}
                  </span>
                </div>

                <h3 class="text-xl sm:text-2xl font-black text-cdj-text group-hover:text-cdj-primary transition-colors mb-2">
                  ${ev.nom_evenement}
                </h3>

                <p class="text-xs sm:text-sm text-cdj-muted leading-relaxed line-clamp-2 sm:line-clamp-none">
                  ${ev.description_evenement}
                </p>
              </div>

              <!-- Horaires & Bouton Action -->
              <div class="pt-4 border-t border-cdj-border/60 flex items-center justify-between gap-4">
                <div class="flex items-center gap-3 text-xs text-cdj-muted font-bold">
                  <span class="flex items-center gap-1">${svgIconeMontre} ${ev.heure_debut || '09h00'} - ${ev.heure_fin || '12h00'}</span>
                </div>

                <button class="btnEvenement inline-flex items-center gap-2 px-4 py-2 rounded-xl ${couleurUtilisee} text-white text-xs font-bold hover:bg-opacity-90 transition-all shadow-md cursor-pointer">
                  <span class="spanVoir">S'informer</span>
                  <svg class="icone-fleche w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
              </div>
            </div>
          </div>

          <!-- DIV DÉTAILS DÉROULANTE -->
          <div class="details-evenement hidden mt-6 pt-6 border-t border-sky-400/20 space-y-4 animate-fadeIn">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div class="p-3 rounded-2xl bg-sky-500/5 border border-sky-400/20">
                <div class="flex items-center gap-1.5 text-[10px] uppercase font-black text-sky-500 mb-1">
                  ${svgUsers} <span>Public Autorisé</span>
                </div>
                <span class="font-bold text-cdj-text">${ev.droit_entree || 'Tous les jeunes'}</span>
              </div>

              <div class="p-3 rounded-2xl bg-sky-500/5 border border-sky-400/20">
                <div class="flex items-center gap-1.5 text-[10px] uppercase font-black text-sky-500 mb-1">
                  ${svgMonnaie} <span>Droit d'entrée</span>
                </div>
                <span class="font-bold text-cdj-text">${ev.frais || 'Gratuit'}</span>
              </div>

              <div class="p-3 rounded-2xl bg-sky-500/5 border border-sky-400/20">
                <span class="text-[10px] uppercase font-black text-sky-500 block mb-1">🎙️ Orateur / Intervenants</span>
                <span class="font-bold text-cdj-text">${ev.orateur || 'Bureau CDJ'}</span>
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-sky-500/5 border border-sky-400/20 text-xs text-cdj-muted space-y-2 leading-relaxed">
              <h4 class="font-black text-cdj-text uppercase text-[11px] text-sky-500">📜 Description Détaillée & Programme :</h4>
              <p>${ev.apropos_evenement || ev.description_evenement}</p>
            </div>
          </div>
        </div>
      </article>`;
  });

  containerEvenement.innerHTML = htmlEvenement;

  // Gestionnaire de clics pour dérouler les détails
  containerEvenement.onclick = (event) => {
    const bouton = event.target.closest(".btnEvenement");
    if (!bouton) return;
    
    const blocEvenement = bouton.closest(".blocEvenement");
    const blocCache = blocEvenement.querySelector(".details-evenement");
    const texteVoir = bouton.querySelector(".spanVoir");
    const fleche = bouton.querySelector(".icone-fleche");

    const estCache = blocCache.classList.contains("hidden");
    
    blocCache.classList.toggle("hidden");
    texteVoir.textContent = estCache ? "Fermer" : "S'informer";
    fleche.style.transform = estCache ? "rotate(180deg)" : "rotate(0deg)";
  };
}

// Écouteurs d'événements pour mettre à jour les filtres en temps réel
function attacherEvenementsFiltres() {
  // Recherche textuelle
  const inputRecherche = document.getElementById("recherche-evenement");
  if (inputRecherche) {
    inputRecherche.addEventListener("input", (e) => {
      filtresActifs.recherche = e.target.value;
      afficherEvenement();
    });
  }

  // Filtres Catégorie
  const conteneurCat = document.getElementById("filtres-categorie");
  if (conteneurCat) {
    conteneurCat.addEventListener("click", (e) => {
      const btn = e.target.closest(".btn-filtre-cat");
      if (!btn) return;

      document.querySelectorAll(".btn-filtre-cat").forEach(b => {
        b.className = "btn-filtre-cat px-4 py-2 rounded-xl text-xs font-bold text-cdj-muted hover:text-cdj-text bg-cdj-bg border border-cdj-border transition-all shrink-0";
      });

      btn.className = "btn-filtre-cat px-4 py-2 rounded-xl text-xs font-bold transition-all bg-cdj-primary text-white shadow-sm shrink-0";
      filtresActifs.categorie = btn.dataset.categorie;
      afficherEvenement();
    });
  }

  // Tri par Date
  const selectDate = document.getElementById("tri-date");
  if (selectDate) {
    selectDate.addEventListener("change", (e) => {
      filtresActifs.triDate = e.target.value;
      afficherEvenement();
    });
  }

  // Tri Alphabétique
  const selectAlpha = document.getElementById("tri-alphabetique");
  if (selectAlpha) {
    selectAlpha.addEventListener("change", (e) => {
      filtresActifs.triAlphabetique = e.target.value;
      afficherEvenement();
    });
  }

  // Filtre Frais / Droit d'entrée
  const selectFrais = document.getElementById("filtre-frais");
  if (selectFrais) {
    selectFrais.addEventListener("change", (e) => {
      filtresActifs.frais = e.target.value;
      afficherEvenement();
    });
  }
}

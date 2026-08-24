const infoCommis = JSON.parse(localStorage.getItem("infoCommis"))
const membreCdj = infoCommis.membres_bureau //tableau
const svgPhone = `
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="62" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="62;0" />
                        <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" to="1" />
                    </path>
                </svg>`;
function miseEnPageCdj(){
    const slogans = infoCommis.slogans //c'est un tableau
    const lesSlogan = document.getElementById("slogan")
    lesSlogan.innerHTML=""
    
    for(const slogan of slogans){
        const p = document.createElement("p")
        p.className="text-sm sm:text-base font-bold italic text-sky-500"
        p.textContent=`« ${slogan} »`
        lesSlogan.appendChild(p)    
    }
   const phraseAcroche = document.querySelector(".phraseAcroche")
   phraseAcroche.textContent= `« ${infoCommis.verset_accroche} »`

   const versetBiblique = document.querySelector(".versetBiblique")
   versetBiblique.textContent=infoCommis.reference_biblique

   const deviseCdj = document.querySelector(".deviseCdj")
   deviseCdj.textContent=infoCommis.devise

   const butCdj = document.querySelector(".butCdj")
   butCdj.textContent=infoCommis.but_cdj
   const roleCdj = document.querySelector(".roleCdj")
   roleCdj.textContent=infoCommis.role_cdj
}


function afficherMembres(array){
    if(!array) return;
    const grille_membres_cdj = document.getElementById("grille-membres-cdj")
    let userMembre = ""
    for(const user of array){
        userMembre += `
                  <article class="bg-cdj-card border border-cdj-border rounded-3xl p-5 shadow-xl transition-all duration-300 hover:border-sky-400/50 flex flex-col justify-between group">
            <div class="flex items-start gap-4">
              <img 
                src="${user.avatar}"
                alt=${user.nom} 
                class="w-20 h-20 rounded-2xl object-cover bg-sky-500/10 border border-sky-400/30 shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div class="space-y-1.5 min-w-0 flex-1">
                <span class="inline-block px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-500 font-bold text-[10px] uppercase border border-sky-400/20">
                  ${user.poste}
                </span>
                <h3 class="font-black text-cdj-text text-base truncate">
                   ${user.nom}
                </h3>
                <p class="text-cdj-muted font-semibold text-xs truncate">
                  Bureau CDJ
                </p>
              </div>
            </div>

            <!-- Groupe de provenance & Contact -->
            <div class="mt-4 pt-3 border-t border-cdj-border/60 flex items-center justify-between text-xs">
              <span class="px-2.5 py-1 rounded-xl bg-sky-500/5 text-cdj-muted font-bold text-[11px] border border-sky-400/10 flex items-center gap-1">
                 <strong class="text-sky-500">${user.groupe_provenance}</strong>
              </span>
              <a href="tel:+243820000111" class="inline-flex items-center gap-1 text-sky-500 hover:underline font-bold text-xs">
                ${svgPhone} ${user.telephone}
              </a>
            </div>
          </article>`
    }
    grille_membres_cdj.innerHTML=""
    grille_membres_cdj.innerHTML=userMembre
}



function afficherCommuniquesCDJ() {
  const donneesBrutes = localStorage.getItem("communiqueOfficielCDJ");
  const grilleCommuniques = document.getElementById("grille-communiques-cdj");
  if(!donneesBrutes) return;
  if (!grilleCommuniques) return;

  // Données de démonstration si le localStorage est vide
  const listeCommuniques = JSON.parse(donneesBrutes);
  let htmlCommuniques = "";

  listeCommuniques.forEach((item) => {
    htmlCommuniques += `
      <article class="carte-communique h-full flex flex-col justify-between bg-cdj-card border border-cdj-border rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-sky-400/50 transition-all duration-300 group">
        
        <div class="space-y-4">
          <!-- En-tête : Badge Catégorie & Référence/Date -->
          <div class="flex items-center justify-between gap-2 flex-wrap">
            <span class="px-2.5 py-1 rounded-full bg-red-500/15 text-red-500 border border-red-500/20 font-black text-[10px] uppercase tracking-wider">
              ${item.categorie || 'Officiel'}
            </span>
            <span class="text-[11px] font-semibold text-cdj-muted">
              N° ${item.numero_ref || '00/2026'} • ${item.date}
            </span>
          </div>

          <!-- Titre & Description Courte -->
          <div class="space-y-2">
            <h3 class="text-lg font-black text-cdj-text group-hover:text-sky-500 transition-colors leading-snug">
              ${item.titre}
            </h3>
            <p class="text-xs text-cdj-muted leading-relaxed line-clamp-3">
              ${item.description}
            </p>
          </div>

          <!-- DÉTAILS COMPLETS DÉROULANTS (Cachés par défaut) -->
          <div class="details-communique hidden pt-4 border-t border-sky-400/20 space-y-3 animate-fadeIn text-xs text-cdj-muted leading-relaxed">
            <div class="p-3.5 rounded-2xl bg-sky-500/5 border border-sky-400/20 text-cdj-text space-y-2">
              <span class="font-black text-sky-500 uppercase text-[10px] block">Contenu Complet :</span>
              <p>${item.contenu_complet || item.description}</p>
            </div>
          </div>
        </div>

        <!-- Pied de Carte : Auteur & Bouton Action -->
        <div class="pt-4 mt-6 border-t border-cdj-border/60 flex items-center justify-between gap-3">
          <div class="flex items-center gap-2 min-w-0">
            <div class="w-8 h-8 rounded-xl bg-sky-500/15 text-sky-500 font-bold text-xs flex items-center justify-center shrink-0 border border-sky-400/20">
              BC
            </div>
            <div class="min-w-0">
              <p class="text-xs font-black text-cdj-text truncate">${item.auteur || 'Bureau CDJ'}</p>
              <p class="text-[10px] text-cdj-muted truncate">${item.qualite || 'Coordination'}</p>
            </div>
          </div>

          <!-- Bouton Voir Plus / Réduire -->
          <button class="btn-toggle-communique inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500/10 hover:bg-sky-500 hover:text-white text-sky-500 font-bold text-xs transition-all shrink-0 cursor-pointer">
            <span class="label-btn">Voir plus</span>
            <svg class="fleche-btn w-3.5 h-3.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </div>

      </article>
    `;
  });

  grilleCommuniques.innerHTML = htmlCommuniques;

  // Gestionnaire de clics pour le déroulement
  grilleCommuniques.onclick = (event) => {
    const btn = event.target.closest(".btn-toggle-communique");
    if (!btn) return;

    const carte = btn.closest(".carte-communique");
    const details = carte.querySelector(".details-communique");
    const label = btn.querySelector(".label-btn");
    const fleche = btn.querySelector(".fleche-btn");

    const estMasque = details.classList.contains("hidden");

    details.classList.toggle("hidden");
    label.textContent = estMasque ? "Réduire" : "Voir plus";
    fleche.style.transform = estMasque ? "rotate(180deg)" : "rotate(0deg)";
  };
}

miseEnPageCdj()
afficherMembres(membreCdj)
afficherCommuniquesCDJ()
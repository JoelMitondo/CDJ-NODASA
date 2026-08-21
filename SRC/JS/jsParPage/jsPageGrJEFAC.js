const infoGroupe = JSON.parse(localStorage.getItem("groupeDeVie"))

const svgPhone = `
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="62" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="62;0" />
                        <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" to="1" />
                    </path>
                </svg>`;
function groupe(array, sigle){
    if(!array) return;
    for(const groupePrecis of array){
        if(groupePrecis.sigle === sigle){
            return groupePrecis ;
        }
    }
}

const groupeSorti = groupe(infoGroupe, "JEFAC" )
function miseEnPage (objet){
    const logo_groupe = document.getElementById("logo_groupe")
    
    const img =document.createElement("img")
    img.src =objet.logo
    img.alt=objet.nom_groupe
    img.className="w-full h-full object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105"
    logo_groupe.appendChild(img)

    function contenuSite(idHtml, texte){
        const constante = document.getElementById(`${idHtml}`)
        constante.textContent=texte
    }

    contenuSite("sigle_badge", objet.sigle)
    contenuSite("nom-groupe", objet.nom_groupe)
    contenuSite("devise-groupe", objet.devise)
    contenuSite("presentation-generale", objet.presentation_generale)
    contenuSite("histoire", objet.historique)
    contenuSite("paragraphe_organisation interne", objet.organisation)
    contenuSite("paragraphe_charisme_propre", objet.charisme)
    contenuSite("rencontre_ordinaire", objet.jour_reunion)
    contenuSite("ancrage_paroissial", objet.ancrage_paroissial)
    
    //Affichage liste des encadreurs
    function affichageEncadreurs(arrayEncadreurs, idHtml){
        if(!arrayEncadreurs) return ;
        const referenceDOM = document.getElementById(`${idHtml}`)
        let liste = ""
        for(const array of arrayEncadreurs){
            liste += `
            <article class="bg-cdj-card border border-cdj-border rounded-3xl p-5 shadow-xl transition-all duration-300 hover:border-sky-400/50 flex items-center gap-4 group">
                <img 
                src="${array.lien_photo}" 
                alt="${array.prenom} ${array.nom}" 
                class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover bg-sky-500/10 border border-sky-400/30 shrink-0 transition-transform duration-300 group-hover:scale-105"
                />
                <div class="space-y-1 min-w-0 flex-1">
                    <span class="inline-block px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-500 font-bold text-[10px] uppercase border border-sky-400/20">
                        ${array.role}
                    </span>
                    <h3 class="font-black text-cdj-text text-base truncate">
                    ${array.prenom} ${array.nom} 
                    </h3>
                    <p class="text-cdj-muted font-semibold text-xs truncate">
                        ${array.poste}
                    </p>
                    <a href="tel:${array.telephone}" class="inline-flex items-center gap-1 text-sky-500 hover:underline font-bold text-xs pt-1">
                        ${svgPhone} ${array.telephone}
                    </a>
                </div>
            </article>`
        }
        referenceDOM.innerHTML=""
        referenceDOM.innerHTML=liste

    }

    // affichage de chaque charisme
    function grilleDesCharisme(){
        const liste_charisme =document.getElementById("grille_charisme")
        const tableau = objet.liste_charisme
        let charisme = ""
        if(!tableau) return;
        for(const charismePrecise of tableau){
            charisme += `
            <div class="p-4 rounded-2xl bg-sky-500/5 border border-sky-400/20 space-y-2 flex flex-col justify-between">
                <div>
                    <h3 class="font-black text-cdj-text text-sm">
                        ${charismePrecise.description_type}
                    </h3>
                    <p class="text-xs text-cdj-muted leading-relaxed mt-1">
                        ${charismePrecise.description}
                    </p>
                </div>
            </div>`
        }
        liste_charisme.innerHTML=""
        liste_charisme.innerHTML=charisme

    }
    

    // affichage de chaque type des formation dispensée
    function grilleDesFormation(){
        const liste_formations =document.getElementById("liste_formations")
        const tableau = objet.types_formations
        let formation = ""
        if(!tableau) return;
        for(const formationPrecise of tableau){
            formation += `
            <div class="flex items-start gap-3 p-4 rounded-2xl bg-sky-500/5 border border-sky-400/20">
                <span class="flex items-center justify-center w-7 h-7 rounded-xl bg-sky-500/15 text-sky-500 font-black text-xs shrink-0 mt-0.5">
                ✓
                </span>
                <div class="space-y-1">
                <h3 class="font-bold text-cdj-text text-sm">
                    ${formationPrecise.description_type}
                </h3>
                <p class="text-xs text-cdj-muted leading-relaxed">
                    ${formationPrecise.description}
                </p>
                </div>
            </div>`
        }
        liste_formations.innerHTML=""
        liste_formations.innerHTML=formation

   
    }

    affichageEncadreurs(objet.encadreurs, "grille_encadreurs")
    grilleDesCharisme()
    grilleDesFormation()
} 


miseEnPage(groupeSorti)

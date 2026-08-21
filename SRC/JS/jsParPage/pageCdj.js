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

miseEnPageCdj()
afficherMembres(membreCdj)
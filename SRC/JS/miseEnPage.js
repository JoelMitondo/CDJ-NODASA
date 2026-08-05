export function miseEnPage(){
    const infoCommis = JSON.parse(localStorage.getItem("infoCommis"))
    const sigle = infoCommis.sigle
    const siglePage = document.querySelectorAll(".sigleCommission")
    siglePage.forEach(element => element.textContent=sigle)

    function afficherInfoUser(tableau, posteUser){
        for(const info of tableau){
            if(info.poste === posteUser){
                return {
                    nom : info.nom,
                    poste : info.poste,
                    telephone : info.telephone
                }
            }
        }
    }
    //Info Président de la CDJ
    const identifiantBurreauCDJ = infoCommis.membres_bureau
    const nomPresidentCDJ=document.querySelector(".nomPresidentCDJ")
    nomPresidentCDJ.textContent=afficherInfoUser(identifiantBurreauCDJ, "Président").nom

}

export function afficherLesGroupes(){
    const divParent = document.getElementById("grille-groupes-bento")
    const groupeDeVie = JSON.parse(localStorage.getItem("groupeDeVie"))
    let groupe = ""
    for(let i=0 ; i < groupeDeVie.length; i++){
        //premiere carte
        if(i === 0){
            groupe += `
                <div id="carte-groupe-ka" class="md:col-span-2 bg-gradient-to-br from-amber-500/10 via-cdj-card to-cdj-card border-2 border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                    <!-- Badge Lumineux -->
                    <div class="flex items-center justify-between gap-4 mb-4">
                        <span class="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm">
                        ${groupeDeVie[i].categorie}
                        </span>
                        <span class="text-xs text-cdj-muted font-semibold flex items-center gap-1">
                        🕒 ${groupeDeVie[i].jour_reunion}
                        </span>
                    </div>
                    <!-- Contenu carte 1 -->
                    <div class="space-y-3 z-10">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 flex items-center justify-center font-black text-2xl shrink-0">
                                🔥
                            </div>
                        <div>
                            <h3 class="text-2xl font-black text-cdj-text group-hover:text-amber-500 transition-colors">
                            ${groupeDeVie[i].nom_groupe} <span>${groupeDeVie[i].sigle}</span>
                            </h3>
                            <p class="text-xs text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                            « ${groupeDeVie[i].devise} »
                            </p>
                        </div>
                        </div>
                        <p class="text-sm text-cdj-muted leading-relaxed line-clamp-3 sm:line-clamp-none">
                        ${groupeDeVie[i].description}
                        </p>
                    </div>

                    <!-- Pied de carte carte 1-->
                    <div class="pt-6 mt-6 border-t border-cdj-border/60 flex items-center justify-between z-10">
                        <span class="text-xs font-bold text-cdj-text">Section Paroissiale NODASA</span>
                        <a href="${groupeDeVie[i].lien_page}" class="inline-flex items-center gap-2 text-xs font-black text-amber-500 hover:text-amber-600 transition-colors">
                            <span data-i18n="groupes.bouton_decouvrir">Découvrir le groupe</span>
                            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                    </div>
                </div>`
        }
        //deuxième carte
        else if(i === 1){
            groupe +=`
                <!-- CARTE 2 -->
                <div id="carte-groupe-scouts" class="bg-cdj-card border border-cdj-border rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="px-3 py-1 rounded-full uppercase bg-emerald-500/10 text-emerald-500 font-bold text-xs">
                                ${groupeDeVie[i].categorie}
                            </span>
                            <div>
                                <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center font-black text-2xl shrink-0"></div>
                            </div>
                        </div>
                        <h3 class="text-xl font-black text-cdj-text group-hover:text-emerald-500 transition-colors mb-2">
                        ${groupeDeVie[i].nom_groupe} <span>${groupeDeVie[i].sigle}</span>
                        </h3>
                        <p class="text-xs text-cdj-muted leading-relaxed mb-4">
                        ${groupeDeVie[i].description}
                        </p>
                    </div>

                    <div class="pt-4 border-t border-cdj-border/60 flex items-center justify-between">
                        <span class="text-xs text-cdj-muted font-semibold">🕒 ${groupeDeVie[i].jour_reunion}</span>
                        <a href="${groupeDeVie[i].lien_page}" class="p-2 rounded-xl bg-cdj-bg text-cdj-text group-hover:bg-emerald-500 group-hover:text-white transition-all">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                    </div>
                </div>`
        }
        //troisième carte
        else if(i === 2){
            groupe += `
                <div id="carte-groupe-bjm" class="bg-gradient-to-b from-sky-500/10 via-cdj-card to-cdj-card border border-sky-500/30 rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-sky-500 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="px-3 py-1 uppercase rounded-full bg-sky-500/10 text-sky-400 font-bold text-xs">
                                ${groupeDeVie[i].categorie}
                            </span>
                            <span class="text-2xl">💡</span>
                        </div>
                        <h3 class="text-xl font-black text-cdj-text group-hover:text-sky-400 transition-colors mb-2">
                        ${groupeDeVie[i].nom_groupe}
                        </h3>
                        <p class="text-xs text-cdj-muted leading-relaxed mb-4">
                        ${groupeDeVie[i].description}
                        </p>
                    </div>

                    <div class="pt-4 border-t border-cdj-border/60 flex items-center justify-between">
                        <span class="text-xs text-cdj-muted font-semibold">🕒 ${groupeDeVie[i].jour_reunion}</span>
                        <a href="${groupeDeVie[i].lien_page}" class="p-2 rounded-xl bg-cdj-bg text-cdj-text group-hover:bg-sky-500 group-hover:text-white transition-all">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                    </div>
                </div>`
        }
    }
    divParent.innerHTML = ""
    divParent.innerHTML=groupe
}
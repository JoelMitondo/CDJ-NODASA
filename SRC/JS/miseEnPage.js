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
const svgUsers = `
        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 80 
            80"> 
            <path d="M0 0h80v80H0z" fill="none" /> 
            <path fill="currentColor" d="M24.967 39.306a6.097 6.097 0 0 1-11.934 0l-.13
            .618a6.6 6.6 0 0 1 1.138-5.258l.21-.286a5.89 5.89 0 0 1 9.497 0l.21.286a6.6 6.6 0 0 1 
            1.139 5.258zM8 56.133C8 57.164 8.836 58 9.867 58h8.727a13.5 13.5 0 0 1 5.305
            9.205a19.4 19.4 0 0 0-11.814.646A6.35 6.35 0 0 0 8 55.371zM70.133 58h-8.727a13.5 
            13.5 0 0 0-5.305-9.205a19.4 19.4 0 0 1 11.814.646A6.35 6.35 0 0 1 72 
            55.372v.761A1.867 1.867 0 0 1 70.133 58m-15.1-18.693a6.097 6.097 0 0 0 11.934 0l.13
            .619a6.6 6.6 0 0 0-1.138-5.258l-.21-.286a5.89 5.89 0 0 0-9.497 0l-.21.286a6.6 6.6 0 0 0
            1.139 5.258zM55.8 64H24.2a3.2 3.2 0 0 1-3.2-3.2v-1.207c0-4.57 2.827-8.664 7.1
            10.282a33.6 33.6 0 0 1 23.8 0A10.995 10.995 0 0 1 59 59.593V60.8a3.2 3.2 0 0 1-3.2 
            3.2M35.141 39.078a10.546 10.546 0 0 0 15.176-7.176l.205-.966a11.32 11.32 0 0 0
            1.975-9.08l-.33-.446a10.22 10.22 0 0 0-16.434 0l-.33.446a11.32 11.32 0 0 0-1.975 
            9.08l.205.966a10.55 10.55 0 0 0 5.458 7.176" /> 
        </svg>`;
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
    </svg>`
const svgHouse = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-6v-6h-2v6zm2-2h2v-6h6v6h2V9.325l-5-3.8l-5 3.8zm3-7.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312M9 18v-6h6v6v-6H9z" />
                    </svg>`;
const svgPhone = `
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="62" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="62;0" />
                        <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" to="1" />
                    </path>
                </svg>`;
const svgBible = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M7.833 18c1.4 0 2.62.819 3.195 2.028a1 1 0 0 1-1.806.86A1.54 1.54 0 0 0 7.833 20H3a1 1 0 1 1 0-2zM21 18a1 1 0 1 1 0 2h-4.833c-.567 0-1.135.357-1.389.889a1 1 0 0 1-1.806-.86A3.58 3.58 0 0 1 16.167 18z" />
                        <path fill="currentColor" fill-rule="evenodd" d="M8.889 3.006a4.33 4.33 0 0 1 3.11 1.564A4.33 4.33 0 0 1 15.333 3H22a1 1 0 0 1 1 1v12.001a1 1 0 0 1-1 1L15.333 17c-.658 0-1.085.162-1.372.354a1.93 1.93 0 0 0-.65.76A3.1 3.1 0 0 0 13 19.33v.009l-.005.097a1 1 0 0 1-1.99 0L11 19.334v-.005l-.004-.068a3.1 3.1 0 0 0-.305-1.151a1.9 1.9 0 0 0-.64-.76c-.28-.19-.698-.35-1.343-.35H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6.667zM11 5v12.334h2V5z" clip-rule="evenodd" />
                    </svg>`;
const svgDevise = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M9 5a2 2 0 0 1 2 2v6c0 3.13-1.65 5.193-4.757 5.97a1 1 0 1 1-.486-1.94C7.984 16.473 9 15.203 9 13v-1H6a2 2 0 0 1-1.995-1.85L4 10V7a2 2 0 0 1 2-2zm9 0a2 2 0 0 1 2 2v6c0 3.13-1.65 5.193-4.757 5.97a1 1 0 1 1-.486-1.94C16.984 16.473 18 15.203 18 13v-1h-3a2 2 0 0 1-1.995-1.85L13 10V7a2 2 0 0 1 2-2z" />
                    </svg>`;
const svgMegaphone = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h3l5 4V4zm9.5 4c0 1.71-.96 3.26-2.5 4V8c1.53.75 2.5 2.3 2.5 4" />
                        </svg>`

const nomMois = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Jullet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
];


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

    //boulversser l'ordre d'affichage a chaque chargement de la page
    function melangerTableau(tableau) { 
        for (let i = tableau.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        // échange les deux éléments 
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]]; 
        } 
        return tableau; 
    } 
    const tableauGrVie = JSON.parse(localStorage.getItem("groupeDeVie"))
    let groupeDeVie = melangerTableau(tableauGrVie)
    let groupe = ""
    for(let i = 0 ; i < groupeDeVie.length; i++){
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
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> 
                            <path d="M0 0h24v24H0z" fill="none" /> 
                            <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /> 
                        </svg>
                        ${groupeDeVie[i].jour_reunion}
                        </span>
                    </div>
                    <!-- Contenu carte 1 -->
                    <div class="space-y-3 z-10">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 overflow-hidden rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-black text-2xl shrink-0">
                                <img class="w-full h-full object-cover" src=${groupeDeVie[i].logo} alt="logo de ${groupeDeVie[i].sigle}">
                            </div>
                        <div>
                            <h3 class="text-2xl font-black text-cdj-text group-hover:text-amber-500 transition-colors">
                            ${groupeDeVie[i].nom_groupe} <span>(${groupeDeVie[i].sigle})</span>
                            </h3>
                            <p class="text-xs text-cdj-text group-hover:text-amber-500 font-bold uppercase tracking-wider">
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
                        <span class="flex justify-center items-center content-center gap-2 text-xs font-bold text-cdj-text">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" />
                            </svg> 
                             ${groupeDeVie[i].lieu_de_rencontre}</span>
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
                            <div class="w-12 h-12  overflow-hidden rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center font-black text-2xl shrink-0">
                                <img class="w-full h-full object-cover" src=${groupeDeVie[i].logo} alt="logo de ${groupeDeVie[i].sigle}">
                            </div>
                        </div>
                        <h3 class="text-xl font-black text-cdj-text group-hover:text-emerald-500 transition-colors mb-2">
                        ${groupeDeVie[i].nom_groupe} <span>${groupeDeVie[i].sigle}</span>
                        </h3>
                        <p class="text-xs text-cdj-text group-hover:text-emerald-500 font-bold uppercase tracking-wider">
                            « ${groupeDeVie[i].devise} »
                            </p>
                        <p class="text-xs text-cdj-muted leading-relaxed mb-4">
                        ${groupeDeVie[i].description}
                        </p>
                    </div>

                    <div class="pt-4 border-t border-cdj-border/60 flex items-center justify-between">
                        <div class="flex flex-col items-start">
                            <span class="flex gap-2 text-xs text-cdj-muted font-semibold">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> 
                                    <path d="M0 0h24v24H0z" fill="none" /> 
                                    <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /> 
                                </svg>
                                ${groupeDeVie[i].jour_reunion}
                            </span>
                            <span class="flex justify-center items-center content-center gap-2 text-xs font-bold text-cdj-text">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" />
                                </svg>
                                ${groupeDeVie[i].lieu_de_rencontre}
                             </span>
                        </div>
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
                            <div class="w-12 h-12  overflow-hidden rounded-full bg-sky-500/10 text-sky-400 font-bold flex items-center justify-center font-black text-2xl shrink-0">
                                <img class="w-full h-full object-cover" src=${groupeDeVie[i].logo} alt="logo de ${groupeDeVie[i].sigle}">
                            </div>
                        </div>
                        <h3 class="text-xl font-black text-cdj-text group-hover:text-sky-400 transition-colors mb-2">
                        ${groupeDeVie[i].nom_groupe}
                        </h3>
                        <p class="text-xs text-cdj-text group-hover:text-sky-400 font-bold uppercase tracking-wider">
                            « ${groupeDeVie[i].devise} »
                            </p>
                        <p class="text-xs text-cdj-muted leading-relaxed mb-4">
                        ${groupeDeVie[i].description}
                        </p>
                    </div>

                    <div class="pt-4 border-t border-cdj-border/60 flex items-center justify-between">
                        <div class="flex flex-col items-start">
                            <span class="flex gap-2 text-xs text-cdj-muted font-semibold">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> 
                                    <path d="M0 0h24v24H0z" fill="none" /> 
                                    <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /> 
                                </svg>
                                ${groupeDeVie[i].jour_reunion}
                            </span>
                            <span class="flex justify-center items-center content-center gap-2 text-xs font-bold text-cdj-text">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" />
                                </svg>
                                ${groupeDeVie[i].lieu_de_rencontre}
                             </span>
                        </div>
                        <a href="${groupeDeVie[i].lien_page}" class="p-2 rounded-xl bg-cdj-bg text-cdj-text group-hover:bg-sky-500 group-hover:text-white transition-all">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                    </div>
                </div>`
        }

        //quatrième carte
        else if(i === 3){
            groupe += `
                <div id="carte-groupe-jefac" class="bg-cdj-card border border-cdj-border rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 font-bold text-xs">
                            ${groupeDeVie[i].categorie}
                            </span>
                            <div class="w-12 h-12  overflow-hidden rounded-full bg-purple-500/10 text-purple-400 font-bold flex items-center justify-center font-black text-2xl shrink-0">
                                <img class="w-full h-full object-cover" src=${groupeDeVie[i].logo} alt="logo de ${groupeDeVie[i].sigle}">
                            </div>
                        </div>
                        <h3 class="text-xl font-black text-cdj-text group-hover:text-purple-400 transition-colors mb-2">
                        ${groupeDeVie[i].nom_groupe}
                        </h3>
                        <p class="text-xs text-cdj-text group-hover:text-purple-400 font-bold uppercase tracking-wider">
                            « ${groupeDeVie[i].devise} »
                        </p>
                        <p class="text-xs text-cdj-muted leading-relaxed mb-4">
                        ${groupeDeVie[i].description}
                        </p>
                    </div>

                    <div class="pt-4 border-t border-cdj-border/60 flex items-center justify-between">
                        <div class="flex flex-col items-start">
                            <span class="flex gap-2 text-xs text-cdj-muted font-semibold">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> 
                                    <path d="M0 0h24v24H0z" fill="none" /> 
                                    <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /> 
                                </svg>
                                ${groupeDeVie[i].jour_reunion}
                            </span>
                            <span class="flex justify-center items-center content-center gap-2 text-xs font-bold text-cdj-text">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" />
                                </svg>
                                ${groupeDeVie[i].lieu_de_rencontre}
                             </span>
                        </div>
                        <a href="${groupeDeVie[i].lien_page}" class="p-2 rounded-xl bg-cdj-bg text-cdj-text group-hover:bg-purple-500 group-hover:text-white transition-all">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                    </div>
                </div>`
        }

        //cinquième carte
        else if(i === 4){
            groupe += `
            <div id="carte-groupe-mijerda" class="bg-cdj-card border border-cdj-border rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
                <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 font-bold text-xs">
                    ${groupeDeVie[i].categorie}
                    </span>
                    <div class="w-12 h-12  overflow-hidden rounded-full bg-purple-500/10 text-purple-400 font-bold flex items-center justify-center font-black text-2xl shrink-0">
                        <img class="w-full h-full object-cover" src=${groupeDeVie[i].logo} alt="logo de ${groupeDeVie[i].sigle}">
                    </div>
                </div>
                <h3 class="text-xl font-black text-cdj-text group-hover:text-rose-400 transition-colors mb-2">
                    ${groupeDeVie[i].nom_groupe}
                </h3>
                <p class="text-xs text-cdj-text text-cdj-text group-hover:text-rose-400 font-bold uppercase tracking-wider">
                    « ${groupeDeVie[i].devise} »
                </p>
                <p class="text-xs text-cdj-muted leading-relaxed mb-4">
                    ${groupeDeVie[i].description}
                </p>
            </div>

            <div class="pt-4 border-t border-cdj-border/60 flex items-center justify-between">
                <div class="flex flex-col items-start">
                    <span class="flex gap-2 text-xs text-cdj-muted font-semibold">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> 
                            <path d="M0 0h24v24H0z" fill="none" /> 
                            <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /> 
                        </svg>
                        ${groupeDeVie[i].jour_reunion}
                    </span>
                    <span class="flex justify-center items-center content-center gap-2 text-xs font-bold text-cdj-text">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" />
                        </svg>
                        ${groupeDeVie[i].lieu_de_rencontre}
                    </span>
                </div>
                <a href="${groupeDeVie[i].lien_page}" class="p-2 rounded-xl bg-cdj-bg text-cdj-text group-hover:bg-rose-500 group-hover:text-white transition-all">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
            </div>
        </div>`
        }

        //sixième carte
        else if(i === 5){
            groupe += `
            <div id="carte-groupe-apa" class="md:col-span-2 bg-cdj-card border border-cdj-border rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group">
            <div class="space-y-2 max-w-lg">
                <div class="inline-flex items-center uppercase gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-bold text-xs">
                ${groupeDeVie[i].categorie}
                </div>
                <h3 class="text-2xl font-black text-cdj-text group-hover:text-blue-500 transition-colors">
                ${groupeDeVie[i].nom_groupe} (${groupeDeVie[i].sigle})
                </h3>
                <p class="text-xs text-cdj-muted leading-relaxed">
                ${groupeDeVie[i].description}
                </p>
            </div>

            <div class="flex flex-col shrink-0 flex flex-col sm:items-end gap-3 w-full sm:w-auto">
                <div class="flex flex-col items-start">
                    <span class="flex gap-1 text-xs text-cdj-muted font-semibold">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> 
                            <path d="M0 0h24v24H0z" fill="none" /> 
                            <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /> 
                        </svg>
                        ${groupeDeVie[i].jour_reunion}
                    </span>
                    <span class="flex justify-center items-center content-center gap-2 text-xs font-bold text-cdj-text">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" />
                        </svg>
                        ${groupeDeVie[i].lieu_de_rencontre}
                    </span>
                </div>
                <div>
                    <a href="${groupeDeVie[i].lien_page}" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-md">
                        <span>Rejoindre</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                </div>
            </div>
        </div>
            `
        }

        //septième et la suite
        else{
            groupe += `
            <div id="carte-groupe-ecm" class="bg-cdj-card border border-cdj-border rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group">
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <span class="px-3 py-1 uppercase rounded-full bg-amber-400/10 text-amber-500 font-bold text-xs">
                        ${groupeDeVie[i].categorie}
                        </span>
                        <div class="w-12 h-12 overflow-hidden rounded-full bg-amber-400/10 text-amber-500 font-bold flex items-center justify-center font-black text-xl shrink-0">
                            ${groupeDeVie[i].logo ? `<img class="w-full h-full object-cover" src=${groupeDeVie[i].logo} alt="logo de ${groupeDeVie[i].sigle}">`: groupeDeVie[i].sigle}
                        </div>
                    </div>
                    <h3 class="text-xl font-black text-cdj-text group-hover:text-amber-500 transition-colors mb-2">
                    ${groupeDeVie[i].nom_groupe} (${groupeDeVie[i].sigle})
                    </h3>
                    <p class="text-xs text-cdj-muted leading-relaxed mb-4">
                    ${groupeDeVie[i].description}
                    </p>
                </div>

                <div class="pt-4 border-t border-cdj-border/60 flex items-center justify-between">
                    <div class="flex flex-col items-start">
                    <span class="flex gap-2 text-xs text-cdj-muted font-semibold">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> 
                            <path d="M0 0h24v24H0z" fill="none" /> 
                            <path fill="currentColor" d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7z" /> 
                        </svg>
                        ${groupeDeVie[i].jour_reunion}
                    </span>
                    <span class="flex justify-center items-center content-center gap-2 text-xs font-bold text-cdj-text">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" />
                        </svg>
                        ${groupeDeVie[i].lieu_de_rencontre}
                    </span>
                    </div>
                    <a href="${groupeDeVie[i].lien_page}" class="p-2 rounded-xl bg-cdj-bg text-cdj-text group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </a>
                </div>
            </div>`
        
    
        }
    }
    divParent.innerHTML = ""
    divParent.innerHTML=groupe
}

export function btnFiltreEvenement() {

    const filtreAgenda = document.getElementById("filtres-agenda");

    filtreAgenda.addEventListener("click", (event) => {

        const btnClique = event.target.closest("button");

        // Si le clic ne vient pas d'un bouton
        if (!btnClique) return;

        const btn = filtreAgenda.querySelectorAll("button");

        // Remettre tous les boutons à leur état normal
        btn.forEach((bouton) => {

            bouton.classList.remove(
                "bg-cdj-primary",
                "text-white",
                "shadow-sm"
            );

            bouton.classList.add(
                "text-cdj-muted",
                "hover:text-cdj-text"
            );
        });

        // Activer le bouton cliqué
        btnClique.classList.remove(
            "text-cdj-muted",
            "hover:text-cdj-text"
        );

        btnClique.classList.add(
            "bg-cdj-primary",
            "text-white",
            "shadow-sm"
        );
    });
}
export function afficherEvenement(){
    const lesEvenements = JSON.parse(localStorage.getItem("evenements"))
    const container_evenement = document.getElementById("conteneur-evenements")
    container_evenement.innerHTML=""

    const couleurUn = "bg-cdj-primary"
    const couleurDeux = "bg-cdj-secondary"
    const couleurTexteUn = "text-cdj-primary"
    const couleurTexteDeux = "text-cdj-secondary"
    const group_HoverUn = "group-hover:text-cdj-primary"
    const group_HoverDeux = "group-hover:text-cdj-secondary"
    
    let evenement = ""
    
    for(let i = 0; i < lesEvenements.length; i++){
        let couleurUtilisee = ""
        let couleurTexte = ""
        let groupe_hover = ""
        if(i % 2 === 1){
        couleurUtilisee = couleurDeux
        couleurTexte = couleurTexteDeux
        groupe_hover = group_HoverDeux
        }
        else{
        couleurUtilisee = couleurUn
        couleurTexte = couleurTexteUn
        groupe_hover = group_HoverUn
        }
        const date = lesEvenements[i].date_evenement
        const partieDate = date.split("-")
        const annee = partieDate[0]
        const mois = nomMois[Number(partieDate[1]) - 1]
        const jour = partieDate[2]


        evenement += `
                <article 
                id="carte-evenement" 
                data-categorie="cdj" 
                class="carte-evenement lg:col-span-2  border-2 border-cdj-primary/40 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
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
                                <span class="px-2.5 py-0.5 rounded-full bg-cdj-primary/20 ${couleurTexte} dark:text-sky-300 font-bold text-[11px] uppercase">
                                Événement : ${lesEvenements[i].groupe_responsable}
                                </span>
                                <span class="text-xs text-cdj-muted font-semibold flex items-center gap-1">
                                ${svgIconeLieu} ${lesEvenements[i].lieu}
                                </span>
                            </div>

                            <h3 class="text-xl sm:text-2xl font-black text-cdj-text ${groupe_hover} transition-colors mb-2">
                                ${lesEvenements[i].nom_evenement}
                            </h3>

                            <p class="text-xs sm:text-sm text-cdj-muted leading-relaxed line-clamp-2 sm:line-clamp-none">
                                ${lesEvenements[i].description_evenement}
                            </p>
                            </div>

                            <!-- Informations secondaires et Action -->
                            <div class="pt-4 border-t border-cdj-border/60 flex items-center justify-between gap-4">
                            <div class="flex items-center gap-3 text-xs text-cdj-muted font-bold">
                                <span class="flex items-center gap-1">${svgIconeMontre} ${lesEvenements[i].heure_debut} - ${lesEvenements[i].heure_fin} </span>
                            </div>

                            <button class="btnEvenement inline-flex items-center gap-2 px-4 py-2 rounded-xl ${couleurUtilisee} text-white text-xs font-bold hover:bg-opacity-90 transition-all shadow-md">
                                <span class="spanEvenementVoirPlus" data-i18n="agenda.bouton_voirPlus"></span>
                                <span class="spanEvenementVoirMoins hidden" data-i18n="agenda.bouton_voirMoins"></span>
                            </button>
                            </div>
                        </div>
                    </div>
                    <!-- DIV DÉTAILS DÉROULANTE (Cachée par défaut) -->
                    <div class="details-evenement hidden mt-6 pt-6 border-t border-sky-400/20 space-y-4 animate-fadeIn">
                        
                        <!-- Grille des informations clés (Public, Frais, Orateur) -->
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        
                        <!-- Public Autorisé -->
                        <div class="p-3 rounded-2xl bg-sky-500/5 border border-sky-400/20">
                            <div class="flex items-center gap-2 text-[10px] uppercase font-black text-sky-500 block mb-1">
                                <span>${svgUsers}</span>
                                <p>Public Autorisé</p>
                            </div>
                            <span class="font-bold text-cdj-text">${lesEvenements[i].droit_entree}</span>
                        </div>

                        <!-- Frais / Droit d'entrée -->
                        <div class="p-3 rounded-2xl bg-sky-500/5 border border-sky-400/20">
                            <span class="flex items-center gap-2 text-[10px] uppercase font-black text-sky-500 block mb-1">
                                <span>${svgMonnaie}</span> <p>Droit d'entrée</p>
                            </span>
                            <span class="font-bold text-cdj-text">${lesEvenements[i].frais}</span>
                        </div>

                        <!-- Orateur / Intervenant -->
                        <div class="p-3 rounded-2xl bg-sky-500/5 border border-sky-400/20">
                            <span class="text-[10px] uppercase font-black text-sky-500 block mb-1">🎙️ Orateur / Intervenants</span>
                            <span class="font-bold text-cdj-text">${lesEvenements[i].orateur}</span>
                        </div>

                        </div>

                        <!-- Longue Description de l'Événement -->
                        <div class="p-4 rounded-2xl bg-sky-500/5 border border-sky-400/20 text-xs text-cdj-muted space-y-2 leading-relaxed">
                        <h4 class="font-black text-cdj-text uppercase text-[11px] text-sky-500">📜 Description Détaillée & Programme :</h4>
                        <p>
                            ${lesEvenements[i].apropos_evenement}
                        </p>
                        </div>

                    </div>
                </div>
            </article>`
    }
    container_evenement.innerHTML=evenement


    container_evenement.addEventListener("click", (event)=>{
        const bouton = event.target.closest(".btnEvenement");
        if(!bouton) return;
        const blocEvenement = bouton.closest(".blocEvenement")
        const blocCache = blocEvenement.querySelector(".details-evenement")  
        const spanVoirPlus = blocEvenement.querySelector(".spanEvenementVoirPlus")
        const spanVoirMoins = blocEvenement.querySelector(".spanEvenementVoirMoins")
        blocCache.classList.toggle("hidden")
        spanVoirPlus.classList.toggle("hidden")
        spanVoirMoins.classList.toggle("hidden")

    })
}

export function afficherCommunique(){
    const communiqueOfficielCdj = JSON.parse(localStorage.getItem("communiqueOfficielCDJ")) 
    const grille_actualite_officiel = document.getElementById("premiereCommunique")
    const grille_actualité_secondaire=document.getElementById("grille_actualité_secondaire")
    let communiqueCDJ = ""
    let communiqueCDJsecondaire =""
    for(let i = 0; i < communiqueOfficielCdj.length; i++){
        if(i === 0){
        communiqueCDJ +=`
                    <!-- Décoration en filigrane -->
                    <div class="absolute -right-16 -top-16 w-64 h-64 bg-cdj-primary/20 rounded-full blur-3xl pointer-events-none"></div>

                    <div>
                        <!-- En-tête de la carte : Badge et date -->
                        <div class="flex items-center justify-between gap-4 mb-6 flex-wrap z-10 relative">
                        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-black uppercase tracking-wider">
                            <span data-i18n="actualites.badge_urgent">${communiqueOfficielCdj[i].categorie}</span>
                        </span>
                        <span class="text-xs text-slate-400 font-medium">${communiqueOfficielCdj[i].date} • Ref: N° ${communiqueOfficielCdj[i].numero_ref}</span>
                        </div>

                        <!-- Titre & Extrait -->
                        <div class="space-y-4 z-10 relative mb-6">
                        <h3 class="text-2xl sm:text-3xl font-black text-white group-hover:text-sky-300 transition-colors leading-snug">
                            ${communiqueOfficielCdj[i].titre}
                        </h3>
                        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 sm:line-clamp-none">
                            ${communiqueOfficielCdj[i].description}
                        </p>
                        </div>
                    </div>

                    <!-- Pied de carte : Auteur & Action -->
                    <div class="pt-6 border-t border-slate-800 flex items-center justify-between gap-4 z-10 relative mt-auto">
                        <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-sm font-bold text-sky-300">
                            BC
                        </div>
                        <div>
                            <p class="text-xs font-bold text-white">${communiqueOfficielCdj[i].auteur}</p>
                            <p class="text-[11px] text-slate-400">${communiqueOfficielCdj[i].qualite}</p>
                        </div>
                        </div>

                        <a 
                        id="bouton-lire-communique" 
                        href="actualite-detail.html?id=communique-004" 
                        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-lg">
                        <span data-i18n="actualites.bouton_lire">Lire la suite</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </a>
                    </div>
                    `
        }
        if(i === 1 || i === 2){
            communiqueCDJsecondaire += `
                <article 
                    id="carte-actualite-1" 
                    class="bg-cdj-card border border-cdj-border rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:border-cdj-primary/40 transition-all duration-300 flex-1 flex flex-col justify-between group">
                    <div>
                    <div class="flex items-center justify-between gap-2 mb-3">
                        <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold text-[11px] uppercase">
                            ${communiqueOfficielCdj[i].categorie}
                        </span>
                        <span class="text-[11px] text-cdj-muted">${communiqueOfficielCdj[i].date}</span>
                    </div>

                    <h4 class="text-base font-black text-cdj-text group-hover:text-cdj-primary transition-colors mb-2 leading-snug">
                        ${communiqueOfficielCdj[i].titre}
                    </h4>

                    <p class="text-xs text-cdj-muted leading-relaxed line-clamp-2">
                    ${communiqueOfficielCdj[i].description}
                    </p>
                    </div>

                    <div class="pt-4 mt-4 border-t border-cdj-border/60 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-cdj-muted">${communiqueOfficielCdj[i].time} de lecture</span>
                    <a href="actualite-detail.html?id=salubrite-2026" class="text-xs font-bold text-cdj-primary dark:text-sky-400 hover:underline">
                        Lire →
                    </a>
                    </div>
                </article>`
        }
        
    }
    grille_actualite_officiel.innerHTML=communiqueCDJ
    grille_actualité_secondaire.innerHTML=communiqueCDJsecondaire

}

//function qui gère l'affichage des icone sur les diferrente page
export function affichageIcone(){
    const svgTelephone = document.querySelectorAll(".svgPhone")
    svgTelephone.forEach(svg => {svg.innerHTML=svgPhone})
    const svgHeure = document.querySelectorAll(".svgHeure")
    svgHeure.forEach(svg => {svg.innerHTML=svgIconeMontre})
    const iconeLieu = document.querySelectorAll(".iconeLieu")
    iconeLieu.forEach(svg => {svg.innerHTML=svgIconeLieu});
    const iconeMaison = document.querySelectorAll(".iconeMaison")
    iconeMaison.forEach(svg => {svg.innerHTML=svgHouse})
}
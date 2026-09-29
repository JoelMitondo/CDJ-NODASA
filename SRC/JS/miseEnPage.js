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

const svgCadenas = `
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                <path d="M0 0h48v48H0z" fill="none" />
                <path fill="currentColor" fill-rule="evenodd" d="M26.959 1.5a12.5 12.5 0 0 1 12.456 11.462l.404 4.847l.185.01c3.202.17 5.86 2.509 6.16 5.807c.182 2.02.336 4.784.336 8.374s-.154 6.353-.337 8.374c-.3 3.298-2.957 5.636-6.16 5.808c-1.341.071-3.015.143-5.045.2c.348-.72.542-1.528.542-2.382v-5a5.5 5.5 0 0 0-5.5-5.5H17.352A9.99 9.99 0 0 0 9 29a10 10 0 0 0-3.477.62c.05-2.46.173-4.445.314-5.994c.3-3.298 2.956-5.637 6.159-5.808l.185-.01l.404-4.846A12.5 12.5 0 0 1 25.042 1.5zm-5.96 16.034q2.285-.033 5-.034q2.718.001 5.002.034l-.206-3.513a4.803 4.803 0 0 0-9.59 0zM9 46a7 7 0 1 1 6.54-9.5H30a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-5 0v-2.5H25V44a2.5 2.5 0 0 1-5 0v-2.5h-4.46A7 7 0 0 1 9 46m-2.5-7A1.5 1.5 0 0 0 8 40.5h2a1.5 1.5 0 0 0 0-3H8A1.5 1.5 0 0 0 6.5 39" clip-rule="evenodd" />
            </svg>`;
const svgEpingler = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
        <path d="M0 0h16v16H0z" fill="none" />
        <path fill="currentColor" d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588c-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828l-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182l-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
    </svg>`;
const svgWarning =`
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
	<path d="M0 0h1024v1024H0z" fill="none" />
	<path fill="currentColor" d="m955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48M480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8zm32 352a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96" />
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
    iconeMaison.forEach(svg => {svg.innerHTML=svgHouse});
}

export function initModalEspaceEngage() {
  const btnOuvrir = document.getElementById("btn-ouvrir-espace-engage");
  const modal = document.getElementById("modal-espace-engage");
  const btnAnnuler = document.getElementById("btn-annuler-modal");
  const btnFermerX = document.getElementById("btn-fermer-x-modal");

  if (!btnOuvrir || !modal) return;

  const modalBox = modal.querySelector(".id-modal-box");

  // Fonction d'ouverture du popup
  function ouvrirModal() {
    modal.classList.remove("pointer-events-none", "opacity-0");
    modal.classList.add("opacity-100");

    if (modalBox) {
      modalBox.classList.remove("scale-95");
      modalBox.classList.add("scale-100");
    }
    
    document.body.style.overflow = "hidden"; // Empêche le défilement de fond
  }

  // Fonction de fermeture du popup
  function fermerModal() {
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0", "pointer-events-none");

    if (modalBox) {
      modalBox.classList.remove("scale-100");
      modalBox.classList.add("scale-95");
    }

    document.body.style.overflow = ""; // Rétablit le défilement
  }

  // Écouteurs d'événements
  btnOuvrir.addEventListener("click", (e) => {
    e.preventDefault();
    ouvrirModal();
  });

  if (btnAnnuler) btnAnnuler.addEventListener("click", fermerModal);
  if (btnFermerX) btnFermerX.addEventListener("click", fermerModal);

  // Fermeture au clic sur l'arrière-plan
  modal.addEventListener("click", (e) => {
    if (e.target === modal) fermerModal();
  });

  // Fermeture via la touche Échap (ESC)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("opacity-0")) {
      fermerModal();
    }
  });

 const svgWarningId=document.getElementById("svgWarning")
 const svgCadenaId=document.querySelector(".svgCadena");
 const svgEpinglerId=document.getElementById("svgEpingler")
 svgWarningId.innerHTML=svgWarning;
 svgCadenaId.innerHTML=svgCadenas;
 svgEpinglerId.innerHTML=svgEpingler;
}


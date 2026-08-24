    <!-- SECTION : AGENDA & PROCHAINS ÉVÉNEMENTS -->
    <section id="section-agenda" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-cdj-border/40">
    
        <!-- EN-TÊTE DE SECTION -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div class="space-y-3 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cdj-primary/10 text-cdj-primary dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
                <span data-i18n="agenda.badge">Rassemblements & Activités</span>
            </div>
            <h2 class="text-3xl sm:text-5xl font-black text-cdj-text tracking-tight" data-i18n="agenda.titre_section">
                Prochains Événements
            </h2>
            <p class="text-sm sm:text-base text-cdj-muted" data-i18n="agenda.description_section">
                Ne manquez aucun rassemblement, messe des jeunes, formation ou activité organisée à la paroisse.
            </p>
            </div>

            <!-- BOUTONS DE FILTRAGE PAR CATEGORIE -->
            <div id="filtres-agenda" class="flex items-center gap-2 bg-cdj-bg p-1.5 rounded-2xl border border-cdj-border self-start md:self-auto overflow-x-auto max-w-full">
                <button 
                    id="bouton-filtre-tous" 
                    class="px-4 py-2 rounded-xl text-xs font-bold transition-all bg-cdj-primary text-white shadow-sm shrink-0" 
                    data-i18n="agenda.filtre_tous">
                    Tous
                </button>
                <button 
                    id="bouton-filtre-cdj" 
                    class="px-4 py-2 rounded-xl text-xs font-bold text-cdj-muted hover:text-cdj-text transition-all shrink-0" 
                    data-i18n="agenda.filtre_cdj">
                    Bureau CDJ
                </button>
                <button 
                    id="bouton-filtre-groupes"
                    class="px-4 py-2 rounded-xl text-xs font-bold text-cdj-muted hover:text-cdj-text transition-all shrink-0" 
                    data-i18n="agenda.filtre_groupes">
                    Groupes de Vie
                </button>
            </div>
        </div>

        <!-- GRILLE DES ÉVÉNEMENTS -->
        <div id="conteneur-evenements" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <!--GERER AU NIVEAU DE JS (miseEnPage.js)-->
        </div>
    </section>



    son js


    function afficherEvenement(){
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
    
    for(let i = 0; i < 6; i++){
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
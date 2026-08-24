    <!-- SECTION : DERNIÈRES ACTUALITÉS & COMMUNIQUÉS -->
    <section id="section-actualites" class="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-cdj-border/40">
    
    <!-- EN-TÊTE DE SECTION -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div class="space-y-3 max-w-2xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
            <span data-i18n="actualites.badge">Annonces & Publications</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-black text-cdj-text tracking-tight" data-i18n="actualites.titre_section">
            Dernières Actualités & Communiqués
        </h2>
        <p class="text-sm sm:text-base text-cdj-muted" data-i18n="actualites.description_section">
            Restez informés des notes officielles du Bureau CDJ, des projets en cours et de la vie de notre communauté.
        </p>
        </div>

        <!-- LIEN VERS TOUTES LES ACTUALITÉS -->
        <a 
        id="lien-voir-toutes-actualites" 
        href="actualites.html" 
        class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cdj-primary dark:text-sky-400 hover:underline shrink-0 self-start md:self-auto">
        <span data-i18n="actualites.bouton_tous">Voir toutes les publications</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
    </div>

    <!-- GRILLE : COMMUNIQUÉ ÉPINGLÉ & ACTUALITÉS RÉCENTES -->
    <div id="grille-actualites" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        <!-- 1. COMMUNIQUÉ OFFICIEL ÉPINGLÉ -->
        <article id="premiereCommunique" class="lg:col-span-8 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-500/30 flex flex-col justify-between relative overflow-hidden group">

        </article>

        <!-- 2. ACTUALITÉS SECONDAIRES -->
        <div id="grille_actualité_secondaire" class="lg:col-span-4 flex flex-col gap-6 justify-between">
            <!--LES COMMUNIQUE SONT GEREES PAR JS-->

        </div>

    </div>

    </section>


    le js
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
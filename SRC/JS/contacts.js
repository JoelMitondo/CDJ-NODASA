// Base de données simulée des encadreurs (CDJ et Groupes de Vie)
const listeEncadreurs = [
  // Bureau CDJ
  { id: 1, nom: "Mitondo", prenom: "Joël", poste: "Président", groupe: "CDJ", contact: "+243820000111", email: "joel@cdj.org", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
  { id: 2, nom: "Ilunga", prenom: "Sarah", poste: "Vice-Présidente", groupe: "CDJ", contact: "+243810000222", email: "sarah@cdj.org", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200" },
  { id: 3, nom: "Mbayo", prenom: "Marc", poste: "Secrétaire Général", groupe: "CDJ", contact: "+243990000333", email: "marc@cdj.org", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { id: 4, nom: "Kabedi", prenom: "Clarisse", poste: "Trésorière", groupe: "CDJ", contact: "+243850000444", email: "clarisse@cdj.org", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },
  { id: 5, nom: "Mukeba", prenom: "Alain", poste: "Chargé de Com", groupe: "CDJ", contact: "+243840000555", email: "alain@cdj.org", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },

  // Kizito-Anuarite (K.A)
  { id: 6, nom: "Kabuya", prenom: "David", poste: "Président", groupe: "K.A", contact: "+243821111000", email: "david@ka.org", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
  { id: 7, nom: "Mbuyi", prenom: "Rachel", poste: "Vice-Présidente", groupe: "K.A", contact: "+243812222000", email: "rachel@ka.org", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
  { id: 8, nom: "Tshimanga", prenom: "Patrick", poste: "Secrétaire", groupe: "K.A", contact: "+243993333000", email: "patrick@ka.org", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { id: 9, nom: "Nzuzi", prenom: "Grace", poste: "Encadreur Technique", groupe: "K.A", contact: "+243854444000", email: "grace@ka.org", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },

  // Bilenge Ya Maria (B.J.M)
  { id: 10, nom: "Kanza", prenom: "Emmanuel", poste: "Président", groupe: "B.J.M", contact: "+243825555000", email: "emmanuel@bjm.org", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { id: 11, nom: "Bokelo", prenom: "Ruth", poste: "Vice-Présidente", groupe: "B.J.M", contact: "+243816666000", email: "ruth@bjm.org", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200" },
  { id: 12, nom: "Moussa", prenom: "Christian", poste: "Secrétaire", groupe: "B.J.M", contact: "+243997777000", email: "christian@bjm.org", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
  { id: 13, nom: "Luzolo", prenom: "Naomie", poste: "Chargée de Discipline", groupe: "B.J.M", contact: "+243858888000", email: "naomie@bjm.org", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },

  // Scouts
  { id: 14, nom: "Bondo", prenom: "Franck", poste: "Président (Chef de Troupe)", groupe: "Scouts", contact: "+243829999000", email: "franck@scouts.org", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { id: 15, nom: "Kibala", prenom: "Arnaud", poste: "Vice-Président", groupe: "Scouts", contact: "+243810000111", email: "arnaud@scouts.org", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
  { id: 16, nom: "Mpemba", prenom: "Dorcas", poste: "Secrétaire", groupe: "Scouts", contact: "+243991111222", email: "dorcas@scouts.org", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" }
];

// Mots-clés désignant le Présidium (Postes restreints par défaut)
const postesPresidium = ["président", "présidente", "vice-président", "vice-présidente", "secrétaire", "secrétaire général", "secrétaire générale"];

// État des filtres
let filtresContacts = {
  recherche: "",
  groupe: "tous",
  tri: "groupe",
  statut: "presidium"
};

function initPageContact() {
  attacherEcouteursFiltres();
  afficherContacts();
}
initPageContact()
function afficherContacts() {
  const conteneur = document.getElementById("conteneur-contacts");
  const messageAucun = document.getElementById("message-aucun-contact");
  const badgeInfo = document.getElementById("badge-mode-affichage");

  if (!conteneur) return;
  conteneur.innerHTML = "";

  let resultats = [...listeEncadreurs];

  // Vérifier si une recherche ou un filtre actif désactive le mode par défaut
  const aFiltreActif = 
    filtresContacts.recherche.trim() !== "" || 
    filtresContacts.groupe !== "tous" || 
    filtresContacts.tri !== "groupe" || 
    filtresContacts.statut === "tous";

  // Mettre à jour le badge d'information
  if (badgeInfo) {
    badgeInfo.textContent = aFiltreActif 
      ? "🔍 Filtre actif : Tous les contacts correspondants sont affichés."
      : "ℹ️ Affichage par défaut : Seuls les contacts du Présidium (Président, Vice-Président, Secrétaire) sont visibles.";
  }

  // 1. Filtrage par Statut / Postes restreints
  if (!aFiltreActif || filtresContacts.statut === "presidium") {
    resultats = resultats.filter(m => 
      postesPresidium.some(p => m.poste.toLowerCase().includes(p))
    );
  }

  // 2. Filtrage par Groupe
  if (filtresContacts.groupe !== "tous") {
    resultats = resultats.filter(m => m.groupe === filtresContacts.groupe);
  }

  // 3. Filtrage par Recherche textuelle
  if (filtresContacts.recherche.trim() !== "") {
    const q = filtresContacts.recherche.toLowerCase();
    resultats = resultats.filter(m => 
      m.nom.toLowerCase().includes(q) ||
      m.prenom.toLowerCase().includes(q) ||
      m.poste.toLowerCase().includes(q) ||
      m.groupe.toLowerCase().includes(q) ||
      m.contact.includes(q)
    );
  }

  if (resultats.length === 0) {
    if (messageAucun) messageAucun.classList.remove("hidden");
    return;
  } else {
    if (messageAucun) messageAucun.classList.add("hidden");
  }

  // 4. Tri et Rendu HTML
  if (filtresContacts.tri === "az") {
    resultats.sort((a, b) => a.nom.localeCompare(b.nom));
    conteneur.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">${resultats.map(creerCarteContact).join('')}</div>`;
  } else if (filtresContacts.tri === "za") {
    resultats.sort((a, b) => b.nom.localeCompare(a.nom));
    conteneur.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">${resultats.map(creerCarteContact).join('')}</div>`;
  } else {
    // Mode Groupé par Structure (Par Défaut)
    const groupesMap = resultats.reduce((acc, contact) => {
      acc[contact.groupe] = acc[contact.groupe] || [];
      acc[contact.groupe].push(contact);
      return acc;
    }, {});

    let htmlGroupes = "";
    for (const [nomGroupe, membres] of Object.entries(groupesMap)) {
      htmlGroupes += `
        <div class="space-y-4">
          <div class="flex items-center gap-3 border-b border-cdj-border pb-2">
            <span class="p-1.5 rounded-lg bg-sky-500/10 text-sky-500 font-bold text-sm">🌱</span>
            <h2 class="text-xl font-black text-cdj-text tracking-tight">${nomGroupe}</h2>
            <span class="px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-500 text-[10px] font-bold">${membres.length} contact(s)</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${membres.map(creerCarteContact).join('')}
          </div>
        </div>
      `;
    }
    conteneur.innerHTML = htmlGroupes;
  }
}

// Générateur de composant Carte Contact
function creerCarteContact(c) {
  const estPresidium = postesPresidium.some(p => c.poste.toLowerCase().includes(p));

  return `
    <article class="bg-cdj-card border border-cdj-border rounded-3xl p-5 shadow-xl transition-all duration-300 hover:border-sky-400/50 flex flex-col justify-between group">
      <div class="flex items-start gap-4">
        <img 
          src="${c.photo}" 
          alt="${c.prenom} ${c.nom}" 
          class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover bg-sky-500/10 border border-sky-400/30 shrink-0 transition-transform duration-300 group-hover:scale-105"
        />
        <div class="space-y-1 min-w-0 flex-1">
          <span class="inline-block px-2.5 py-0.5 rounded-full ${estPresidium ? 'bg-sky-500/15 text-sky-500 border border-sky-400/20' : 'bg-cdj-bg text-cdj-muted'} font-bold text-[10px] uppercase truncate">
            ${c.poste}
          </span>
          <h3 class="font-black text-cdj-text text-base truncate">
            ${c.prenom} ${c.nom}
          </h3>
          <p class="text-cdj-muted font-bold text-xs truncate">
            ${c.groupe}
          </p>
        </div>
      </div>

      <!-- Liens de contact rapide -->
      <div class="mt-4 pt-3 border-t border-cdj-border/60 flex items-center justify-between text-xs gap-2">
        <a href="tel:${c.contact}" class="inline-flex items-center gap-1 text-sky-500 hover:underline font-bold text-xs">
          📞 ${c.contact}
        </a>
        <a href="https://wa.me/${c.contact.replace(/[^0-9]/g, '')}" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 rounded-xl bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 font-bold text-[11px] border border-emerald-500/20 transition-all">
          WhatsApp
        </a>
      </div>
    </article>
  `;
}

// Écouteurs sur les éléments de contrôle
function attacherEcouteursFiltres() {
  const inputRecherche = document.getElementById("recherche-contact");
  const selectGroupe = document.getElementById("filtre-groupe");
  const selectTri = document.getElementById("tri-alphabetique");
  const selectStatut = document.getElementById("filtre-statut");

  if (inputRecherche) {
    inputRecherche.addEventListener("input", (e) => {
      filtresContacts.recherche = e.target.value;
      afficherContacts();
    });
  }

  if (selectGroupe) {
    selectGroupe.addEventListener("change", (e) => {
      filtresContacts.groupe = e.target.value;
      afficherContacts();
    });
  }

  if (selectTri) {
    selectTri.addEventListener("change", (e) => {
      filtresContacts.tri = e.target.value;
      afficherContacts();
    });
  }

  if (selectStatut) {
    selectStatut.addEventListener("change", (e) => {
      filtresContacts.statut = e.target.value;
      afficherContacts();
    });
  }
}
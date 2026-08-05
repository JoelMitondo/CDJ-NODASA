const informationCommission = {
  "nom_commission": "Commission des Jeunes Notre-Dame de la Sagesse",
  "sigle": "CDJ NODASA",
  "slogans": [
    "Une jeunesse unie dans la foi et l'action",
    "Savoir, Foi et Service au cœur du Campus"
  ],
  "verset_accroche": "Que personne ne méprise ta jeunesse ; mais sois un modèle pour les fidèles, en parole, en conduite, en charité, en foi, en pureté.",
  "reference_biblique": "1 Timothée 4:12",
  "adresse_gmail": "cdj.nodasa.unikin@gmail.com",
  "lien_youtube": "https://www.youtube.com/@cdjnodasa",
  "membres_bureau": [
    {
      "id": "president",
      "poste": "Président",
      "nom": "Gratien MBEY",
      "telephone": "+243 825 042 011"
    },
    {
      "id": "vice-president",
      "poste": "Vice-Président",
      "nom": "Amos",
      "telephone": "+243 813 220 969"
    },
    {
      "id": "secretaire",
      "poste": "Secrétaire Général",
      "nom": "Rosario KASSONGO",
      "telephone": "+243 816 678 703"
    },
    {
      "id": "vice-secretaire",
      "poste": "Vice-Secrétaire",
      "nom": "Amerack MAVINGA",
      "telephone": "+243 823 261 477"
    },
    {
      "id": "tresorier",
      "poste": "Trésorier",
      "nom": "Christian Lukusa",
      "telephone": "+243 900 000 555"
    },
    {
      "id": "tresorier-adjoint",
      "poste": "Trésorier Adjoint",
      "nom": "Sarah Kanyinda",
      "telephone": "+243 840 000 666"
    }
  ]
}
localStorage.setItem("infoCommis", JSON.stringify(informationCommission))

const tousGroupeDeVie = [
  {
    "id": "ka",
    "nom_groupe": "Kizito - Anuarite",
    "sigle": "K.A",
    "devise": "Servir et Faire Servir",
    "categorie": "Encadrement & Éducation Spirituelle",
    "lien_logo": "https://votre-domaine.org/assets/logos/kizito-anuarite.png",
    "description": "Mouvement d'encadrement des enfants et adolescents pour leur éducation chrétienne, humaine et civique, inspiré par la vie des saints martyrs.",
    "jour_reunion": "Dimanche de 10h00 à 13h00",
    "lien_page" : "./SRC/html/Groupes_vies/ka.html"
  },
  {
    "id": "scout",
    "nom_groupe": "Scouts NODASA",
    "sigle": "Scouts",
    "devise": "Toujours Prêt",
    "categorie": "Mouvement Éducatif & Civique",
    "lien_logo": "https://votre-domaine.org/assets/logos/scouts.png",
    "description": "Mouvement éducatif visant à former des citoyens responsables, débrouillards et utiles à la communauté grâce à la vie en plein air.",
    "jour_reunion": "Dimanche de 09h30 à 13h00",
    "lien_page" : "./SRC/html/Groupes_vies/scouts.html"
  },
  {
    "id": "bym",
    "nom_groupe": "Bilenge Ya Mwinda",
    "sigle": "B.Y.M",
    "devise": "Lumière du monde, Sel de la terre",
    "categorie": "Formation & Épanouissement de la Jeunesse",
    "lien_logo": "https://votre-domaine.org/assets/logos/bjm.png",
    "description": "Mouvement favorisant l'épanouissement intégral des jeunes à travers la parole de Dieu, l'auto-prise en charge et la maturité humaine.",
    "jour_reunion": "Dimanche de 11h30 à 13h00",
    "lien_page" : "./SRC/html/Groupes_vies/bym.html"
  },
  {
    "id": "jefac",
    "nom_groupe": "Jeunesse de la Famille Chrétienne",
    "sigle": "JEFAC",
    "devise": "Amour, Union et Sainteté",
    "categorie": "Spiritualité & Valeurs Familiales",
    "lien_logo": "https://votre-domaine.org/assets/logos/jefac.png",
    "description": "Groupe centré sur la promotion des valeurs familiales chrétiennes, la préparation à la vie adulte et le témoignage de chasteté.",
    "jour_reunion": "Dimanche de 12h00 à 13h30",
    "lien_page" : "./SRC/html/Groupes_vies/jefac.html"
  },
  {
    "id": "mijercha",
    "nom_groupe": "Mission des Jeunes du Renouveau Charismatique",
    "sigle": "MIJERCHA",
    "devise": "Remplis de l'Esprit Saint",
    "categorie": "Renouveau Spirituel & Charismatique",
    "lien_logo": "https://votre-domaine.org/assets/logos/mijerda.png",
    "description": "Mouvement d'intercession, d'évangélisation et de prière basé sur les charismes du Saint-Esprit et la vie communautaire.",
    "jour_reunion": "Jeudi de 16h30 à 18h00",
    "lien_page" : "./SRC/html/Groupes_vies/mijerca.html"
  },
  {
    "id": "apa",
    "nom_groupe": "Armée des Petits Anges",
    "sigle": "A.P.A",
    "devise": "Par le Cœur de Jésus, Tout pour Dieu",
    "categorie": "Prière & Intercession",
    "lien_logo": "https://votre-domaine.org/assets/logos/apa.png",
    "description": "Réseau mondial de prière du Pape chez les jeunes, axé sur la dévotion au Sacré-Cœur de Jésus et les intentions de l'Église.",
    "jour_reunion": "Dimanche de 10h00 à 11h30",
    "lien_page" : "./SRC/html/Groupes_vies/apa.html"
  },
  {
    "id": "legio",
    "nom_groupe": "Légion de Marie - Junior",
    "sigle": "LMJ",
    "devise": "Ad Jesum Per Mariam",
    "categorie": "Dévotion Mariale & Apostolat",
    "lien_logo": "https://votre-domaine.org/assets/logos/legion-de-marie.png",
    "description": "Mouvement apostolique dédié à la prière du chapelet, aux visites à domicile, au réconfort des malades et à l'évangélisation.",
    "jour_reunion": "Samedi de 16h00 à 17h30",
    "lien_page" : "./SRC/html/Groupes_vies/legion.html"
  },
  {
    "id": "ecm",
    "nom_groupe": "Ecole Missionnaire",
    "sigle": "E.C.M",
    "devise": "Prie, Communie, Sacrifie-toi, Sois Apôtre",
    "categorie": "Spiritualité Eucharistique",
    "lien_logo": "https://votre-domaine.org/assets/logos/ecm.png",
    "description": "Mouvement axé sur l'amour de l'Eucharistie, l'adoration du Saint-Sacrement et la formation liturgique des jeunes.",
    "jour_reunion": "Dimanche de 11h30 à 13h00",
    "lien_page" : "./SRC/html/Groupes_vies/emc.html"
  }
]
localStorage.setItem("groupeDeVie", JSON.stringify(tousGroupeDeVie))
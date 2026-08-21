const informationCommission = {
  "nom_commission": "Commission des Jeunes Notre-Dame de la Sagesse",
  "sigle": "CDJ NODASA",
  "slogans": [
    "Une jeunesse unie dans la foi et l'action",
    "Savoir, Foi et Service au cœur du Campus"
  ],
  "devise" : "Piété, Foi, Honnêteté, Engagement",
  "logoClair": "/publics/logo_icones/mode clair.png",
  "logoSombre": "/publics/logo_icones/mode sombre.png",
  "role_cdj" : "La CDJ Nodasa, coordonne les formations dispensées par les groupes de vie de la paroisse, pour permettre l’épanouissement de jeunes, elle offre un cadre pour les formations, les retraites, recollections, messe de jeunes, et organise également des activités ludiques, excursions, repas communautaires, Journées foraines etc, et initie également des projets de développement visant la jeunesse.",
  "but_cdj" : "Le but principal de la commission de jeunes Nodasa, c’est de coordonné toutes les activités de jeunes à la paroisse, activité visant l’épanouissement des jeunes, à court terme la commission suit au quotidien la vie de chaque groupe de formation, et fait le pont entre ces groupes et l’équipe pastorale paroissiale. ",
  "verset_accroche": "Que personne ne méprise ta jeunesse ; mais sois un modèle pour les fidèles, en parole, en conduite, en charité, en foi, en pureté.",
  "reference_biblique": "1 Timothée 4:12",
  "adresse_gmail": "cdj.nodasa.unikin@gmail.com",
  "lien_facebook" : "https://www.facebook.com",
  "lien_whatsapp" : "https://www.whatsapp.com",
  "lien_youtube": "https://www.youtube.com/@cdjnodasa",
  "membres_bureau": [
    {
      "id": "president",
      "poste": "Président",
      "nom": "Gratien MBEY",
      "telephone": "+243 825 042 011",
      "groupe_provenance" : "Gr K.A",
      "avatar" : "/publics/logo_icones/mode sombre.png"
    },
    {
      "id": "vice-president",
      "poste": "Vice-Président",
      "nom": "Amos",
      "telephone": "+243 813 220 969",
      "groupe_provenance" : "Gr K.A",
      "avatar" : "/publics/logo_icones/mode sombre.png"
    },
    {
      "id": "secretaire",
      "poste": "Secrétaire Général",
      "nom": "Rosario KASSONGO",
      "telephone": "+243 816 678 703",
      "groupe_provenance" : "Gr K.A",
      "avatar" : "/publics/logo_icones/mode sombre.png"
    },
    {
      "id": "vice-secretaire",
      "poste": "Vice-Secrétaire",
      "nom": "Amerack MAVINGA",
      "telephone": "+243 823 261 477",
      "groupe_provenance" : "Gr K.A",
      "avatar" : "/publics/logo_icones/mode sombre.png"
    },
    {
      "id": "tresorier",
      "poste": "Trésorier",
      "nom": "Christian Lukusa",
      "telephone": "+243 900 000 555",
      "groupe_provenance" : "Gr K.A",
      "avatar" : "/publics/logo_icones/mode sombre.png"
    },
    {
      "id": "tresorier-adjoint",
      "poste": "Trésorier Adjoint",
      "nom": "Sarah Kanyinda",
      "telephone": "+243 840 000 666",
      "groupe_provenance" : "Gr K.A",
      "avatar" : "/publics/logo_icones/mode sombre.png"
    }
  ]
}
localStorage.setItem("infoCommis", JSON.stringify(informationCommission))

const tousGroupeDeVie = [
  {
    "id": "ka",
    "nom_groupe": "Kizito - Anuarite",
    "sigle": "K.A",
    "devise": "Prenons Courage / Aime et Fait Plaisir",
    "categorie": "Encadrement & Éducation Spirituelle",
    "lien_logo": "https://votre-domaine.org/assets/logos/kizito-anuarite.png",
    "description": "Mouvement d'encadrement des enfants et adolescents pour leur éducation chrétienne, humaine et civique, inspiré par la vie des saints martyrs.",
    "jour_reunion": "Dimanche de 10h00 à 13h00",
    "lien_page" : "/SRC/html/Groupes_vies/ka.html",
    "lieu_de_rencontre" : "Paroisse NODASA",
    "logo": "/publics/img/logo_grKa.jpeg", 
    "presentation_generale": "Le groupe Kizito-Anuarite est un mouvement d'action catholique dédié à la formation spirituelle, humaine et civique des enfants et adolescents de la paroisse Notre-Dame de la Sagesse. Il vise à inculquer des valeurs chrétiennes solides dès le plus jeune âge à travers le jeu, la prière et la vie communautaire.",
    "historique": "Fondé dans les années 1980 en République Démocratique du Congo et inspiré par la vie du jeune martyr Saint Kizito et de la Sainte Anuarite Nengapeta, le mouvement s'est implanté au sein de la paroisse NODASA pour répondre au besoin d'un encadrement spirituel adapté à la jeunesse d'âge scolaire.",
    "charisme": "Le charisme du mouvement repose sur la pureté, le témoignage de foi joyeux, le leadership chrétien et le service désintéressé en milieu scolaire et familial.",
    "organisation": "Le groupe est structuré en deux sections (Kizito pour les garçons et Anuarite pour les filles), elles-mêmes divisées en petites équipes appelées « Noyaux » animées par des encadreurs (Yaya/Mbotama). Les réunions se tiennent tous les samedis.",
    "ancrage_paroissial" : "2000",
    "types_formations": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "liste_charisme": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "encadreurs": [
      {
        "nom": "Mukendi",
        "prenom": "Emmanuel",
        "telephone": "+243 820 000 777",
        "role": "Ya Mukasa",
        "poste": "Président de section K.A",
        "lien_photo": "/publics/img/22 (1).jpg"
      },
      {
        "nom": "Kalonji",
        "prenom": "Bénédicte",
        "telephone": "+243 810 000 888",
        "role": "Ya Kasima",
        "poste": "Responsable de la section Anuarite",
        "lien_photo": "/publics/img/22 (2).jpg"
      },
      {
        "nom": "Mbuyi",
        "prenom": "Christian",
        "telephone": "+243 990 000 999",
        "role": "Ya Kaggwa",
        "poste": "Encadreur de la section Kizito",
        "lien_photo": "/publics/img/22 (3).jpg"
      }
    ]
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
    "lien_page" : "./SRC/html/Groupes_vies/scouts.html",
    "lieu_de_rencontre" : "Paroisse NODASA",
    "logo": "./publics/img/logo_scout.png",
    "presentation_generale": "Mouvement éducatif pour les jeunes reposant sur le volontariat, à caractère non politique et ouvert à tous. Le scoutisme paroissial vise le développement physique, mental et spirituel des jeunes pour qu'ils jouent un rôle constructif dans la société.",
    "historique": "Fondé mondialement par Robert Baden-Powell en 1907 et implanté en RDC au début du XXe siècle, le groupe scout de la paroisse éduque la jeunesse à travers la vie active en plein air, le civisme et le respect de la promesse scout.",
    "charisme": "Débrouillardise, fraternité universelle, civisme, respect de la nature et sens poussé du service gratuit envers la communauté.",
    "organisation": "Organisé en patrouilles regroupées au sein d'une Troupe (éclaireurs) ou d'une Meute (louveteaux). Les activités sont encadrées par des chefs de troupe et assistants formés aux pédagogies scout.",
    "ancrage_paroissial" : "2000",
    "types_formations": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "liste_charisme": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "encadreurs": [
      {
        "nom": "Kassoma",
        "prenom": "David",
        "telephone": "+243 820 111 222",
        "role": "Chef de Troupe",
        "poste": "Responsable Unité Scout",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/david.jpg"
      },
      {
        "nom": "Tshilombo",
        "prenom": "Nathalie",
        "telephone": "+243 810 222 333",
        "role": "Assistante Chef de Troupe",
        "poste": "Encadreuse Meute Louveteaux",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/nathalie.jpg"
      }
    ]
  },
  {
    "id": "bym",
    "nom_groupe": "Bilenge Ya Mwinda",
    "sigle": "B.Y.M",
    "devise": "Lumière du monde, Sel de la terre",
    "categorie": "Formation & Épanouissement",
    "lien_logo": "https://votre-domaine.org/assets/logos/bjm.png",
    "description": "Mouvement favorisant l'épanouissement intégral des jeunes à travers la parole de Dieu, l'auto-prise en charge et la maturité humaine.",
    "jour_reunion": "Dimanche de 11h30 à 13h00",
    "lien_page" : "./SRC/html/Groupes_vies/bym.html",
    "lieu_de_rencontre" : "Paroisse NODASA",
    "logo": "./publics/img/logo_bym.jpeg",
    "presentation_generale": "Mouvement d'action catholique et d'épanouissement intégral des jeunes, visant à en faire des hommes et des femmes conscients, autonomes et engagés dans l'Église et la société selon les valeurs de l'Évangile.",
    "historique": "Initiative née en RDC sous l'impulsion des évêques dans les années 1980 pour offrir un cadre d'épanouissement humain et spirituel à la jeunesse face aux défis sociaux et aux quêtes de sens.",
    "charisme": "Éveil de la conscience chrétienne, auto-prise en charge, témoignage de vie lumineux et recherche d'une excellence intégrale (spirituelle, morale et intellectuelle).",
    "organisation": "Structuré en équipes de fraternité par tranche d'âge, dirigées par un berger de groupe et des encadreurs expérimentés qui animent les carrefours de réflexion hebdomadaires.",
    "ancrage_paroissial" : "2000",
    "types_formations": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "liste_charisme": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "encadreurs": [
      {
        "nom": "Bondo",
        "prenom": "Patrick",
        "telephone": "+243 990 333 444",
        "role": "Berger de Groupe",
        "poste": "Responsable Général B.J.M",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/patrick.jpg"
      },
      {
        "nom": "Mwamba",
        "prenom": "Clarisse",
        "telephone": "+243 850 444 555",
        "role": "Encadreuse",
        "poste": "Chargée de la Formation Féminine",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/clarisse.jpg"
      }
    ]
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
    "lien_page" : "./SRC/html/Groupes_vies/jefac.html",
    "lieu_de_rencontre" : "Paroisse NODASA",
    "logo": "./publics/img/logo_jefac.jpg",
    "presentation_generale": "Association internationale de laïcs catholiques qui servent l'Église volontairement. Le praesidium des jeunes de la paroisse se consacre à la prière du chapelet, à l'apostolat de proximité et au soutien des personnes seules ou malades.",
    "historique": "Fondée à Dublin en 1921 par Frank Duff, la Légion de Marie s'est étendue dans le monde entier. Le praesidium jeune de la paroisse rassemble les jeunes désireux d'imiter la foi, la pureté et l'humilité de la Sainte Vierge.",
    "charisme": "Spiritualité mariale profonde, docilité à l'Esprit Saint, foi agissante, apostolat direct et prière quotidienne du Chapelet.",
    "organisation": "Structure hiérarchique appelée Praesidium au niveau paroissial, dirigée par un bureau restreint (Président, Vice-Président, Secrétaire, Trésorier) guidé spirituellement par l'aumônier.",
    "ancrage_paroissial" : "2000",
    "types_formations": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "liste_charisme": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "encadreurs": [
      {
        "nom": "Ngalula",
        "prenom": "Thérèse",
        "telephone": "+243 900 555 666",
        "role": "Présidente de Praesidium",
        "poste": "Responsable Légion Jeunes",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/therese.jpg"
      },
      {
        "nom": "Ilunga",
        "prenom": "Marc",
        "telephone": "+243 840 666 777",
        "role": "Vice-Président",
        "poste": "Chargé de l'Apostolat",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/marc.jpg"
      }
    ]
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
    "lien_page" : "./SRC/html/Groupes_vies/mijerca.html",
    "lieu_de_rencontre" : "Paroisse NODASA",
    "logo": "./publics/img/logo_mijerca.jpeg",
    "presentation_generale": "Association internationale de laïcs catholiques qui servent l'Église volontairement. Le praesidium des jeunes de la paroisse se consacre à la prière du chapelet, à l'apostolat de proximité et au soutien des personnes seules ou malades.",
    "historique": "Fondée à Dublin en 1921 par Frank Duff, la Légion de Marie s'est étendue dans le monde entier. Le praesidium jeune de la paroisse rassemble les jeunes désireux d'imiter la foi, la pureté et l'humilité de la Sainte Vierge.",
    "charisme": "Spiritualité mariale profonde, docilité à l'Esprit Saint, foi agissante, apostolat direct et prière quotidienne du Chapelet.",
    "organisation": "Structure hiérarchique appelée Praesidium au niveau paroissial, dirigée par un bureau restreint (Président, Vice-Président, Secrétaire, Trésorier) guidé spirituellement par l'aumônier.",
    "ancrage_paroissial" : "2000",
    "types_formations": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "liste_charisme": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "encadreurs": [
      {
        "nom": "Ngalula",
        "prenom": "Thérèse",
        "telephone": "+243 900 555 666",
        "role": "Présidente de Praesidium",
        "poste": "Responsable Légion Jeunes",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/therese.jpg"
      },
      {
        "nom": "Ilunga",
        "prenom": "Marc",
        "telephone": "+243 840 666 777",
        "role": "Vice-Président",
        "poste": "Chargé de l'Apostolat",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/marc.jpg"
      }
    ]
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
    "lien_page" : "./SRC/html/Groupes_vies/apa.html",
    "lieu_de_rencontre" : "Paroisse NODASA",
    "logo": "./publics/img/logo_apa.jpeg",
    "presentation_generale": "Association internationale de laïcs catholiques qui servent l'Église volontairement. Le praesidium des jeunes de la paroisse se consacre à la prière du chapelet, à l'apostolat de proximité et au soutien des personnes seules ou malades.",
    "historique": "Fondée à Dublin en 1921 par Frank Duff, la Légion de Marie s'est étendue dans le monde entier. Le praesidium jeune de la paroisse rassemble les jeunes désireux d'imiter la foi, la pureté et l'humilité de la Sainte Vierge.",
    "charisme": "Spiritualité mariale profonde, docilité à l'Esprit Saint, foi agissante, apostolat direct et prière quotidienne du Chapelet.",
    "organisation": "Structure hiérarchique appelée Praesidium au niveau paroissial, dirigée par un bureau restreint (Président, Vice-Président, Secrétaire, Trésorier) guidé spirituellement par l'aumônier.",
    "ancrage_paroissial" : "2000",
    "types_formations": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "liste_charisme": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "encadreurs": [
      {
        "nom": "Ngalula",
        "prenom": "Thérèse",
        "telephone": "+243 900 555 666",
        "role": "Présidente de Praesidium",
        "poste": "Responsable Légion Jeunes",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/therese.jpg"
      },
      {
        "nom": "Ilunga",
        "prenom": "Marc",
        "telephone": "+243 840 666 777",
        "role": "Vice-Président",
        "poste": "Chargé de l'Apostolat",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/marc.jpg"
      }
    ]
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
    "lien_page" : "./SRC/html/Groupes_vies/legion.html",
    "lieu_de_rencontre" : "Paroisse NODASA",
    "logo": "./publics/img/logo_legion.jpg",
    "presentation_generale": "Association internationale de laïcs catholiques qui servent l'Église volontairement. Le praesidium des jeunes de la paroisse se consacre à la prière du chapelet, à l'apostolat de proximité et au soutien des personnes seules ou malades.",
    "historique": "Fondée à Dublin en 1921 par Frank Duff, la Légion de Marie s'est étendue dans le monde entier. Le praesidium jeune de la paroisse rassemble les jeunes désireux d'imiter la foi, la pureté et l'humilité de la Sainte Vierge.",
    "charisme": "Spiritualité mariale profonde, docilité à l'Esprit Saint, foi agissante, apostolat direct et prière quotidienne du Chapelet.",
    "organisation": "Structure hiérarchique appelée Praesidium au niveau paroissial, dirigée par un bureau restreint (Président, Vice-Président, Secrétaire, Trésorier) guidé spirituellement par l'aumônier.",
    "ancrage_paroissial" : "2000",
    "types_formations": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "liste_charisme": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "encadreurs": [
      {
        "nom": "Ngalula",
        "prenom": "Thérèse",
        "telephone": "+243 900 555 666",
        "role": "Présidente de Praesidium",
        "poste": "Responsable Légion Jeunes",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/therese.jpg"
      },
      {
        "nom": "Ilunga",
        "prenom": "Marc",
        "telephone": "+243 840 666 777",
        "role": "Vice-Président",
        "poste": "Chargé de l'Apostolat",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/marc.jpg"
      }
    ]
  },
  {
    "id": "ecm",
    "nom_groupe": "Ecole de Charite et de Mission",
    "sigle": "E.C.M",
    "devise": "Prie, Communie, Sacrifie-toi, Sois Apôtre",
    "categorie": "Spiritualité Eucharistique",
    "lien_logo": "https://votre-domaine.org/assets/logos/ecm.png",
    "description": "Mouvement axé sur l'amour de l'Eucharistie, l'adoration du Saint-Sacrement et la formation liturgique des jeunes.",
    "jour_reunion": "Dimanche de 11h30 à 13h00",
    "lien_page" : "./SRC/html/Groupes_vies/emc.html",
    "lieu_de_rencontre" : "Paroisse NODASA",
    "logo": "./publics/img/logo_ecm.jpg",
    "presentation_generale": "Association internationale de laïcs catholiques qui servent l'Église volontairement. Le praesidium des jeunes de la paroisse se consacre à la prière du chapelet, à l'apostolat de proximité et au soutien des personnes seules ou malades.",
    "historique": "Fondée à Dublin en 1921 par Frank Duff, la Légion de Marie s'est étendue dans le monde entier. Le praesidium jeune de la paroisse rassemble les jeunes désireux d'imiter la foi, la pureté et l'humilité de la Sainte Vierge.",
    "charisme": "Spiritualité mariale profonde, docilité à l'Esprit Saint, foi agissante, apostolat direct et prière quotidienne du Chapelet.",
    "organisation": "Structure hiérarchique appelée Praesidium au niveau paroissial, dirigée par un bureau restreint (Président, Vice-Président, Secrétaire, Trésorier) guidé spirituellement par l'aumônier.",
    "ancrage_paroissial" : "2000",
    "types_formations": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "liste_charisme": [
      {"description_type" : "Pureté & Intégrité",
        "description" : "Formation spirituelle et catéchèse sur la vie des Saints Martyrs"
      },
      {"description_type" : "Courage de la Foi",
        "description" : "Ateliers de développement personnel et leadership jeune"
      },
      {"description_type" : "Service & Fraternité",
        "description" : "Apprentissage des valeurs civiques, du respect et du secourisme"
      },
      {"description_type" : "Leadership Jeune",
        "description" : "Activités manuelles, chants liturgiques et expression théâtrale"
      }
    ],
    "encadreurs": [
      {
        "nom": "Ngalula",
        "prenom": "Thérèse",
        "telephone": "+243 900 555 666",
        "role": "Présidente de Praesidium",
        "poste": "Responsable Légion Jeunes",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/therese.jpg"
      },
      {
        "nom": "Ilunga",
        "prenom": "Marc",
        "telephone": "+243 840 666 777",
        "role": "Vice-Président",
        "poste": "Chargé de l'Apostolat",
        "lien_photo": "https://votre-domaine.org/assets/photos/encadreurs/marc.jpg"
      }
    ]
  }
]
localStorage.setItem("groupeDeVie", JSON.stringify(tousGroupeDeVie))

const evenementsData = [
  {
    "id": "evt-001",
    "nom_evenement": "Grande Messe des Jeunes & Assemblée Générale",
    "date_evenement": "2026-08-15",
    "lieu": "Église Paroissiale NODASA",
    "adresse_exacte" : "22, virunga, Kindele, Lemba",
    "groupe_responsable": "Bureau CDJ",
    "heure_debut": "09h00",
    "heure_fin": "12h30",
    "droit_entree": "Jeunes de la paroisse",
    "description_evenement": "Célébration eucharistique réunissant l'ensemble des 8 groupes de vie pour le lancement officiel des activités du second semestre, suivie d'une séance d'échange avec le Bureau.",
    "frais" : "45.000Fc",
    "orateur" : "Gratien Mbey",
    "apropos_evenement" : "La CDJ Nodasa, coordonne les formations dispensées par les groupes de vie de la paroisse, pour permettre l'épanouissement de jeunes, elle offre un cadre pour les formations, les retraites, recollections, messe de jeunes, et organise également des activités ludiques, excursions, repas communautaires, Journées foraines etc, et initie également des projets de développement visant la jeunesse, La CDJ Nodasa, coordonne les formations dispensées par les groupes de vie de la paroisse, pour permettre l'épanouissement de jeunes, elle offre un cadre pour les formations, les retraites, recollections, messe de jeunes, et organise également des activités ludiques, excursions, repas communautaires, Journées foraines etc, et initie également des projets de développement visant la jeunesseLa CDJ Nodasa, coordonne les formations dispensées par les groupes de vie de la paroisse, pour permettre l'épanouissement de jeunes, elle offre un cadre pour les formations, les retraites, recollections, messe de jeunes, et organise également des activités ludiques, excursions, repas communautaires, Journées foraines etc, et initie également des projets de développement visant la jeunesse"
  },
  {
    "id": "evt-002",
    "nom_evenement": "Camp de Formation & Survie en Plein Air",
    "date_evenement": "2026-08-22",
    "lieu": "Cour Paroissiale & Terrain Annexe",
    "adresse_exacte" : "22, virunga, Kindele, Lemba",
    "groupe_responsable": "Scouts",
    "heure_debut": "08h00",
    "heure_fin": "16h00",
    "droit_entree": "Jeunes du groupe",
    "description_evenement": "Exercices pratiques de secourisme, cartographie, civisme et techniques de secourisme pour les patrouilles de la troupe.",
    "frais" : "Gratuits",
    "orateur" : "Gratien Mbey",
    "apropos_evenement" : "La CDJ Nodasa, coordonne les formations dispensées par les groupes de vie de la paroisse, pour permettre l'épanouissement de jeunes, elle offre un cadre pour les formations, les retraites, recollections, messe de jeunes, et organise également des activités ludiques, excursions, repas communautaires, Journées foraines etc, et initie également des projets de développement visant la jeunesse, La CDJ Nodasa, coordonne les formations dispensées par les groupes de vie de la paroisse, pour permettre l'épanouissement de jeunes, elle offre un cadre pour les formations, les retraites, recollections, messe de jeunes, et organise également des activités ludiques, excursions, repas communautaires, Journées foraines etc, et initie également des projets de développement visant la jeunesseLa CDJ Nodasa, coordonne les formations dispensées par les groupes de vie de la paroisse, pour permettre l'épanouissement de jeunes, elle offre un cadre pour les formations, les retraites, recollections, messe de jeunes, et organise également des activités ludiques, excursions, repas communautaires, Journées foraines etc, et initie également des projets de développement visant la jeunesse"
  },
  {
    "id": "evt-003",
    "nom_evenement": "Nuit d'Adoration & Louange Eucharistique",
    "date_evenement": "2026-08-28",
    "lieu": "Chapelle Paroissiale",
    "adresse_exacte" : "22, virunga, Kindele, Lemba",
    "groupe_responsable": "APA",
    "heure_debut": "20h00",
    "heure_fin": "05h00",
    "droit_entree": "Gratuit",
    "description_evenement": "Temps fort d'intercession, de méditation du Saint-Sacrement et d'animation musicale spirituelle ouvert à toute la jeunesse.",
    "frais" : "45.000Fc",
    "orateur" : "Gratien Mbey",
    "apropos_evenement" : "La CDJ Nodasa, coordonne les formations dispensées par les groupes de vie de la paroisse, pour permettre l'épanouissement de jeunes, elle offre un cadre pour les formations, les retraites, recollections, messe de jeunes, et organise également des activités ludiques, excursions, repas communautaires, Journées foraines etc, et initie également des projets de développement visant la jeunesse, La CDJ Nodasa, coordonne les formations dispensées par les groupes de vie de la paroisse, pour permettre l'épanouissement de jeunes, elle offre un cadre pour les formations, les retraites, recollections, messe de jeunes, et organise également des activités ludiques, excursions, repas communautaires, Journées foraines etc, et initie également des projets de développement visant la jeunesseLa CDJ Nodasa, coordonne les formations dispensées par les groupes de vie de la paroisse, pour permettre l'épanouissement de jeunes, elle offre un cadre pour les formations, les retraites, recollections, messe de jeunes, et organise également des activités ludiques, excursions, repas communautaires, Journées foraines etc, et initie également des projets de développement visant la jeunesse"
  },
  {
    "id": "evt-004",
    "nom_evenement": "Journée Portes Ouvertes & Inscriptions",
    "date_evenement": "2026-09-05",
    "lieu": "Salle Paroissiale Saint-Joseph",
    "adresse_exacte" : "22, virunga, Kindele, Lemba",
    "groupe_responsable": "K.A",
    "heure_debut": "14h00",
    "heure_fin": "17h00",
    "droit_entree": "Jeunes de la paroisse",
    "description_evenement": "Présentation du parcours Kizito et Anuarite pour les parents et enfants souhaitant intégrer le groupe pour l'année pastorale 2026-2027.",
    "frais" : "45.000Fc",
    "orateur" : "Gratien Mbey",
    "apropos_evenement" : "La CDJ Nodasa, coordonne les formations dispensées par les groupes de vie de la paroisse, pour permettre l'épanouissement de jeunes, elle offre un cadre pour les formations, les retraites, recollections, messe de jeunes, et organise également des activités ludiques, excursions, repas communautaires, Journées foraines etc, et initie également des projets de développement visant la jeunesse, La CDJ Nodasa, coordonne les formations dispensées par les groupes de vie de la paroisse, pour permettre l'épanouissement de jeunes, elle offre un cadre pour les formations, les retraites, recollections, messe de jeunes, et organise également des activités ludiques, excursions, repas communautaires, Journées foraines etc, et initie également des projets de développement visant la jeunesseLa CDJ Nodasa, coordonne les formations dispensées par les groupes de vie de la paroisse, pour permettre l'épanouissement de jeunes, elle offre un cadre pour les formations, les retraites, recollections, messe de jeunes, et organise également des activités ludiques, excursions, repas communautaires, Journées foraines etc, et initie également des projets de développement visant la jeunesse"
  }
]
localStorage.setItem("evenements", JSON.stringify(evenementsData))

const communiqueOfficielCDJ = [
  {
    "id": "communique-004",
    "titre": "Réorganisation du calendrier des assemblées mensuelles et modalités de cotisation annuelle 2026-2027",
    "date": "2026-08-01",
    "numero_ref" : "SGB/HH342/5",
    "categorie": "Communiqué Officiel",
    "description": "Le Bureau de la Commission des Jeunes porte à la connaissance de l'ensemble des responsables de groupes et membres actifs des décisions arrêtées lors du conseil paroissial. Tous les responsables sont priés de prendre disposition.",
    "auteur": "Joel Mitondo",
    "qualite": "Président de la CDJ",
    "time" : "2min"
  },
  {
    "id": "actu-001",
    "titre": "Grand succès pour la journée de salubrité et de reboisement de la cour paroissiale",
    "date": "2026-07-28",
    "numero_ref" : "SGB/HH342/5",
    "categorie": "Vie des jeunes",
    "description": "Plus de 150 jeunes issus de tous les mouvements ont participé activement aux travaux d'embellissement et de nettoyage de l'enceinte paroissiale.",
    "auteur": "Grace Kabeya",
    "qualite": "Secrétaire Générale",
    "time" : "2min"
  },
  {
    "id": "actu-002",
    "titre": "Lancement du premier atelier numérique : Initiation à la gestion de projet",
    "date": "2026-07-15",
    "numero_ref" : "SGB/HH342/5",
    "categorie": "Formation",
    "description": "Une opportunité d'apprentissage offerte gratuitement aux jeunes encadreurs de la paroisse NODASA pour renforcer leurs compétences managériales.",
    "auteur": "Sun Ilunga",
    "qualite": "Vice-Président chargé de la Formation",
    "time" : "2min"
  }
]
localStorage.setItem("communiqueOfficielCDJ", JSON.stringify(communiqueOfficielCDJ))

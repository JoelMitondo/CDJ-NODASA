import {afficherEtCacher, modeClairEtSombre, animationCompteurIndex} from './scripts.js';
import {miseEnPage, afficherLesGroupes, initModalEspaceEngage, afficherCommunique, btnFiltreEvenement, affichageIcone} from './miseEnPage.js';
import {gestionLienResaeauSociaux} from './lesFonctions.js'

afficherEtCacher()
modeClairEtSombre()
animationCompteurIndex()
miseEnPage()
afficherLesGroupes()
afficherCommunique()
btnFiltreEvenement()
gestionLienResaeauSociaux()
affichageIcone()
initModalEspaceEngage()

// Initialisation du bouton espace engagé automatique au chargement
document.addEventListener("DOMContentLoaded", initModalEspaceEngage);
const infoCommis = JSON.parse(localStorage.getItem("infoCommis"))

//Fonction pour gerer l'affichage du logo de la cdj en fonction du thème (sombre ou clair)
export function logoSombreClair(){
        const modePage = localStorage.getItem('theme')
        const logoCdjClair=infoCommis.logoClair
        const logoCdjSombre=infoCommis.logoSombre
        const logoCDJ=document.querySelectorAll(".logoCdj")
 
        
        logoCDJ.forEach(element => {
            element.innerHTML=""
            const img = document.createElement("img")
            img.alt="logo CDJ"
            img.className="w-full h-full object-contain"
            if(modePage === 'dark'){
                img.src=logoCdjSombre
            } else {
                img.src=logoCdjClair
            }
      
            element.appendChild(img)})
    }
//function pour la gestion des liens vers les resaeaux sociaux de la cdj    
export function gestionLienResaeauSociaux(){
    const lienYoutube = document.querySelectorAll("#lienYoutube")
    const lienWhatapp = document.querySelectorAll("#lienWhatapp")
    const lienFacebook = document.querySelectorAll("#lienFacebook")
    
    lienYoutube.forEach(lien => {lien.href = infoCommis.lien_youtube})
    lienWhatapp.forEach(lien => {lien.href = infoCommis.lien_whatsapp})
    lienFacebook.forEach(lien => {lien.href = infoCommis.lien_facebook})
    
}


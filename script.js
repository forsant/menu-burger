/* quand je clic sur l icone */
let icone=document.getElementById('icone');
/* au clic j'aimerais que tu me sortes et caches la classe active */
icone.addEventListener("click",function(){
    nav.classList.toggle("active");
})
/* en cliquant sur un de ces boutons, la navbar se range */
/* pour ce faire on pointer tous les liens */
const links = document.querySelectorAll("nav li");  /*  place toutes les balises enfants (li) dans la variable links */
links.forEach(link =>{  /*equivaut a function(){} */
    link.addEventListener("click",()=>{ /*  les trois li, je les appelle link qui est un paramètre pouis on ajoute un évènement click sur chaqu'un des li vérifiable avec console log*/
        nav.classList.remove("active")  /*  j'enlève la classs li si jamais on clic  */
    })
})
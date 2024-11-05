// DOM Elements et variables
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const openModalBtn = document.getElementById("openModalBtn")
const closeModalBtn = document.querySelector(".close")
const saisieForm = document.querySelector ("form")
const firstName = document.getElementById ("first")
const lastName = document.getElementById ("last")
const userMail = document.getElementById ("email")
const nbreConcours = document.getElementById("quantity")
const radioBtnLocationChoice = document.querySelectorAll('#inputFormDataBtnRadioLocation input[type="radio"]')  
const checkBoxCGU = document.getElementById("checkbox1")
const checkBoxNewsLetter = document.getElementById("checkbox2")
// Sélectionner les boutons radio par leur ID
const radioBtnLocation1 = document.getElementById("location1");
const radioBtnLocation2 = document.getElementById("location2");
const radioBtnLocation3 = document.getElementById("location3");
const radioBtnLocation4 = document.getElementById("location4");
const radioBtnLocation5 = document.getElementById("location5");
const radioBtnLocation6 = document.getElementById("location6");




function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Fonction d'ouverture et de fermeture de la modal(formulaire)
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal(){
  modalbg.style.display = "none";
}

//Règles de validation du formulaire
//Fonction de validation du nom et du prénom
/**
 * Cette fonction prend un prénom en paramètre et valide qu'il est au bon format
 * @param {string} firstName : le prénom du joueur
 * @throws {Error}
 */
function validerPrenom(first){
   //let  regexFirstLast = new RegExp ("^[\\p{LC}0-9-]{2,}$")
   let  regexFirstLast = new RegExp ("^[a-zA-Z0-9-]{2,}$")
   if(!regexFirstLast.test(first)){
      throw new Error ("Veuillez entrer 2 caractères ou plus pour le champ du prénom.")            
   }
}
/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * @param {string} last : le nom du joueur
 * @throws {Error}
 */
function validerNom(last){
  let  regexFirstLast = new RegExp ("^[a-zA-Z0-9-]{2,}$")
  if(!regexFirstLast.test(last)){
      throw new Error ("Veuillez entrer 2 caractères ou plus pour le champ du nom.")
  }    
}
/**
* Cette fonction prend un email en paramètre et valide qu'il est au bon format
* @param {string} email : le mail du joueur
* @throws {Error}
*/
function validerEmail(email){
  let regexMail = new RegExp ("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9._-]+")
  if(!regexMail.test(email)){
      throw new Error ("L'email saisi n'est pas valide")  
  }    
}
//Fonction de validation de la date de naissance du joueur.
/**
 * Cette fonction prend la date de naissance du joueur et valide qu'elle est au bon format jj/mm/aaaa bissextil et jour dans le mois inclus.
 * @param {date} birthDate : la date de naissance du joueur
 * @throws {Error}
 */
function dateNaissance(birthDate){
  let regexDate = new RegExp ("^(((0[1-9]|[12][0-9]|3[01])[/](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[/](0[469]|11)|(0[1-9]|1\d|2[0-8])[/]02)[/]\d{4}|29[/]02[/](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$")
  if(!regexDate.test(birthDate)){
      throw new Error ( "Vous devez entrer votre date de naissance.")        
  }   
}

//Fonction de validation du nombre de concours joué.
/**
 * Cette fonction prend une quantité en paramètre et valide qu'elle est au bon format
 * @param {number} quantity : le nombre de concours
 * @throws {Error}
 */
function nbreConcoursJouer(quantity){
  let regexNbre = new RegExp ("[0-9]{1,}")
  if(!regexNbre.test(quantity)){
      throw new Error ("Veuillez saisir le nombre de tournoi joué.")        
  }   
}
//Fonction de verification des boutons radios du lieu du concours/tournoi
// Fonction pour vérifier si un bouton radio est sélectionné
function isRadioButtonSelected() {
    if(radioBtnLocation1.checked || radioBtnLocation2.checked || radioBtnLocation3.checked || radioBtnLocation4.checked || radioBtnLocation5.checked || radioBtnLocation6.checked){        
    } else{
      throw new Error("Vous devez choisir une option.")
    }
    
}
// Fonction pour initialiser les écouteurs d'événements sur les boutons radio
function initRadioButtonListeners() {  
    radioBtnLocationChoice.forEach(button => {
      button.addEventListener('change', () => {             
          console.log("nouveau choix")                
      });
    });       
}

//Fonction de verification de la case à cochée CGU
/**
 * Cette fonction prend 
 * @param {boolean} usingCondition : 
 * @throws {Error}
 */
function btnCheckBox(){  
    if(!checkBoxCGU.checked){      
        throw new Error ("Vous devez vérifier que vous acceptez les termes et conditions.")
    }
 
  
}
// fonction de soumission du formulaire
function validationForm(){ 
    saisieForm.addEventListener("submit", (event) => {
      event.preventDefault();
      try{
        validerPrenom(firstName.value) 
        validerNom(lastName.value)
        validerEmail(userMail.value)
        nbreConcoursJouer(nbreConcours.value)
        initRadioButtonListeners()
        isRadioButtonSelected()
        btnCheckBox()                            
        console.log("valide")
        saisieForm.reset();
      }     
       catch(error){        
        console.log(error.message)
       } 
  })
  
}
// appel des fonctions pour le formulaire

// launch modal event
openModalBtn.addEventListener ("click", () => {
    launchModal()
})
//modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//close modal event
closeModalBtn.addEventListener ("click", () => {
    closeModal()
})
validationForm()  

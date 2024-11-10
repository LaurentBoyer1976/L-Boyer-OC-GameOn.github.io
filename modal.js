// DOM Elements et variables
const modalbg = document.querySelector(".bground")
const modalBody = document.querySelector(".modal-body")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const controlTextInput =document.querySelector('.text-control')
const formulaireReservation = document.getElementById('reservationForm')
const champsInput = document.querySelector('input')
const openModalBtn = document.getElementById("openModalBtn")
const closeModalBtn = document.querySelector(".close")
const firstName = document.getElementById ("first")
const lastName = document.getElementById ("last")
const userMail = document.getElementById ("email")
const birthDateInput = document.getElementById("birthdate")
const nbreConcours = document.getElementById("quantity")
const radioBtnLocationList = document.getElementById("inputFormDataBtnRadioLocation")
const radioBtnLocationChoice = document.querySelectorAll('#inputFormDataBtnRadioLocation input[type="radio"]')  
const containerCheckBox__CGU = document.getElementById('containerCheckBox__CGU')
const checkBoxCGU = document.getElementById("checkbox1")
const checkBoxNewsLetter = document.getElementById("checkbox2")
const btnSubmitButton = document.getElementById('btnSubmitButton')
const errorElement = document.createElement("span")
// Sélectionner les boutons radio par leur ID
const radioBtnLocation1 = document.getElementById("location1");
const radioBtnLocation2 = document.getElementById("location2");
const radioBtnLocation3 = document.getElementById("location3");
const radioBtnLocation4 = document.getElementById("location4");
const radioBtnLocation5 = document.getElementById("location5");
const radioBtnLocation6 = document.getElementById("location6");
// Variables modal message de validation
const messageDiv = messageBox ()
const closeFormBtn = closeFormRedBtn ()
const validationBox = validationDivPBtn(messageDiv, closeFormBtn)


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
  validationBox.style.display ='none'
  modalbg.style.display = "block";
  formulaireReservation.style.display='block'
}

// close modal form
function closeModal(){
  modalbg.style.display = "none";
}

//Fonction de création de bordure sur input en erreur.
function inputErrorRedBorder(element){
  element.classList.add('error');
  element.setAttribute('data-error-visible', 'true')
}
//Fonction de création du message d'erreur.
function messageErreurSaisie(elementCreate , elementParent, errorMessage){
      elementCreate.classList.add('formData', 'error');
      elementCreate.setAttribute('data-error', errorMessage);     
      elementCreate.setAttribute('data-error-visible','true')
      elementParent.parentNode.appendChild(elementCreate);
}
//Fonction de création du message d'erreur bouton radio et checkbox.
function messageErreurCheckBoxRadio(elementCreate , elementParent, errorMessage){
    elementCreate.classList.add('formData', 'error');
    elementCreate.setAttribute('data-error', errorMessage);     
    elementCreate.setAttribute('data-error-visible','true')
    elementParent.parentNode.insertBefore(elementCreate, elementParent);
}

//Règles de validation du formulaire
//Fonction de validation du nom et du prénom
/**
 * Cette fonction prend un prénom en paramètre et valide qu'il est au bon format
 * @param {string} firstName : le prénom du joueur
 * @throws {Error}
 */
function validerPrenom(first){ 
  let  regexFirstLast = new RegExp ("^[a-zA-Z-]{2,}$")
    if(!regexFirstLast.test(first)){
      throw new Error (messageErreurSaisie(errorElement, firstName, "Veuillez entrer 2 caractères ou plus pour le champ du prénom." ),
      inputErrorRedBorder(firstName))
  }  else {
    // Supprime la classe 'error' si elle existe
    firstName.setAttribute('data-error-visible', 'false')
  }   
}
/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * @param {string} last : le nom du joueur
 * @throws {Error}
 */
function validerNom(last){
  let  regexFirstLast = new RegExp ("^[a-zA-Z-]{2,}$")
  if(!regexFirstLast.test(last)){
    throw new Error (messageErreurSaisie(errorElement, lastName, "Veuillez entrer 2 caractères ou plus pour le champ du nom."),
    inputErrorRedBorder(lastName))
  }   else {
    // Supprime la classe 'error' si elle existe
    lastName.setAttribute('data-error-visible', 'false')
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
    throw new Error (messageErreurSaisie(errorElement, userMail, "L'email saisi n'est pas valide"),
    inputErrorRedBorder(userMail))    
  }   else {
    // Supprime la classe 'error' si elle existe
    userMail.setAttribute('data-error-visible', 'false')
  }   
}

//Fonction de validation de la date de naissance du joueur.
/**
 * Cette fonction prend la date de naissance du joueur et valide qu'elle est au bon format jj/mm/aaaa bissextil et jour dans le mois inclus.
 * @param {string} birthDate : la date de naissance du joueur
 * @throws {Error}
 */
function dateNaissance(birthDate){  
    
  if(!birthDate){
    
    throw new Error ( 
    messageErreurSaisie(errorElement, birthDateInput, "Vous devez entrer votre date de naissance."),
    inputErrorRedBorder(birthDateInput) 
  )                           
  }  else {
    // Supprime la classe 'error' si elle existe
    birthDateInput.setAttribute('data-error-visible', 'false')
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
    throw new Error (messageErreurSaisie(errorElement, nbreConcours, "Veuillez saisir le nombre de tournoi joué."),
      inputErrorRedBorder(nbreConcours))                   
  } else {
  // Supprime la classe 'error' si elle existe
  nbreConcours.setAttribute('data-error-visible', 'false')
  }
}
//Fonction de verification des boutons radios du lieu du concours/tournoi
// Fonction pour vérifier si un bouton radio est sélectionné
function isRadioButtonSelected() {
    if(radioBtnLocation1.checked || radioBtnLocation2.checked || radioBtnLocation3.checked || radioBtnLocation4.checked || radioBtnLocation5.checked || radioBtnLocation6.checked){        
    } else{
      throw new Error (messageErreurCheckBoxRadio(errorElement , containerCheckBox__CGU, "Vous devez choisir une option.")) 
    }       
}
// Fonction pour initialiser les écouteurs d'événements sur les boutons radio
function initRadioButtonListeners() {  
    radioBtnLocationChoice.forEach(button => {
      button.addEventListener('change', () => {                                      
      });
    });       
}

//Fonction de verification de la case à cochée CGU
/**
 * Cette fonction prend 
 * @param {boolean} usingCondition : la case CGU coché
 * @throws {Error}
 */
function btnCheckBox(){  
    if(!checkBoxCGU.checked){
      throw new Error (messageErreurCheckBoxRadio(errorElement , btnSubmitButton, "Vous devez vérifier que vous acceptez les termes et conditions."))                           
    } else {
      // Si la case est cochée, on supprime le message d'erreur s'il existe déjà
      if (errorElement.parentNode) {
          errorElement.parentNode.removeChild(errorElement);
      }
    }  
}

function messageBox (){
  const messageDiv = document.createElement ('div')
  const confirmationMessage = document.createElement('p')
  confirmationMessage.classList.add('text-label')
  confirmationMessage.textContent = "Merci pour votre inscription."
  confirmationMessage.style.textAlign = 'center'
  confirmationMessage.style.fontSize = '36px'
  messageDiv.appendChild(confirmationMessage)
  return messageDiv
}

function closeFormRedBtn (){
  const closeFormBtn = document.createElement ('button')
  closeFormBtn.classList.add('btn-submit', 'button')  
  closeFormBtn.textContent = 'Fermer'
  return closeFormBtn
}

function validationDivPBtn(message, button){
  const validationDiv = document.createElement ('div')      
  validationDiv.classList.add('modal-body')   
  validationDiv.style.display= 'flex'
  validationDiv.style.flexFlow= 'row wrap'
  validationDiv.style.justifyContent= 'center'
  validationDiv.style.alignItems= 'flex-end'
  validationDiv.style.height = '700px'  
  validationDiv.appendChild(message)
  validationDiv.appendChild(button)  
  return validationDiv   
}


function validationMessage() {
  //Selection des éléments ayant la class : "formData"
  const textControl = formulaireReservation.querySelectorAll('.text-control')
  const checkBoxRadioBtn = formulaireReservation.querySelectorAll('.checkbox-input')
  
  // Parcours les éléments du formulaire
  textControl.forEach (element => {
    element.value = '';
  })    
    checkBoxRadioBtn.forEach(checkbox => {
      checkbox.checked= false
  })
  formulaireReservation.style.display='none'  
  modalBody.parentNode.appendChild(validationBox)
  validationBox.style.display = 'flex'
   
}

     
// fonction de soumission du formulaire
function validationForm(){ 
    
      try{
        validerPrenom(firstName.value) 
        validerNom(lastName.value)
        validerEmail(userMail.value)
        dateNaissance(birthDateInput.value)              
        nbreConcoursJouer(nbreConcours.value)
        initRadioButtonListeners()
        isRadioButtonSelected()
        btnCheckBox()
       return true                                  
      }     
      catch(erreur) {
      return false       
      }
  
}
function sendForm(){  
  formulaireReservation.addEventListener("submit", (event) => {
    event.preventDefault();
    const formValide = validationForm()
    if (formValide){
      validationMessage ()
    }
  })
}
  

// appel des fonctions pour le formulaire

// launch modal event
openModalBtn.addEventListener ("click", () => {
    launchModal()
})
//close modal event
closeModalBtn.addEventListener ("click", () => {
    closeModal()
})
//close Modal validation Message
closeFormBtn.addEventListener('click', () => {
  closeModal()
})

sendForm();

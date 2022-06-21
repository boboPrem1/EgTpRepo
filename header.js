// let elementsInseres = null;
// let nbrPersonnes = null;
let idTable = 0;
let dataToModifie = {};
let affichage = null;
class HeaderOps{
    constructor(){

    }

    static getDate(){
        return new Date();
    }

    static formDate(){
        let date = this.getDate();
        let jour = date.getUTCDate().toString().padStart(2,'0');
        let month = '';
        switch(date.getUTCMonth()){
            case 0:
                month = 'Janvier';
                break;
            case 1:
                month = 'Février';
                break;
            case 2:
                month = 'Mars';
                break;
            case 3:
                month = 'Avril';
                break;
            case 4:
                month = 'Mai';
                break;
            case 5:
                month = 'Juin';
                break;
            case 6:
                month = 'Juillet';
                break;
            case 7:
                month = 'Août';
                break;
            case 8:
                month = 'Septempbre';
                break;
            case 9:
                month = 'Octobre';
                break;
            case 10:
                month = 'Novembre';
                break;
            case 11:
                month = 'Décembre';
                break;
        }
        let year = date.getUTCFullYear();
        let hours = date.getUTCHours().toString().padStart(2,'0');
        let minutes = date.getUTCMinutes().toString().padStart(2,'0');
        let secondes = date.getUTCSeconds().toString().padStart(2,'0');
        let dateOfToday = `${jour} ${month} ${year} | ${hours}:${minutes}:${secondes}`;
        return dateOfToday;
    }

    static insertDate(){
        let date = this.formDate();
        let element = document.querySelector('.dateContainer');
        element.textContent = date;
    }

    showModal(modal){
        let htmlToInsert = ``;
        let forProfil = `<div class="modalHeader">
        <div class="leftPart"><span class="modalTitle">User X</span></div>
        <div class="middlePart"></div>
        <div class="rightPart">
            <span class="iconContainer" onclick="headerOps.destructModal()">
                <span><i class="fa-solid fa-xmark"></i></span>
            </span>
        </div>
    </div>
    <div class="modalMain">
        <div class="modalMainRow">
            <div class="profilImgContainer">
                <img src="./Assets/images/YoWEB-20211118232653.jpg" alt="" class="profilImg">
            </div>
            <div class="nomPrenomsContainer">
                <div class="elmts">
                    <span class="nomContainer">Nom:</span><span>Amouzougan</span>
                </div>
                <div class="elmts">
                    <span class="prenomContainer">Prénom:</span><span id="prenomContainer">Kangni Juvanio</span>
                </div>
            </div>
        </div>
        <div class="mainMiddleRow elmts">
            <span class="dateNaissance">Date de Naissance:</span><span>31/05/1999</span>
        </div>
        <div class="mainMiddleRow  elmts">
            <span class="adresseEmail">Adresse Email:</span><span>jamouzougan@gmail.com</span>
        </div>
        <div class="mainMiddleRow  elmts">
            <span class="phone">Phone:</span><span>+228 96 85 89 12</span>
        </div>
        <div class="mainMiddleRow  elmts">
            <span class="sexe">Sexe:</span><span>Masculin</span>
        </div>
        <div class="mainMiddleRow  elmts">
            <span class="commentaire">Commentaire:</span><textarea disabled="disabled">lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque, labore necessitatibus cupiditate molestiae ipsam.</textarea>
        </div>
    </div>
    <div class="mainFoot">
            <span class="modalModifBtn">Modifier</span>
    </div>`;
        let forAdd = ` <div class="modalHeader">
        <div class="leftPart"><span class="modalTitle">Ajouter</span></div>
        <div class="middlePart"></div>
        <div class="rightPart">
            <span class="iconContainer" onclick="headerOps.destructModal()">
                <span><i class="fa-solid fa-xmark"></i></span>
            </span>
        </div>
    </div>
<form id="addForm">    
    <div class="addModalMain">
        <div class="addModalRow">
            <div class="aMlabelContainer">
                <span class="aMLabel">ID</span>
            </div>
            <div class="aMInputContainer">
                <span class="aMinput">
                    <input type="text" name="" value="${(idTable + 1) >= 10 ? (idTable + 1) : ('0' + (idTable + 1))}" id="aMIdInput" disabled="disabled">
                </span>
            </div>
        </div>
        <div class="addModalRow">
            <div class="aMlabelContainer">
                <span class="aMLabel">Nom</span>
            </div>
            <div class="aMInputContainer">
                <span class="aMinput">
                    <input type="text" name="inputNom" value="" placeholder="Veuillez entrer votre Nom ..." id="aMNomInput">
                </span>
            </div>
        </div>
        <div class="addModalRow">
            <div class="aMlabelContainer">
                <span class="aMLabel">Prénom.s</span>
            </div>
            <div class="aMInputContainer">
                <span class="aMinput">
                    <input type="text" name="inputPrenom" value="" placeholder="Entrez vo(s)tre prénom.s ..." id="aMPrenomInput">
                </span>
            </div>
        </div>
        <div class="addModalRow">
            <div class="aMlabelContainer">
                <span class="aMLabel">Date de Naissance</span>
            </div>
            <div class="aMInputContainer">
                <span class="aMinput">
                    <input type="date" name="inputNaissance" value="" id="aMNaissanceInput">
                </span>
            </div>
        </div>
        <div class="addModalRow">
            <div class="aMlabelContainer">
                <span class="aMLabel">Adresse Email</span>
            </div>
            <div class="aMInputContainer">
                <span class="aMinput">
                    <input type="text" name="inputEmail" value="" placeholder="kpokuiSystem@kpraa.com" id="aMEmailInput">
                </span>
            </div>
        </div>
        <div class="addModalRow">
            <div class="aMlabelContainer">
                <span class="aMLabel">Phone</span>
            </div>
            <div class="aMInputContainer">
                <span class="aMinput">
                    <input type="tel" name="innputPhone" value="" placeholder="+000 00 00 00 00" id="aMPhoneInput">
                </span>
            </div>
        </div>
        <div class="addModalRow">
            <div class="aMlabelContainer">
                <span class="aMLabel">Sexe</span>
            </div>
            <div class="aMInputContainer">
                <span class="aMinput">
                    <select name="sexeInput" id="aMSexeInput">
                        <option value="default">Select Sexe</option>
                        <option value="m">Masculin</option>
                        <option value="f">Féminin</option>
                    </select>
                </span>
            </div>
        </div>
        <div class="addModalRow">
            <div class="aMlabelContainer">
                <span class="aMLabel">Commentaire</span>
            </div>
            <div class="aMInputContainer">
                <span class="aMinput">
                    <textarea type="tel" name="inputCom" value="" placeholder="Entrez Votre Commentaire ..." id="aMComInput"></textarea>
                </span>
            </div>
        </div>
        <div class="addModalBtnsRow">
            <div class="aMBtnContainer">
                <span class="btn aMResetBtn" onclick="resetUserEntries()">Reset</span>
            </div>
            <div class="aMBtnContainer">
                <span class="aMBtnContainer">
                    <span class="btn aMSaveBtn" onclick="getUserEntries()">Save</span>
                </span>
            </div>
        </div>
    </div>
</form>`;
        let forModifie = ` <div class="modalHeader">
<div class="leftPart"><span class="modalTitle">Modification</span></div>
<div class="middlePart"></div>
<div class="rightPart">
    <span class="iconContainer" onclick="headerOps.destructModal()">
        <span><i class="fa-solid fa-xmark"></i></span>
    </span>
</div>
</div>
<form id="addForm">    
<div class="addModalMain">
<div class="addModalRow">
    <div class="aMlabelContainer">
        <span class="aMLabel">ID</span>
    </div>
    <div class="aMInputContainer">
        <span class="aMinput">
            <input type="text" class="inputToModifie" name="" value="${dataToModifie.id}" id="aMIdInput" disabled="disabled">
        </span>
    </div>
</div>
<div class="addModalRow">
    <div class="aMlabelContainer">
        <span class="aMLabel">Nom</span>
    </div>
    <div class="aMInputContainer">
        <span class="aMinput">
            <input type="text" class="inputToModifie" name="inputNom" value="${dataToModifie.nom}" placeholder="Veuillez entrer votre Nom ..." id="aMNomInput">
        </span>
    </div>
</div>
<div class="addModalRow">
    <div class="aMlabelContainer">
        <span class="aMLabel">Prénom.s</span>
    </div>
    <div class="aMInputContainer">
        <span class="aMinput">
            <input type="text" class="inputToModifie" name="inputPrenom" value="${dataToModifie.prenoms}" placeholder="Entrez vo(s)tre prénom.s ..." id="aMPrenomInput">
        </span>
    </div>
</div>
<div class="addModalRow">
    <div class="aMlabelContainer">
        <span class="aMLabel">Date de Naissance</span>
    </div>
    <div class="aMInputContainer">
        <span class="aMinput">
            <input type="date" class="inputToModifie" name="inputNaissance" value="${dataToModifie.dateNaissance}" id="aMNaissanceInput">
        </span>
    </div>
</div>
<div class="addModalRow">
    <div class="aMlabelContainer">
        <span class="aMLabel">Adresse Email</span>
    </div>
    <div class="aMInputContainer">
        <span class="aMinput">
            <input type="text" class="inputToModifie" name="inputEmail" value="${dataToModifie.email}" placeholder="kpokuiSystem@kpraa.com" id="aMEmailInput">
        </span>
    </div>
</div>
<div class="addModalRow">
    <div class="aMlabelContainer">
        <span class="aMLabel">Phone</span>
    </div>
    <div class="aMInputContainer">
        <span class="aMinput">
            <input type="tel" class="inputToModifie" name="inputPhone" value="${dataToModifie.phone}" placeholder="+000 00 00 00 00" id="aMPhoneInput">
        </span>
    </div>
</div>
<div class="addModalRow">
    <div class="aMlabelContainer">
        <span class="aMLabel">Sexe</span>
    </div>
    <div class="aMInputContainer">
        <span class="aMinput">
            <select name="sexeInput" class="inputToModifie" id="aMSexeInput">
                <option value="default" >Select Sexe</option>
                <option value="m">Masculin</option>
                <option value="f">Féminin</option>
            </select>
        </span>
    </div>
</div>
<div class="addModalRow">
    <div class="aMlabelContainer">
        <span class="aMLabel">Commentaire</span>
    </div>
    <div class="aMInputContainer">
        <span class="aMinput">
            <textarea type="tel" name="inputCom" class="inputToModifie" value="" placeholder="Entrez Votre Commentaire ..." id="aMComInput">${dataToModifie.com}</textarea>
        </span>
    </div>
</div>
<div class="addModalBtnsRow">
    <div class="aMBtnContainer" style="display:none;">
        <span class="btn aMResetBtn" onclick="resetUserEntries()">Reset</span>
    </div>
    <div class="aMBtnContainer">
        <span class="aMBtnContainer">
            <span class="btn aMSaveBtn" id="saveModifBtn" >Save</span>
        </span>
    </div>
</div>
</div>
</form>`;
        let forAffiche = `<div class="modalHeader">
        <div class="leftPart"><span class="modalTitle">User ${affichage.id}</span></div>
        <div class="middlePart"></div>
        <div class="rightPart">
            <span class="iconContainer" onclick="headerOps.destructModal()">
                <span><i class="fa-solid fa-xmark"></i></span>
            </span>
        </div>
    </div>
    <div class="modalMain">
        <div class="modalMainRow">
            <div class="profilImgContainer">
                <img src="./Assets/images/YoWEB-20211118232653.jpg" alt="" class="profilImg">
            </div>
            <div class="nomPrenomsContainer">
                <div class="elmts">
                    <span class="nomContainer">Nom:</span><span>${affichage.nom}</span>
                </div>
                <div class="elmts">
                    <span class="prenomContainer">Prénom:</span><span id="prenomContainer">${affichage.prenoms}</span>
                </div>
            </div>
        </div>
        <div class="mainMiddleRow elmts">
            <span class="dateNaissance">Date de Naissance:</span><span>${affichage.date}</span>
        </div>
        <div class="mainMiddleRow  elmts">
            <span class="adresseEmail">Adresse Email:</span><span>${affichage.email}</span>
        </div>
        <div class="mainMiddleRow  elmts">
            <span class="phone">Phone:</span><span>${affichage.phone}</span>
        </div>
        <div class="mainMiddleRow  elmts">
            <span class="sexe">Sexe:</span><span>${affichage.sexe}</span>
        </div>
        <div class="mainMiddleRow  elmts">
            <span class="commentaire">Commentaire:</span><textarea disabled="disabled">${affichage.com}</textarea>
        </div>
    </div>
    <div class="mainFoot">
            <span class="modalModifBtn">Modifier</span>
    </div>`;
    let element = document.querySelector('.modalContainer');
    let elementSon = document.querySelector('.modal');
        if(modal === 'profilUser'){
            htmlToInsert = forProfil;
        } else if(modal === 'addPerson'){
            htmlToInsert = forAdd;
        } else if(modal === 'modifPerson'){
            htmlToInsert = forModifie;
        } else if(modal === 'forAffiche'){
            htmlToInsert = forAffiche;
        }
        
    elementSon.innerHTML = htmlToInsert;
    element.classList.add('blk');
        
    }

    destructModal(){
        let element = document.querySelector('.modalContainer');
        element.classList.remove('blk');
        // window.location.reload();
    }
}

class ManagePersonnes{
    static getElmtValue(elmt){
        let element = document.querySelector(elmt);
        return element.value;
    }
    static setElmtValue(elmt,value){
        let element = document.querySelector(elmt);
        element.value = value;
    }
}

function getStorageValues(){
    if(localStorage.personnes){
        let existants = JSON.parse(localStorage.personnes);
        if(localStorage.niveauId){
            idTable = parseInt(JSON.parse(localStorage.niveauId));
        }

        existants.forEach(elmt => insertInDom(elmt)); 
        // console.log(existants);
    }
}
getStorageValues();

var elementsInseres = document.querySelectorAll('div.TableLinesContainer>.tableHeadContainer');
// console.log(elementsInseres);
var nbrPersonnes = elementsInseres.length;

function raffraichissement(){
    elementsInseres = document.querySelectorAll('div.TableLinesContainer>.tableHeadContainer');
    // console.log(elementsInseres);
    nbrPersonnes = elementsInseres.length;
}

let headerOps = new HeaderOps;
// headerOps.showModal();
setInterval(()=> HeaderOps.insertDate(), 1000);

function eventStop2(event){
    event.stopImmediatePropagation();
}



// Obtenir les données de l'utilisateur
function getUserEntries(){
    let objet = {
        id: (idTable + 1) >= 10 ? (idTable + 1) : ('0' + (idTable + 1)),
        nom: ManagePersonnes.getElmtValue('#aMNomInput'),
        prenoms: ManagePersonnes.getElmtValue('#aMPrenomInput'),
        dateNaissance: ManagePersonnes.getElmtValue('#aMNaissanceInput'),
        email: ManagePersonnes.getElmtValue('#aMEmailInput'),
        phone: ManagePersonnes.getElmtValue('#aMPhoneInput'),
        sexe: ManagePersonnes.getElmtValue('#aMSexeInput') === 'm' ? 'Masculin' : (ManagePersonnes.getElmtValue('#aMSexeInput') === 'f' ? 'Féminin' : 'Non Binaire'),
        com: ManagePersonnes.getElmtValue('#aMComInput')
    };
    insertInDom(objet);
    idTable++;
}


function insertInDom(infosUser){
    let parentElement = document.querySelector('.TableLinesContainer');
    let firstElement = document.querySelector('.TableLinesContainer>.tableHeadContainer:first-child');
    let newElement = document.createElement('div');
    newElement.classList.add('tableHeadContainer');
    newElement.classList.add('gH');
    newElement.setAttribute("id", `line${infosUser.id}`);
    parentElement.insertBefore(newElement, firstElement);
    document.querySelector('.TableLinesContainer>.tableHeadContainer:first-child').innerHTML = ` <div class="tableColumn td5">
        <span><input type="checkbox" name="" class="checkLine"></span>
        </div>
        <div class="tableColumn td10">
            <span id="idCont${infosUser.id}">${infosUser.id}</span>
        </div>
        <div class="tableColumn td15">
            <span id="nomCont${infosUser.id}">${infosUser.nom}</span>
        </div>
        <div class="tableColumn td15">
            <span id="prenomCont${infosUser.id}">${infosUser.prenoms}</span>
        </div>
        <div class="tableColumn td10">
            <span id="naissanceCont${infosUser.id}">${infosUser.dateNaissance}</span>
        </div>
        <div class="tableColumn td15">
            <span id="emailCont${infosUser.id}">${infosUser.email}</span>
        </div>
        <div class="tableColumn td15">
            <span id="phoneCont${infosUser.id}">${infosUser.phone}</span>
        </div>
        <div class="tableColumn td5">
            <span id="sexeCont${infosUser.id}">${infosUser.sexe}</span>
        </div>
        <div class="tableColumn td5" style="display:none;">
            <span id="comCont${infosUser.id}">${infosUser.com}</span>
        </div>
        <div class="tableColumn td10">
            <span><i class="fa-solid fa-pencil" onclick="modifPerson(event)"></i></span>
            <span><i class="fa-solid fa-eye" onclick="eyeClicked(event)"></i></span>
            <span><i class="fa-solid fa-xmark" onclick="deleteClicked(event)"></i></span>
            <span><i class="fa-solid fa-comment" title="" onmouseover="mouseOvCom(event)"></i></span>
        </div>`;
        raffraichissement();
        if(document.querySelector('.modalContainer').classList.contains('blk')){
            headerOps.destructModal();
        }
        insertionMemoire();
}

// Création du Tableau
function insertionMemoire(){
    let personnes = [];
    // for(let i = 1; i <= (idTable + 1); i++){
    //     personnes.push({
    //         id: document.querySelector(`.TableLinesContainer>.tableHeadContainer:nth-child(${i}) #idCont`).textContent,
    //         nom: document.querySelector(`.TableLinesContainer>.tableHeadContainer:nth-child(${i}) #nomCont`).textContent,
    //         prenoms: document.querySelector(`.TableLinesContainer>.tableHeadContainer:nth-child(${i}) #prenomCont`).textContent,
    //         dateNaissance: document.querySelector(`.TableLinesContainer>.tableHeadContainer:nth-child(${i}) #naissanceCont`).textContent,
    //         email: document.querySelector(`.TableLinesContainer>.tableHeadContainer:nth-child(${i}) #emailCont`).textContent,
    //         phone: document.querySelector(`.TableLinesContainer>.tableHeadContainer:nth-child(${i}) #phoneCont`).textContent,
    //         sexe: document.querySelector(`.TableLinesContainer>.tableHeadContainer:nth-child(${i}) #sexeCont`).textContent
    //     });
    // }
    elementsInseres.forEach(elmt => {
        personnes.unshift({
            id: elmt.children[1].children[0].firstChild.data,
            nom: elmt.children[2].children[0].firstChild.data,
            prenoms: elmt.children[3].children[0].firstChild.data,
            dateNaissance: elmt.children[4].children[0].firstChild.data,
            email: elmt.children[5].children[0].firstChild.data,
            phone: elmt.children[6].children[0].firstChild.data,
            sexe: elmt.children[7].children[0].firstChild.data,
            com: elmt.children[8].children[0].firstChild.data
        })
    });
    let stringFormOfTableau = JSON.stringify(personnes);
    localStorage.clear();
    localStorage.setItem('personnes', stringFormOfTableau);
    localStorage.setItem('niveauId', idTable);
}

// Reseter les données de l'Utilisaeur ...
function resetUserEntries(){
    document.getElementById('addForm').reset();
}

function deleteClicked(event){
    let id = event.target.parentNode.parentNode.parentNode.id;
    let classParent = event.target.parentNode.parentNode.parentNode.parentNode.className;
    let elmt = document.getElementById(id);
    let parentElmt = document.querySelector('.' + classParent);
    let elmtName = document.querySelector(`#${id}>div:nth-child(3)>span`).textContent;
    let elmtPrenom = document.querySelector(`#${id}>div:nth-child(4)>span`).textContent;
    if(confirm('Voulez-Vous vraiment supprimer l\'élément \n\n' + elmtName + ' ' + elmtPrenom +' ?' )){
        parentElmt.removeChild(elmt);
        console.log(id);
        // personnes.splice(id.parseInt() - 1, 1);
        // TableauPersonnes.listPersonnes();
    }
    console.log(event);
    raffraichissement();
    insertionMemoire()
}

document.querySelectorAll('.checkLine').forEach((element) => {
   
    // let tableElmtsCliqués = [];
    element.addEventListener('change', (event) => {
        console.log(event);
        console.log(parseInt(event.target.parentNode.parentNode.parentNode.children[1].children[0].textContent))
        console.log(event.target.checked);
        if(event.target.checked === true){
            element.classList.add('checkedForDelete');
            // console.log(element.classList);
            // let idClicked = parseInt(event.target.parentNode.parentNode.parentNode.id);
            // tableElmtsCliqués.push()
        } else {
            element.classList.toggle('checkedForDelete');
        }
    });
});

function deleteChecked(){
    // let id = [];
    let allCheckedLines = document.querySelectorAll('.checkedForDelete');
    if(allCheckedLines.length !== 0){
        if(confirm('Voulez-Vous vraiment supprimer tout ces elements ?' )){
            allCheckedLines.forEach((elmt) => {
                // console.log(elmt.parentNode.parentNode.parentNode.id);
                let classParent = elmt.parentNode.parentNode.parentNode.parentNode.className;
                let toDel = document.getElementById(elmt.parentNode.parentNode.parentNode.id);
                let parentElmt = document.querySelector('.' + classParent);
                // let elmtName = document.querySelector(`#${id}>div:nth-child(3)>span`).textContent;
                // let elmtPrenom = document.querySelector(`#${id}>div:nth-child(4)>span`).textContent;
                parentElmt.removeChild(toDel);
                // console.log(id);
            });
            // personnes.splice(id.parseInt() - 1, 1);
            // TableauPersonnes.listPersonnes();
        }
        raffraichissement();
        insertionMemoire();
    }
    else {
        alert('Aucun element sélectionné !!!');
    }
    // console.log(event);
}

function eyeClicked(event){
    let seeState = event.target.parentNode.parentNode.parentNode;
    // seeState.classList.toggle('hideLine');
    // setTimeout(() => seeState.classList.toggle('none'), 500);
    affichage = {
        id: seeState.children[1].children[0].firstChild.data,
        nom: seeState.children[2].children[0].firstChild.data,
        prenoms: seeState.children[3].children[0].firstChild.data,
        dateNaissance: seeState.children[4].children[0].firstChild.textContent,
        email: seeState.children[5].children[0].firstChild.data,
        phone: seeState.children[6].children[0].firstChild.data,
        sexe: seeState.children[7].children[0].firstChild.textContent,
        com: seeState.children[8].children[0].firstChild.data
    }
    headerOps.showModal('forAffiche');
}

function mouseOvCom(event){
    let com = event.target.parentNode.parentNode.parentNode.children[8].children[0].textContent;
    if(com.length >= 26){
        let comMin = com.toString().slice(0, 25) + '...';
        event.target.title = comMin;
    } else {
        event.target.title = com;
    }
}

document.querySelector('.AffichAll').onclick = () => {
    document.querySelectorAll('.tableHeadContainer').forEach(elmt => {
        if(elmt.classList.contains('hideLine') && elmt.classList.contains('hideLine')) {
            elmt.classList.toggle('hideLine');
            setTimeout(() => elmt.classList.toggle('none'), 500);
        }
    })
};

function modifPerson(event){
    console.log(event);
    let elmt = event.target.parentNode.parentNode.parentNode;
    let nom = elmt.children[2].children[0].textContent;

    dataToModifie.id = elmt.children[1].children[0].textContent;
    dataToModifie.nom = elmt.children[2].children[0].textContent;
    dataToModifie.prenoms = elmt.children[3].children[0].textContent;
    dataToModifie.dateNaissance = elmt.children[4].children[0].textContent;
    dataToModifie.email = elmt.children[5].children[0].textContent;
    dataToModifie.phone = elmt.children[6].children[0].textContent;
    dataToModifie.sexe = elmt.children[7].children[0].textContent;
    dataToModifie.com = elmt.children[8].children[0].textContent;
    headerOps.showModal('modifPerson');
    console.log(elmt.children[8].children[0].textContent); 


    let inputModif = document.querySelectorAll('.inputToModifie');
    let saveBtn = document.querySelector('#saveModifBtn');
    function actualiseDom(){
        elmt.children[1].children[0].textContent = ManagePersonnes.getElmtValue('#aMIdInput');
        elmt.children[2].children[0].textContent = ManagePersonnes.getElmtValue('#aMNomInput');
        elmt.children[3].children[0].textContent = ManagePersonnes.getElmtValue('#aMPrenomInput');
        elmt.children[4].children[0].textContent = ManagePersonnes.getElmtValue('#aMNaissanceInput');
        elmt.children[5].children[0].textContent = ManagePersonnes.getElmtValue('#aMEmailInput');
        elmt.children[6].children[0].textContent = ManagePersonnes.getElmtValue('#aMPhoneInput');
        elmt.children[7].children[0].textContent = ManagePersonnes.getElmtValue('#aMSexeInput') == 'm' ? 'Masculin' : (ManagePersonnes.getElmtValue('#aMSexeInput') === 'Féminin' ? 'f' : 'default');
        elmt.children[8].children[0].textContent = document.querySelector('#aMComInput').value;
        // console.log(document.querySelector('#aMComInput'));
    }
    inputModif.forEach(element => {
        element.addEventListener("keyup", () => {
        // alert(ManagePersonnes.getElmtValue('#aMNomInput'))
        actualiseDom();
        });
    }) 
    saveBtn.addEventListener("click", () => {
        insertionMemoire();
        headerOps.destructModal();
    })
}
div = document.getElementById('sendId');
myId = div.getAttribute('portId');




async function loadDate(){
 let db = firebase.database();   
 let user = firebase.auth().currentUser.uid;
 if(firebase.auth().currentUser){
    let snapshot  = await db.ref('/users/'+ user + '/currentPortfolio/' + myId).once("value");
    let listData = snapshot.child('/form').val();
    // console.log('----------')
    console.log(listData);

    if(snapshot.exists())
    {
       let surname = document.getElementById("idsurname");
       surname.value = listData.surname;
       let name = document.getElementById("idname");
       name.value = listData.name;
       let patr = document.getElementById("idpatronymic");
       patr.value = listData.patronymic;
       let dateOfBith = document.getElementById("idbirth");
       dateOfBith.value = listData.dateOfBith;
       let citiz = document.getElementById("idcitiz");
       citiz.value = listData.citiz;
       let radio = document.getElementsByName('radio');
       radio.value = listData.gender;
       let contactEmail = document.getElementById('idmail');
       contactEmail.value = listData.contactEmail;
       let contactphone = document.getElementById("idtext");
       contactphone.value = listData.contactphone;
       let startMonth = document.getElementById("idStartMonth");
       startMonth.value = listData.startMonth;
       let startYear = document.getElementById("idstartYear");
       startYear.value = listData.startYear;
       let finishMonth = document.getElementById("idFinishMonth");
       finishMonth.value = listData.finishMonth;
       let finishYear = document.getElementById("idfinishYear");
       finishYear.value = listData.finishYear;
       let position = document.getElementById("idposition");
       position.value = listData.position;
       let company = document.getElementById("idcompany");
       company.value = listData.company;
       let site = document.getElementById("idsite");
       site.value = listData.site;
       let skills = document.getElementById("textarea");
       skills.value = listData.skills;
       let store =  document.getElementById("idinform");
       store.value = listData.store;
    }
    
 }
   // let fam = document.getElementById("idsurname");
   // fam.value = 'Тупой';
}


loadDate();



pushBtn = document.getElementById("buttondSend");
pushBtn.addEventListener('click', function(event){
	event.preventDefault();
	let surname =  document.getElementById("idsurname").value;
	let name =  document.getElementById("idname").value;
	let patr =  document.getElementById("idpatronymic").value;
	let dateOfBith =  document.getElementById("idbirth").value;
	let citiz = document.getElementById("idcitiz").value;
	let radio = document.getElementsByName('radio');
	let gender;
	for (var i = 0; i < radio.length; i++) {
        if (radio[i].type == "radio" && radio[i].checked) {
            gender = radio[i].value;
        }
    }
    let contactEmail = document.getElementById('idmail').value;
    let contactphone = document.getElementById("idtext").value;
    let startMonth = document.getElementById("idStartMonth").value;
    let startYear = document.getElementById("idstartYear").value;
    let finishMonth = document.getElementById("idFinishMonth").value;
    let finishYear = document.getElementById("idfinishYear").value;
    let position = document.getElementById("idposition").value;
    let company = document.getElementById("idcompany").value;
    let site = document.getElementById("idsite").value;
    let skills = document.getElementById("textarea").value;
    let store =  document.getElementById("idinform").value;

    let db = firebase.database();   
    let uid = firebase.auth().currentUser.uid;
    db.ref('/users/'+ uid + '/currentPortfolio/' + myId + '/form').set({
        idEdit: myId,
        surname : surname,
        name : name,
        patronymic : patr,
        dateOfBith: dateOfBith,
        citiz : citiz,
        gender : gender,
        contactEmail : contactEmail,
        contactphone : contactphone,
        startMonth : startMonth,
        startYear : startYear,
        finishMonth : finishMonth,
        finishYear : finishYear,
        position : position,
        company : company,
        site : site,
        skills : skills,
        store : store
    });
    onNavigate('/main');
});





// const addFormBtn = doc.getElementById("buttonForm23");
// const formContainer = doc.getElementById("formWork");
// addFormBtn.addEventListener('click', function(event){
// 	event.preventDefault();
// 	let newForm = doc.createElement('div');
// 	newForm.className = 'edit-forms-exp';
// 	newForm.innerHTML = `<div class="edit-fe-div">
// 					<label class="edit-fe-label" for="idstart">Начало работы</label><br>
// 					<select class="edit-fe-select">
// 				        <option value="january">Январь</option>
// 				        <option value="february">Февраль</option>
// 				        <option value="march">Март</option>
// 				        <option value="april">Апрель</option>
// 				        <option value="may">Май</option>
// 				        <option value="june">Июнь</option>
// 				        <option value="july">Июль</option>
// 				        <option value="august">Август</option>
// 				        <option value="september">Сентябрь</option>
// 				        <option value="october">Октябрь</option>
// 				        <option value="november">Ноябрь</option>
// 				        <option value="december">Декабрь</option>
//     				</select>
//     				<input class="edit-fe-input" id="idstart "type="text" name="year-start" placeholder="2019">
// 				</div>
// 				<div class="edit-fe-div">
// 					<label class="edit-fe-label" for ="idselect">Окончание</label><br>
// 					<select class="edit-fe-select" >
// 				        <option value="january">Январь</option>
// 				        <option value="february">Февраль</option>
// 				        <option value="march">Март</option>
// 				        <option value="april">Апрель</option>
// 				        <option value="may">Май</option>
// 				        <option value="june">Июнь</option>
// 				        <option value="july">Июль</option>
// 				        <option value="august">Август</option>
// 				        <option value="september">Сентябрь</option>
// 				        <option value="october">Октябрь</option>
// 				        <option value="november">Ноябрь</option>
// 				        <option value="december">Декабрь</option>
//     				</select>
//     				<input class="edit-fe-input" id="idselect" type="text" name="year-start" placeholder="2020">    				
// 				</div>
// 				<div class="edit-fe-div">
// 					<input class="edit-input" id="idposition" type="text" name="position" placeholder="Web-разработчик">
// 					<label class="edit-label" for="idposition">Должность</label>
// 				</div>
// 				<div class="edit-fe-div">
// 					<input class="edit-input" id="idcompany" type="text" name="company" placeholder="Wargaming">
// 					<label class="edit-label" for="idcompany">Организация</label>
// 				</div>
// 				<div class="edit-fe-div">
// 					<input class="edit-input" id="idsite" type="text" name="site" placeholder="http://">
// 					<label class="edit-label" for ="idsite">Cайт</label>
// 				</div>
// 				<div class="edit-fe-div-bigger">
// 					<label class="edit-fe-label" for="textarea">Обязанности на рабочем месте</label><br>					
// 					<textarea class="edit-fe-textarea" id="textarea" rows="5" name="textarea-skills"></textarea>
// 				</div>
// 				<div class="edit-fe-div-bigger">
// 					<label class="edit-fe-label" for="idinform">О себе</label><br>					
// 					<textarea class="edit-fe-textarea" id="idinform" rows="5" name="textarea"></textarea>
// 				</div>`;
// 	formContainer.appendChild(newForm);
// })
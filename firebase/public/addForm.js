const doc =  document;
const addFormBtn = doc.getElementById("buttonForm23");
const formContainer = doc.getElementById("formWork");
addFormBtn.addEventListener('click', function(event){
	event.preventDefault();
	let newForm = doc.createElement('div');
	newForm.className = 'edit-forms-exp';
	newForm.innerHTML = `<div class="edit-fe-div">
					<label class="edit-fe-label" for="idstart">Начало работы</label><br>
					<select class="edit-fe-select">
				        <option value="january">Январь</option>
				        <option value="february">Февраль</option>
				        <option value="march">Март</option>
				        <option value="april">Апрель</option>
				        <option value="may">Май</option>
				        <option value="june">Июнь</option>
				        <option value="july">Июль</option>
				        <option value="august">Август</option>
				        <option value="september">Сентябрь</option>
				        <option value="october">Октябрь</option>
				        <option value="november">Ноябрь</option>
				        <option value="december">Декабрь</option>
    				</select>
    				<input class="edit-fe-input" id="idstart "type="text" name="year-start" placeholder="2019">
				</div>
				<div class="edit-fe-div">
					<label class="edit-fe-label" for ="idselect">Окончание</label><br>
					<select class="edit-fe-select" >
				        <option value="january">Январь</option>
				        <option value="february">Февраль</option>
				        <option value="march">Март</option>
				        <option value="april">Апрель</option>
				        <option value="may">Май</option>
				        <option value="june">Июнь</option>
				        <option value="july">Июль</option>
				        <option value="august">Август</option>
				        <option value="september">Сентябрь</option>
				        <option value="october">Октябрь</option>
				        <option value="november">Ноябрь</option>
				        <option value="december">Декабрь</option>
    				</select>
    				<input class="edit-fe-input" id="idselect" type="text" name="year-start" placeholder="2020">    				
				</div>
				<div class="edit-fe-div">
					<input class="edit-input" id="idposition" type="text" name="position" placeholder="Web-разработчик">
					<label class="edit-label" for="idposition">Должность</label>
				</div>
				<div class="edit-fe-div">
					<input class="edit-input" id="idcompany" type="text" name="company" placeholder="Wargaming">
					<label class="edit-label" for="idcompany">Организация</label>
				</div>
				<div class="edit-fe-div">
					<input class="edit-input" id="idsite" type="text" name="site" placeholder="http://">
					<label class="edit-label" for ="idsite">Cайт</label>
				</div>
				<div class="edit-fe-div-bigger">
					<label class="edit-fe-label" for="textarea">Обязанности на рабочем месте</label><br>					
					<textarea class="edit-fe-textarea" id="textarea" rows="5" name="textarea-skills"></textarea>
				</div>
				<div class="edit-fe-div-bigger">
					<label class="edit-fe-label" for="idinform">О себе</label><br>					
					<textarea class="edit-fe-textarea" id="idinform" rows="5" name="textarea"></textarea>
				</div>`;
	formContainer.appendChild(newForm);
})

const pushBtn = doc.getElementById("buttondSend");
pushBtn.addEventListener('click', function(event){
	event.preventDefault();
	let surname =  doc.getElementById("idsurname").value;
	let name =  doc.getElementById("idname").value;
	let patr =  doc.getElementById("idpatronymic").value;
	let dateOfBith =  doc.getElementById("idbirth").value;
	let citiz = doc.getElementById("idcitiz").value;
	let radio = doc.getElementsByName('radio');
	let gender;
	for (var i = 0; i < radio.length; i++) {
        if (radio[i].type == "radio" && radio[i].checked) {
            gender = radio[i].value;
        }
    }
    let contactEmail = doc.getElementById('idmail').value;
    let contactphone = doc.getElementById("idtext").value;
    let startMonth = doc.getElementById("idStartMonth").value;
    let startYear = doc.getElementById("idstartYear").value;
    let finishMonth = doc.getElementById("idFinishMonth").value;
    let finishYear = doc.getElementById("idfinishYear").value;
    let position = doc.getElementById("idposition").value;
    let company = doc.getElementById("idcompany").value;
    let site = doc.getElementById("idsite").value;
    let skills = doc.getElementById("textarea").value;
    let store =  doc.getElementById("idinform").value;
    if(surname == "")
    	alert('Для отправки формы необходимо заполнить фамилию!');
    
})
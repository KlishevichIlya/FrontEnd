const edit =  `<body class="edit-body">
	<header>
		<div class="header-logo"></div>
		<nav>
			<ul>
				<li id="main-nav-item" lang="ru">
					<a id = "portfolio" href="main.html">Портфолио</a>
				</li>
				<li id="logout-nav-item" lang="ru">
					<a id = "exit" href="enter.html">Выход</a>
				</li>

			</ul>
		</nav>
	</header>
</body>
<main class="edit-main">
	<form class="edit-form">
			<div class="edit-phrase">
				<h1>Ваша Анкета</h1>
			</div>
			<div>
				<h2 class="edit-text">Личная информация</h2>
			</div>
			<div class="edit-box">
				<input class="edit-input big-letter" id="idsurname" type="text" name="surname" placeholder="Иванов" required>
				<label class="edit-label" for="idsurname">Фамилия</label>
			</div>
			<div class="edit-box">
				<input class="edit-input big-letter" id="idname" type="text" name="name" placeholder="Иван" required>
				<label class="edit-label" for="idname">Имя</label>
			</div>
			<div class="edit-box">
				<input class="edit-input big-letter" id="idpatronymic" type="text" name="patronymic" placeholder="Иванович" required>
				<label class="edit-label" for="idpatronymic">Отчество</label>
			</div>
			<div class="edit-box">
				<input class="edit-input" type="date" id="idbirth" name="date-of-birthaday" required>
				<label class="edit-label" for="idbirth">Дата рождения</label>
			</div>
			<div class="edit-box">
				<input class="edit-input big-letter" id="idcitiz" type="text" name="citizenship" placeholder="Белорус" required>
				<label class="edit-label" for="idcitiz">Гражданство</label>
			</div>
			<div class="edit-box">
				<label class="edit-radio">Семейное положение</label></br>
				<div class="form_toggle">
					<div class="form_toggle-item item-1">
						<input id="fid-1" type="radio" name="radio" value="married" checked>
						<label for="fid-1">Женат</label>
					</div>
					<div class="form_toggle-item item-2">
						<input id="fid-2" type="radio" name="radio" value="free">
						<label for="fid-2">Холост</label>
					</div>
				</div>
			</div>
			<div>
				<h2 class="edit-text">Контактная информация</h2>
			</div>
			<div class="edit-box">
				<input class="edit-input" id="idmail" type="text" name="mail" placeholder="ivanov.ivan@gmail.com" required>
				<label class="edit-label" for="idmail">Почта</label>
			</div>
			<div class="edit-box">
				<input class="edit-input" id="idtext" type="tel" name="number-phone" required>
				<label class="edit-label" for="idtext">Телефон</label>
			</div>
			<div>
				<h2 class="edit-text">Опыт работы</h2>
			</div>
			<div id = "formWork">
			<div class="edit-forms-exp">
				<div class="edit-fe-div">
					<label class="edit-fe-label" for="idstart">Начало работы</label><br>
					<select class="edit-fe-select" id = "idStartMonth">
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
    				<input class="edit-fe-input" id="idstartYear" type="text" name="year-start" placeholder="2019">
				</div>
				<div class="edit-fe-div">
					<label class="edit-fe-label" for ="idselect">Окончание</label><br>
					<select class="edit-fe-select" id = "idFinishMonth">
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
    				<input class="edit-fe-input" id="idfinishYear" type="text" name="year-start" placeholder="2020">    				
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
				</div>
				
				
			</div>
			</div>
			
			
			<button class="edit-button" id = "buttondSend" type="submit">Сохранить</button>
	</form>
</main>`;
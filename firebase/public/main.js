const main = `<header>
		<div class="header-logo"></div>
		<nav>
			<ul>
				<li id="main-nav-item" lang="ru">
					<a id = "portfolio" onclick="onNavigate('/login')">Портфолио</a>
				</li>
				<li id="logout-nav-item" lang="ru">
					<a id = "exit">Выход</a>
				</li>

			</ul>
		</nav>
	</header>

	<div class = "main-phrase">
		<h1>Ваши портфолио</h1>
	</div>
	<div class ="container">
	<aside>
		<div>
			<img class="circle" src="images/avatar.png" alt="Аватарка">
		</div>
		<p>Иванов Иван</p>
		<p>01.01.1999</p>
	</aside>
	<main class="stylemain">	
		<ul class="portfolios" id = "listContainer">
			<li class="without-list-type">
				<a id = "createList">
					<div class="card-create">
						<img class="creator-link" src="images/add_info.png" alt="">
					</div>
				</a>
			</li>
			<li class="without-list-type">
				<a class="without-text-decoration" onclick = "onNavigate('/edit')">
					<div class="card-info">
						<img class = "item-img" src="images/avatar.png">
						<p class="item-name text ellipsis"><span>Портфолио Google</span></p>
						<p class = "item-date text small">Создано: 02.02.2019</p>
						<p class = "item-desc text usual">Это мое портфолио специально для Сергея Брина</p>
					</div>
				</a>
			</li>
			<li class="without-list-type">
				<a class = "without-text-decoration" href="#8888">
					<div class="card-info">
						<img class = "item-img" src="images/avatar.png">
						<p class="item-name text ellipsis"><span>Портфолио Facebook</span></p>
						<p class = "item-date text small">Создано: 03.03.2019</p>
						<p class = "item-desc text usual">Это мое портфолио специально для Марка Цукерберга</p>
					</div>
				</a>
			</li>
			<li class="without-list-type">
				<a class = "without-text-decoration" href="#9999">
					<div class="card-info">
						<img class = "item-img" src="images/avatar.png">
						<p class="item-name text ellipsis"><span>Портфолио Apple</span></p>
						<p class = "item-date text small">Создано: 02.04.2020</p>
						<p class = "item-desc text usual">Это мое портфолио специально для Тима Кука</p>
					</div>
				</a>
			</li>
			<li class="without-list-type">
				<a class = "without-text-decoration" href="#1111">
					<div class="card-info">
						<img class = "item-img" src="images/avatar.png">
						<p class="item-name text ellipsis"><span>Портфолио Tesla</span></p>
						<p class = "item-date text small">Создано: 01.12.2019</p>
						<p class = "item-desc text usual">Это мое портфолио специально для Илона Маска</p>
					</div>
				</a>
			</li>
			<!-- <li class="without-list-type">
				<a class = "without-text-decoration" href="#2222">
					<div class="card-info">
						<img class = "item-img" src="images/avatar.png">
						<p class="item-name text ellipsis"><span>Портфолио Telegram</span></p>
						<p class = "item-date text small">Создано: 10.12.2017</p>
						<p class = "item-desc text usual">Это мое портфолио специально для Павла Дурова</p>
					</div>
				</a>
			</li> -->

			
		</ul>		
		
	</main>
	</div>
	<footer>
		<a href="https://vk.com/ilya_klishevich" target="_blank">
			<img class="footer-img" src="images/vk.png" alt="">
		</a>
		<a href="https://www.instagram.com/i_klishevich/" target="_blank">
			<img class="footer-img" src="images/inst.png" alt="">
		</a>
		<a href="https://github.com/KlishevichIlya" target="_blank">
			<img class="footer-img" src="images/cat.png" alt="">
		</a>
	</footer>	
</body>`;
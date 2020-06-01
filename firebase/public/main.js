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

// async function updateList(){
// 	let db = firebase.database();
// 	let user;
// 	if(firebase.auth().currentUser)
// 		user =  firebase.auth().currentUser.uid
// 	let portfolios = await db.ref('/users'+user+'/currentPortfolio').once("value");
// 	console.log('/users'+ '/' +user+'/currentPortfolio');
// 	let listPortf = portfolios.val();
// 	// console.log(listPortf);
// }


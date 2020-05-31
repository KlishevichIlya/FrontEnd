const doc =  document;
const createBtn = doc.getElementById("createList");
const listContainer = doc.getElementById("listContainer");
createBtn.addEventListener('click', function(){
	let portfolioLi = doc.createElement('li');
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth();
	let year =  date.getFullYear();
	let name = 'Портфолио';
	let store = 'Ваше новое портфолио';
	switch(month){
	  case 0: fMonth="января"; break;
	  case 1: fMonth="февраля"; break;
	  case 2: fMonth="марта"; break;
	  case 3: fMonth="апреля"; break;
	  case 4: fMonth="мая"; break;
	  case 5: fMonth="июня"; break;
	  case 6: fMonth="июля"; break;
	  case 7: fMonth="августа"; break;
	  case 8: fMonth="сентября"; break;
	  case 9: fMonth="октября"; break;
	  case 10: fMonth="ноября"; break;
	  case 11: fMonth="декабря"; break;
	}
	portfolioLi.className = 'without-list-type';
	portfolioLi.innerHTML = `
				<a class="without-text-decoration" onclick = "onNavigate('/edit')">
					<div class="card-info">
						<img class = "item-img" src="images/avatar.png">
						<p class="item-name text ellipsis"><span>${name}</span></p>
						<p class = "item-date text small">Создано:`+ day + " " + fMonth + " " + year + `</p>
						<p class = "item-desc text usual">${store}</p>
					</div>
				</a>`;	
	listContainer.appendChild(portfolioLi);
	console.log(firebase);
	let db = firebase.firestore();
	let lenghtPortfolios =  db.collection("users").doc(firebase.auth().currentUser.email).collection("portfolios").length;
	db.collection("users").doc(firebase.auth().currentUser.email).collection("portfolios").doc(lenghtPortfolios + 1).set({name:name,day:day,month:fMonth,year:year,store:store});
});


const signOutBtn = document.getElementById('exit');
// console.log(signOutBtn);
signOutBtn.addEventListener('click', () => {
	// event.preventDefault();
	// console.log(firebase.auth().currentUser.email);
	firebase.auth().signOut()
		.then(() => {
			onNavigate('/login');
			
		})
		.catch(function(error){
			alert(error);
		})

})
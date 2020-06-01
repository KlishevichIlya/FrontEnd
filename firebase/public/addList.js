// const doc = document;

 listContainer = document.getElementById("listContainer");



signOutBtn = document.getElementById('exit');

signOutBtn.addEventListener('click', () => {
    console.log('pidr');
    // event.preventDefault();
    // console.log(firebase.auth().currentUser.email);
    firebase.auth().signOut()
        .then(() => {
            onNavigate('/login');

        })
        .catch(function(error) {
            alert(error);
        })

})

 function clickHandler(event) { 
 	// let id;
 	console.log(event.target.tagName)
 	if(event.target.tagName === 'DIV'){
 	console.log('ppppppppp')
	// console.log(event.target.parentNode);		
	let elem = event.target;
	idrrr = elem.getAttribute("data-href");
	console.log(idrrr);
	onNavigate('/edit',idrrr);
 	}
 
	
}


firebase.auth().onAuthStateChanged(firebaseUser => {
    async function updateList() {
        listContainer.innerHTML = '';
        let db = firebase.database();
        let user;
        if (firebase.auth().currentUser) {
            user = firebase.auth().currentUser.uid;
            let snapshot = await db.ref('/users/' + user + '/currentPortfolio').once("value");
            let listPortf = snapshot.val();
            let addButton = `<li class="without-list-type">
				<a id = "createList">
					<div class="card-create">
						<img class="creator-link" src="images/add_info.png" alt="">
					</div>
				</a>
			</li>`;

            if (snapshot.exists()) {
                let mass = Object.values(listPortf);
                	// data-href = "${portfolio.form.idEdit}"
                let temp = mass.map(portfolio => `<li class="without-list-type" >
			<a class="without-text-decoration">
					<div class="card-info" data-href = "${portfolio.form.idEdit}">
						<img class = "item-img" src="images/avatar.png">
						<p class="item-name text ellipsis"><span>${portfolio.name}</span></p>
						<p class = "item-date text small">Создано:` + portfolio.createDay + " " + portfolio.createMonth + " " + portfolio.createYear + `</p>
						<p class = "item-desc text usual">${portfolio.store}</p>
					</div>
				</a></li>`).join('');				
                listContainer.innerHTML += addButton;
                listContainer.innerHTML += temp;                

            } else {
                listContainer.innerHTML += addButton;
            }
            listContainer.addEventListener('click',clickHandler);

            const createBtn = document.getElementById("createList");
            createBtn.addEventListener('click', function() {
                console.log("!!!!!!!!!!!!!");
                let portfolioLi = document.createElement('li');
                let date = new Date();
                let day = date.getDate();
                let month = date.getMonth();
                let year = date.getFullYear();
                let name = 'Портфолио';

                function randomInteger(min, max) {
                    let rand = min - 0.5 + Math.random() * (max - min + 1);
                    return Math.round(rand);
                }
                let id = randomInteger(1, 100);
                let uniqId = id + (new Date()).getTime();
               
                console.log(uniqId);
                let store = 'Ваше новое портфолио';
                switch (month) {
                    case 0:
                        fMonth = "января";
                        break;
                    case 1:
                        fMonth = "февраля";
                        break;
                    case 2:
                        fMonth = "марта";
                        break;
                    case 3:
                        fMonth = "апреля";
                        break;
                    case 4:
                        fMonth = "мая";
                        break;
                    case 5:
                        fMonth = "июня";
                        break;
                    case 6:
                        fMonth = "июля";
                        break;
                    case 7:
                        fMonth = "августа";
                        break;
                    case 8:
                        fMonth = "сентября";
                        break;
                    case 9:
                        fMonth = "октября";
                        break;
                    case 10:
                        fMonth = "ноября";
                        break;
                    case 11:
                        fMonth = "декабря";
                        break;
                }

                portfolioLi.className = 'without-list-type';
                // portfolioLi.setAttribute('data-href',uniqId)
                portfolioLi.innerHTML = `
				<a class="without-text-decoration">
					<div class="card-info" data-href ="${uniqId}">
						<img class = "item-img" src="images/avatar.png">
						<p class="item-name text ellipsis"><span>${name}</span></p>
						<p class = "item-date text small">Создано:` + day + " " + fMonth + " " + year + `</p>
						<p class = "item-desc text usual">${store}</p>
					</div>
				</a>`;	
				console.log(portfolioLi)		
                listContainer.appendChild(portfolioLi);
                portfolioLi.addEventListener('click', clickHandler);	
                console.log(firebase);
                let creator = firebase.auth().currentUser.email;

                let db = firebase.database();
                let uid = firebase.auth().currentUser.uid;
                db.ref('users/' + uid + '/currentPortfolio' + '/' + uniqId).set({
                    name: name,
                    createDay: day,
                    createMonth: fMonth,
                    createYear: year,
                    store: store,
                    creator: creator
                });
            });

        }
    }
    if (firebaseUser)
        updateList();
})
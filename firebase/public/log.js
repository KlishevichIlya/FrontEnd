const log = `<body>
  <main class ="main">
  <div class="bg"></div>
  <form class = "form">
    <h1 class = "maintext">Добро пожаловать в сообщество программистов!</h1>    
    <div class = "box">     
        <input class = "input" id="userlog" placeholder="ivanov.ivan@gmail.com">  
        <label class="label" for ="userlog">
          Email
      </label>      
    </div>
    <div class = "box">      
        <input class="input" id="userpassword" placeholder="********" type="password">  
        <label class = "label" for="userpassword">
          Пароль
      </label>     
    </div>
    <button class ="button" id="btnLogin">Войти</button>
    <h2 class="smalltext">Впервые у нас?<br><a class="link" onclick="onNavigate('/reg')">Зарегестрируйтесь!</a></h2>
  </form> 
  </main>
  </body>`;
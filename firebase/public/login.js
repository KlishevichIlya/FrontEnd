const loginBtn = document.getElementById('btnLogin');
  loginBtn.addEventListener('click',async(event) =>{  
    event.preventDefault();
    const userEmail = document.getElementById('userlog').value;
    const userPassword =  document.getElementById('userpassword').value;
    await firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        onNavigate('/main');
        console.log(firebase.auth().currentUser.email);
      })
      .catch(function(error){
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === 'auth/invalid-email') {
          alert('Вы ввели неверный логин!');
        } 
        if (errorCode === 'auth/user-not-found') {
          alert('Пользователь с таким логином не существует!');
        } 
        if (errorCode === 'auth/wrong-password') {
          alert('Вы ввели неверный пароль!');
        } 
        else{
          alert(errorMessage);
        }
        console.log(error);
      })
  });





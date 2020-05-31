
const regBt = document.getElementById('btnCreate');
    regBt.addEventListener('click',async () => {
      event.preventDefault();
      const email = document.getElementById('userlogr').value;
      // console.log(email);
      const password = document.getElementById('userpasswordr').value;
      // const auth =  firebase.auth();
      await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {onNavigate('/main')})
        .catch(function(error){
          let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
              alert('Пароль очень простой!');
              } 
            if (errorCode == 'auth/invalid-email') {
              alert('Неверный логин!');
              } 
            if (errorCode == 'auth/email-already-in-use') {
              alert('Пользователь с таким логином уже существует!');
              } 
            else{
              alert(errorMessage);
            }
            console.log(error);
        })
        let db = firebase.firestore();
        db.collection("users").doc(email).set({email:email,password:password});
      
    });

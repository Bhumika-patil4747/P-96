const firebaseConfig = {
    apiKey: "AIzaSyBaIK3cQvPNpTTkSdFNc8O08jI-ZLjBsE4",
    authDomain: "class-test-73dbd.firebaseapp.com",
    projectId: "class-test-73dbd",
    storageBucket: "class-test-73dbd.appspot.com",
    messagingSenderId: "968753186911",
    appId: "1:968753186911:web:58553cc7485f25eedbb3ea"
  };
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
const firebaseConfig = {
    apiKey: "AIzaSyBaIK3cQvPNpTTkSdFNc8O08jI-ZLjBsE4",
    authDomain: "class-test-73dbd.firebaseapp.com",
    projectId: "class-test-73dbd",
    storageBucket: "class-test-73dbd.appspot.com",
    messagingSenderId: "968753186911",
    appId: "1:968753186911:web:58553cc7485f25eedbb3ea"
  };

  firebase.initialiseapp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML = "WELCOME" + user_name + "!!";
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);

    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";

    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "index.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "index.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    
}

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name, 
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}
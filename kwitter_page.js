//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCpzG7kMm4z_0GZ7_uCjCuRlsfY-HfJquQ",
      authDomain: "quitter-789e8.firebaseapp.com",
      databaseURL: "https://quitter-789e8-default-rtdb.firebaseio.com",
      projectId: "quitter-789e8",
      storageBucket: "quitter-789e8.appspot.com",
      messagingSenderId: "572152917174",
      appId: "1:572152917174:web:4c24700e2fa9ad1b704a17"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");
function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
document.getElementById("msg").value=""};
//End code
      } });  }); }
getData();

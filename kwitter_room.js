
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBWwKXqOtL12X863vDYARPPCsquIF-x25k",
      authDomain: "kwitter-5153b.firebaseapp.com",
      projectId: "kwitter-5153b",
      storageBucket: "kwitter-5153b.appspot.com",
      messagingSenderId: "591263655002",
      appId: "1:591263655002:web:49469709a7b7676411a463",
      databaseURL: "https://kwitter-5153b-default-rtdb.firebaseio.com/"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("NAME");
    document.getElementById("user_name_output").innerHTML="Welcome "+user_name+"!";
function addRoom() {
      rName=document.getElementById("room_name").value;
      localStorage.setItem("R_NAME",rName);
      firebase.database().ref("/").child(rName).update({
          purpose: "adding room_name"
      });
      window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
            
      //End code
      });});}
getData();
function redirectToRoomName(r){
      localStorage.setItem("R_NAME",r)
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("NAME");
      localStorage.removeItem("R_NAME");
      window.location="index.html";
}
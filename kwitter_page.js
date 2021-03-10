//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("R_NAME");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
nme = message_data['name'];
message = message_data['mssage'];
like = message_data['like'];
name_with_tag = "<h4> "+ nme +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
           name:user_name,
           mssage:msg,
           like:0 

      });
      document.getElementById(msg).value="";
}
function logout(){
      localStorage.removeItem("NAME");
      localStorage.removeItem("R_NAME");
      window.location="index.html";
}
function Goback(){
      window.location="kwitter_room.html";
}
function updateLike(message_id){
      button_id = message_id;
      likes_count = document.getElementById(button_id).value;
      updated_likes = Number(likes_count)+1;
      firebase.database().ref(room_name).child(message_id).update({
          like:updated_likes  
      });
}
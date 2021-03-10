function addUser(){
    uName=document.getElementById("user_name").value;
    localStorage.setItem("NAME",uName);
    window.location="kwitter_room.html";
}
var divDetalii = document.getElementById("centru");

var users=[]; // users[0]={username,email};
function getData(){
  xmlhttp= new XMLHttpRequest();

  xmlhttp.onreadystatechange=function(){
    if(xmlhttp.readyState==4){
      users=JSON.parse(xmlhttp.responseText);
    };
  };
  xmlhttp.open("GET","/users/GET",false);
  xmlhttp.send();
};
$(document).ready(getData()) ;



function deleteData(username){
    console.log(username);
    xmlhttp= new XMLHttpRequest();

   xmlhttp.onreadystatechange=function(){
     if(xmlhttp.readyState==4){
      console.log("ajunge in functie");
      };
      }  ;
        xmlhttp.open("POST","/users/DELETE",false);
         xmlhttp.send(username);
};
var buttons = document.getElementsByClassName("btn");


function addUsers(number) {
    var div = document.createElement("div");
    div.className = "detalii_user";
    div.id = users[number].ID;

    var divUser = document.createElement("div");
    divUser.innerText = users[number].UserName;



    var divEmail = document.createElement("div");
    divEmail.innerText = users[number].Email;

    var divPassword = document.createElement("div");
    divPassword.innerText = users[number].Password;

    var divPhone = document.createElement("div");
    divPhone.innerText = users[number].Phone;

    var button = document.createElement("button");
    button.className = "btn";
    button.innerText = "Delete";

    var onCLick = () => {
        div.remove();
        deleteData(users[number].UserName);
    }
    button.onclick = onCLick;

    div.appendChild(divUser);
    div.appendChild(divEmail);
    div.appendChild(divPassword);
    div.appendChild(divPhone);
    div.appendChild(button);

    divDetalii.appendChild(div);
}


for (i = 0; i < users.length; i++) {
    addUsers(i);
}


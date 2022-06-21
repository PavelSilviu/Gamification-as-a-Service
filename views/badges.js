const div_stg = document.getElementById("stanga");




var badges=[];
function getData(){
  xmlhttp= new XMLHttpRequest();

  xmlhttp.onreadystatechange=function(){
    if(xmlhttp.readyState==4){
      badges=JSON.parse(xmlhttp.responseText);
    };
  };
  xmlhttp.open("GET","/badges/GET",false);
  xmlhttp.send();
};
$(document).ready(getData()) ;





function createBadge (id) {
  console.log(badges);
    var button = document.createElement("button");

    
    button.id = id;
    button.className = "level-div";
    button.innerText = badges[id].NameBadge;

    var onClick = () => {
      var ok = 0;
      const div_dr = document.getElementById("dreapta");

      if (ok == 1) {
          console.log("1");
          ok = 0;
          const div = document.getElementById(`descriere${id}`);
          //div.remove();
      }
      else {
        var ceva = document.getElementsByClassName(`descriere`);
        if (ceva != null) {
          stergeDetalii();
        }
        console.log("0");
        ok = 1;
        var div = document.createElement("div");
        div.id = `descriere${id}`;
        div.className = "descriere";

        var div_action = document.createElement("div");
        div_action.innerText = badges[id].Action;

        var div_amount = document.createElement("div");
        div_amount.innerText = badges[id].Start;

        div.appendChild(div_amount);
        div.appendChild(div_action);

        div_dr.appendChild(div);
      }
        
    }

    button.onclick = onClick;

    div_stg.appendChild(button);
}

function stergeDetalii() {
  for (i = 0; i <= badges.length; i++) {
    const div = document.getElementById(`descriere${i}`);
    if (div != null)div.remove();
  }

}



for (i = 0; i < badges.length; i++) {
    createBadge(i);
}

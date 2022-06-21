const div_stg = document.getElementById("stanga");




var levels=[];
function getData(){
  xmlhttp= new XMLHttpRequest();

  xmlhttp.onreadystatechange=function(){
    if(xmlhttp.readyState==4){
      levels=JSON.parse(xmlhttp.responseText);
    };
  };
  xmlhttp.open("GET","/badgesAndLevels/GET",false);
  xmlhttp.send();
};
$(document).ready(getData()) ;





function createlevel (id) {
  console.log(levels);
    var button = document.createElement("button");

    
    button.id = id;
    button.className = "level-div";
    button.innerText = levels[id].NameLevel;

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
        div_action.innerText = levels[id].Level1;

        var div_amount = document.createElement("div");
        div_amount.innerText = levels[id].XP;

        div.appendChild(div_amount);
        div.appendChild(div_action);

        div_dr.appendChild(div);
      }
        
    }

    button.onclick = onClick;

    div_stg.appendChild(button);
}

function stergeDetalii() {
  for (i = 0; i <= levels.length; i++) {
    const div = document.getElementById(`descriere${i}`);
    if (div != null)div.remove();
  }

}



for (i = 0; i < levels.length; i++) {
    createlevel(i);
}

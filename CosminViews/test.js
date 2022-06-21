var awarded=[];
var userDetails=[];
async function click(){
 let id=this.className;
  xmlhttp= new XMLHttpRequest();
    xmlhttp.onreadystatechange=  function(){
     if(xmlhttp.readyState==4){
      var nodes=document.getElementsByClassName(id+'stat');
      res=xmlhttp.responseText;
      console.log(res);
      for( i=0;i<nodes.length;i++)
       {
         nodes.item(i).innerHTML=res;
       }

      };   
};
        xmlhttp.open("POST","/gams/action",false);
        xmlhttp.send(JSON.stringify({"name":id}));          
};

function getData(){
  xmlhttp= new XMLHttpRequest();
  
   xmlhttp.onreadystatechange=function(){
     if(xmlhttp.readyState==4){
      userDetails=JSON.parse(this.responseText);
      // console.log(userDetails);
      userDetails.forEach(element => {
        var node= document.createElement("p");
        node.setAttribute("class",element.action+'stat');
        var textnode=document.createTextNode(element.badge + " " + element.current);
        node.appendChild(textnode);
        document.getElementById("kills").appendChild(node);   //userDetails.badge + userDetails.current;
      });
      }     
} ;
        xmlhttp.open("GET","/gams/retrieveData",false);
         xmlhttp.send(JSON.stringify({"name":'test'}));          
};
$(document).ready(getData());
var consumedActions=[];
userDetails.forEach(element=>{
 if(!consumedActions.includes(element.action))
  {var elements=document.getElementsByClassName(element.action);
  for(let el of elements){
      console.log(el);
      if(el) el.addEventListener('click', click);
    }
  }
  consumedActions.push(element.action);
});
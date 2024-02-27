var vector=[{nombre:"",pass:""}]
function anadir(){

   window.alert("Vaya"); 
}
var cadena="";
var la="";
var m=true;
function ver(){      
   document.getElementById("foto").innerHTML='<img src="imagen/foto1.gif"/>';
   if(m==true){
      document.getElementById("foto").setAttribute("class","dos");
      m=false;
   }else{
      document.getElementById("foto").setAttribute("class","uno");
      m=true;
   }
}
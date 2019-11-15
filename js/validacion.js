window.onload = function (){


var nombre = document.querySelector("[name=Nombre]");
var apellido = document.querySelector("[name=Apellido]");
var email = document.querySelector("[name=Email]");
var telefono = document.querySelector("[name=Telefono]");
var consulta = document.querySelector("[name=Consulta]");
var checkNum = /^([0-9])*$/;

nombre.onchange = function (){
  if (this.value.length => 30){
    alert("Tu nombre debe de ser más corto")
  } else if (this.value != checkNum) {
    alert(" No puedes incluir numeros en tu nombre")
  }
}


}

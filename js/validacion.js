window.onload = function (){

var nombre, apellido, email, telefono, consulta, dni, contraseña, repetirContraseña, checkPass, checkNum, expresionEmail;

nombre = document.querySelector("input[name=Nombre]");
console.log(nombre);
apellido = document.querySelector("input[name=Apellido]");
email = document.querySelector("input[name=Email]");
telefono = document.querySelector("input[name=Telefono]");
consulta = document.querySelector("input[name=Consulta]");
dni = document.querySelector("input[name=DNI]");
contraseña = document.querySelector("input[name=Contraseña]");
repetirContraseña = document.querySelector("input[name=RepetirContraseña]");
checkNum = /^([0-9])*$/;
checkPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
expresionEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


nombre.onchange = function (){
  console.log("estoy escribiendo");
  if (this.value.length >= 30 && this.lenght != ""){
    alert("Tu nombre debe de ser más corto");
    event.preventDefault();
  }else if (this.value != checkNum) {
    alert(" No puedes incluir numeros en tu nombre")
    event.preventDefault();
  }
}
apellido.onchange = function (){
  if (this.lenght >= 30 && this.lenght != ""){
    alert("Tu apellido debe de ser más corto")
    event.preventDefault();
  }
  else if (this != checkNum) {
    alert(" No puedes incluir numeros en tu apellido")
    event.preventDefault();
  }
}
email.onchange = function (){
  if (this.lenght >= 100 && this.lenght != ""){
    alert("Tu email debe de ser más corto")
    event.preventDefault();
  }
  else if (expresionEmail.test(this)) {
    alert(" Tu email tiene un formato invalido ")
    event.preventDefault();
  }
}
telefono.onchange = function (){
  if (this.lenght >= 30 && this.lenght != ""){
    alert("Tu teléfono debe de ser más corto")
    event.preventDefault();
  }
  else if (checkNum.Test(this)) {
    alert(" Tu teléfono debe contener solamente numeros")
    event.preventDefault();
  }
}
try{
  consulta.onchange = function (){

    if (this.lenght >= 200 && this.lenght != ""){
      alert("Tu consulta es muy extensa")
      event.preventDefault();
    }




  }
}
catch(error){
  console.log("Consulta no existe en este documento: " + error.message);
}
dni.onchange = function (){
  if (this.lenght >= 11 && this.lenght != ""){
    alert("Tu CUIT debe de ser más corto")
    event.preventDefault();
  }
  else if (checkNum.Test(this)) {
    alert(" Tu DNI o CUIT debe contener solamente numeros ")
    event.preventDefault();
  }

}
contraseña.onchange = function (){
  if (checkPass.test(this)){
    alert("La contraseña debe contener: \n Minimo 8 caracteres \n Maximo 15 \n Al menos una letra mayúscula \n Al menos una letra minucula \n Al menos un dígito \n No espacios en blanco \n Al menos 1 caracter especial");
    event.preventDefault();
  }

}
repetirContraseña.onchange = function (){
  if (this === contraseña.value){
    alert("Debes repetir correctamente la contraseña")
    event.preventDefault();
  }

}


}

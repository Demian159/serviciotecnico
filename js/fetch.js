//fetch('https://restcountries.eu/rest/v2/all')
fetch('https://my-json-server.typicode.com/Demian159/dbServicioTecnico/productos')
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(dataCruda) {
    console.log(dataCruda);
  });
  var i=0;
  let tituloProducto = document.getElementById('.nombreProducto');
  dataCruda.forEach(function(elemento){
    i++;
    tituloProducto[i].innerHTML="elemento.nombre";
  }

  );

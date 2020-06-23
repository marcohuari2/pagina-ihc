var nombre = document.getElementById('nombre');
var formulario = document.getElementById('formulario');
var edad = document.querySelectorAll('#edad input');
var profesion = document.getElementById('profesion');
var dormitorio = document.querySelectorAll('#dormitorio input');
var tipo = document.getElementById('tipo');
var precio = document.querySelectorAll('#precio input');
var zona = document.getElementById('zona');
var extra = document.querySelectorAll('#extra input');

formulario.addEventListener('submit',validar);

function validar(e){
    
    var mensaje = '';

    //Nombre
    if(nombre.value ==''){
        mensaje += '-Nombre\n';
    }
    
    //Edad
    if(!(edad[0].checked || edad[1].checked || edad[2].checked || edad[3].checked)){
        mensaje += '-Edad\n'
    }
    
    //Profesion
    if(profesion.selectedIndex==null || profesion.selectedIndex==0){
        mensaje += '-Profesion\n';
    }

    //Dormitorio
    if(!(dormitorio[0].checked || dormitorio[1].checked || dormitorio[2].checked || dormitorio[3].checked)){
        mensaje += '-Dormitorio\n';
    }
    
    //Tipo
    if(tipo.selectedIndex==null || tipo.selectedIndex==0){
        mensaje += '-Tipo\n';
    }

    //Precio
    if(!(precio[0].checked || precio[1].checked || precio[2].checked || precio[3].checked)){
        mensaje += '-Precio\n';
    }

    //Zona
    if(zona.selectedIndex==null || zona.selectedIndex==0){
        mensaje += '-Zona\n';
    }

    //Extra
    if(!(extra[0].checked || extra[1].checked || extra[2].checked || extra[3].checked)){
        mensaje += '-Extra\n';
    }

    if(!(mensaje=='')){
        alert('Debes introducir los siguientes datos: \n'+mensaje);
        e.preventDefault();  
    }
    
}






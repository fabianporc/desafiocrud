var tablaPaciente = localStorage.getItem("tablaPacienteStorage");
tablaPaciente = JSON.parse(tablaPaciente);
if(tablaPaciente == null){
    var tablaPaciente = [];
}

 var idForm = localStorage.getItem("idForm");
 idForm = JSON.parse(idForm);
 if(idForm == null){
     var idForm = 0;
 }




function guardar(){
    console.log ("PRESIONO GUARDAR...");
    var objPaciente = JSON.stringify({
        idPaciente: (idForm > 0) ? idForm: (tablaPaciente.length + 1),
       nombApellido:  document.getElementById("txtNombApellido").value,
       dni: document.getElementById("txtDni").value,
       telefono: document.getElementById("txtTelefono").value,
       estado: document.getElementById("cboEstado").value,
    });
    console.log(objPaciente);

    // EDITAR PACIENTES

    // NUEVOS PACIENTES
       tablaPaciente.push(objPaciente);

       localStorage.setItem("idForm", JSON.stringify(idForm));
     localStorage.setItem("tablaPacienteStorage", JSON.stringify(tablaPaciente));
      window.location.replace("index.html");
    

}

 cargarPagina();
 function cargarPagina(){
 if(idForm > 0){
   for(const i in tablaPaciente){
     var varPaciente = JSON.parse(tablaPaciente[i]);
     if(varPaciente.idPaciente == idForm)
     document.getElementById("txtidPaciente").value = varPaciente.idPaciente;
     document.getElementById("txtNombApellido").value = varPaciente.nombApellido;
     document.getElementById("txtDni").value = varPaciente.dni;
     document.getElementById("txtTelefono").value = varPaciente.telefono;
     document.getElementById("cboEstado").value = varPaciente.estado;
     break;
   }
 }
 }






//             LISTA DEL PACIENTE

function listar() {
    console.log("INGRESANDO A LISTAR...")

    var dataFila = '';

    if(tablaPaciente.length > 0){
        for(const i in tablaPaciente ){
            var varPaciente = JSON.parse(tablaPaciente[i]);          
            dataFila += "<tr>";
            dataFila += "<td>"+varPaciente.idPaciente+"</td>";
            dataFila += "<td>"+varPaciente.nombApellido+"</td>";
            dataFila += "<td>"+varPaciente.dni+"</td>";
            dataFila += "<td>"+varPaciente.telefono+"</td>";
            dataFila += "<td>"+varPaciente.estado+"</td>";
            dataFila += "<td>"+
                        "<button class='btn btn-primary me-md-2' type='button' data-bs-toggle='modal' data-bs-target='#exampleModal' onclick='abrirForm("+varPaciente.idPaciente+")'>EDITAR</button>"+
                        "<button type='button' class='btn btn-info' onclick='eliminarItem("+varPaciente.idPaciente+")'>ELIMINAR</button>"+
                        "</td>";
            dataFila += "</tr>";
        }
        document.getElementById("dataPacientes").innerHTML = dataFila;
    }
    else{
        document.getElementById("dataPacientes").innerHTML = "";
    }
}


function eliminarItem(idItem){
    for(const i in tablaPaciente){
        var varPaciente = JSON.parse(tablaPaciente[i]);
        if(varPaciente.idPaciente == idItem){
            tablaPaciente.splice(i,1);
            localStorage.setItem("tablaPacienteStorage", JSON.stringify(tablaPaciente))
        }
    }
    listar()
}

 


































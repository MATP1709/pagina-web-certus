function validarFormulario(){
    let verificar=true;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let password = document.getElementById("txtPassword").value;
    let email = document.getElementById("Email").value;
    /*let FN= document.getElementById("dateFN").value;*/

    if(nombre.value == null)
    {
        alert("escriba su nombre");
    }
    if(!nombre.value){
        alert("Escriba sus nombres por favor.");
        nombre.focus();
        verificar=false;
        return false;
        }

}


/*
function validateDateFormat(date)
{
	//var patt=new RegExp("^\d{1,2}\/\d{1,2}\/\d{2,4}$");
	var patt=new RegExp("^[0-3][0-9]\/[0-1][0-9]\/[1-2][0-9][0-9][0-9]$"); // \/\d{1,2}\/\d{2,4}
	
	if (patt.test(date))
	{ 
		day = date.substring(0,2);
		month = date.substring(3,5);
		year = date.substring(6,10); 
		
		return validateDates(day, month, year);
	}
	else
	{
        alert("dato incorrecto");
		return false;
	}
}*/
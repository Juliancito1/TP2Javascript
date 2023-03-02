// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let concatenar = "";

do{
    let cadena = prompt("Introduce una cadena")
    if(cadena != null)
    {
    if(concatenar=="")
    {
        concatenar = concatenar + cadena;
    }
    else
    {
        concatenar = concatenar + "-" + cadena;
    }
    }
}while(confirm("Desea continuar?"))

document.write(concatenar);
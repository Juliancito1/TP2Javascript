// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.



let suma = 0;
let numero;
do{
    numero = prompt("Ingrese un numero");
    if(numero && !isNaN(numero))
    {
        suma = suma + parseInt(numero);
    }
    else if(isNaN(numero))
    {
        alert("Usted no ingreso un numero");
    }
}while(numero != null)

document.write(`La Suma total de los numeros ingresados es: ${suma}`);

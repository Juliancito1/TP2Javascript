//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = +prompt("Ingrese su edad")
console.log(typeof(edad))
if(!isNaN(edad))
{
    if(edad >= 18 && edad <=80)
    {
        alert("Usted ya puede conducir");
    }
    else if (edad > 0 && edad < 18)
    {
        alert("Usted no tiene la edad suficiente");
    }
    else if(edad >70 && edad < 100)
    {
        alert("Usted puede conducir pero debe renovar su licencia de forma anual y rendir nuevos examenes");
    }
    else if(edad < 0 || edad > 100)
    {
        alert("Ingreso una edad incorrecta");
    }
}
else{
    alert("Usted no ingreso una edad")
}
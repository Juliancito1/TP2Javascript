//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

alert("Ingrese 3 nombres y sus edades para saber quien es el mayor")
let nom1= prompt("Ingrese el primer nombre");
let edad1= parseInt(prompt("Ingrese su edad"));

let nom2= prompt("Ingrese el segundo nombre");
let edad2= parseInt(prompt("Ingrese su edad"));

let nom3= prompt("Ingrese el tercer nombre");
let edad3= parseInt(prompt("Ingrese su edad"));

let mayor = Math.max(edad1,edad2,edad3);

if(mayor === edad1)
{
    document.write(`La persona con mayor edad es: ${nom1}`)
}
else if(mayor === edad2)
{
    document.write(`La persona con mayor edad es: ${nom2}`)
}
else{
    document.write(`La persona con mayor edad es: ${nom3}`)
}
// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let repeticiones = parseInt(prompt("Ingrese un numero del (1 al 50) para hacer una piramide inversa"));

if(repeticiones && !isNaN(repeticiones))
{
    if(repeticiones >=1 && repeticiones <=50)
    {
    for(let i = repeticiones; i>0; i--)
    {
        for(let j=i; j>0; j--)
        {
            document.write(i);
        }
        document.write('</br>')
    }
    }
    else{
        document.write("Usted ingreso un numero erróneo")
    }
}
else{
    document.write("Usted no ingreso un numero")
}

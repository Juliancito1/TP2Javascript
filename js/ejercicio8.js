// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let repeticion = parseInt(prompt("Ingrese un numero del (1 al 50) para hacer una piramide"));
if(repeticion && !isNaN(repeticion))
{
    if(repeticion>0 && repeticion <=50)
    {
        for(let i=1;i<=repeticion;i++)
        {
            for(let j = 1; j <= i; j++)
            {
                document.write(j);
            }
            document.write('</br>')
        }
    }
    else{
        document.write("Usted ingreso un numero invalido")
    }
}
else{
    document.write("Usted no ingreso un numero")
}

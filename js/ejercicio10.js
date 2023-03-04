// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let fila = parseInt(prompt("Ingrese el numero de filas"));
let columna = parseInt(prompt("Ingrese el numero de columnas"));
let tabla = fila*columna;
document.write("<table border>")
for(i=1;i<=fila;i++)
{
    document.write("<tr>")
    for(j=1;j<=columna;j++)
    {
        document.write("<td>")
        document.write(tabla)
        tabla--
        document.write("</td>")
        
    }
    document.write("</tr>")
}
document.write("</table>")

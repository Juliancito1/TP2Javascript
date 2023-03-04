// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingrese un texto y se contaran las vocales que tiene")
texto = texto.toLowerCase();
let vocales = 0;
for(i=0;i<texto.length;i++)
{   
    if(texto.charAt(i) == 'a' || texto.charAt(i) == 'e' || texto.charAt(i) == 'i' || texto.charAt(i) == 'o' || texto.charAt(i) == 'u')
    {
        vocales++;
    }
}

document.write(`El texto (${texto}) tiene ${vocales} vocales`);
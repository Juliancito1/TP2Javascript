// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Escriba un texto y se indicara en que posicion se encuentra la primer vocal")
let posicion
texto = texto.toLowerCase();


    for(i=0;i<texto.length;i++)
    {
        if(texto.charAt(i) == 'a' || texto.charAt(i) == 'e' || texto.charAt(i) == 'i' || texto.charAt(i) == 'o' || texto.charAt(i) == 'u')
        {
            posicion = i;
            break;
        }
    }


document.write(`La primer vocal del texto (${texto}) se encuentra en la posición ${posicion}`);
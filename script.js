//DESAFÍO COMPLEMENTARIO ---> TEMÁTICA FRIENDS



let pregunta = prompt ("¿Quiéres saber si eres un verdadero fan de FRIENDS?").toLowerCase()
    if(pregunta == "si"){
        alert ("Genial! Veamos si puedes con esta pregunta.")
    }else{
        alert ("Animate! El 90% logra resolver este quiz")
    }




let repetir = true;

while (repetir){

    let acertijo = prompt("En la serie  FRIENDS, ¿Qué personajes se ponen un pavo en la cabeza?").toLowerCase()
 

    if (acertijo == "monica y joey" ){
        repetir = false 
        alert ("Felicidades! Eres un verdadero fan de FRIENDS.")
    }else{
        repetir = true
        alert ("Mmm..Intenta otra vez")
    }
}




/*else if(acertijo == "joey y monica"){
        repetir = false 
        alert ("Felicidades! Eres un verdadero fan de FRIENDS.")*/


alert("Bienvenido a los premios Martin fierro - Actores");

alert("A continuación les diré los nominados a mejor actor protagónico de novela")






function nominados(nombre) {
    console.log("Los nominados son: " + nombre.join(" , "));
}
nominados(["Oscar Ferreiro", "Joaquín Furriel", "Pablo Echarri"]);


let respuesta = "";


while (respuesta !== "oscar" && respuesta !== "ferreiro") {
    respuesta = prompt("Quién de los tres piensa que fue el ganador");
    



    switch (respuesta) {
        case "oscar ferreiro":
            alert("Adivinaste! fue el ganador a mejor actor protagónico.");
            break;
        case "oscar":
            alert("Falta el apellido. Intente nuevamente");
        case "ferreiro":
            alert("Falta el nombre. Tiene que ser exactamente igual. Intenta nuevamente");

        default:
            alert("No fue el ganador. No adivinaste");
            break;
  
        else {
        
            

    }    
    

}







 




/*   return nominados;
}

let ganador = preguntarganador;

   
console.log(ganador);*/


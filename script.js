alert("Bienvenido a los premios Martin fierro - Actores");

alert("A continuación les diré los nominados a mejor actor protagónico de novela")






function nominados(nombre) {
    console.log("Los nominados son: " + nombre.join(" , "));
}

nominados(["Oscar Ferreiro", "Joaquín Furriel", "Pablo Echarri"]);


let respuesta = "";
while (respuesta !== "oscar ferreiro") {
    respuesta = prompt("Quién de los tres piensa que fue el ganador:"); 



    if(respuesta === "oscar ferreiro") {
        alert("Adivinaste! fue el ganador a mejor actor protagónico.");

    }  else if (respuesta === "oscar") {
        
        alert("Falta el apellido. Intente nuevamente");
            
    }  else {
        
        alert("No fue el ganador. Intente nuevamente");
       

    }

}





 




/*   return nominados;
}

let ganador = preguntarganador;

   
console.log(ganador);*/


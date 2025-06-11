alert("Bienvenido a los premios Martin fierro - Actores");

alert("A continuación les diré los nominados a mejor actor protagónico de novela")






function nominados() {
    console.log(("Los nominados son:" + nominados));
    let ganador = prompt("Quién de los tres piensa que fue el ganador:");
    adivinaganador(ganador)

    
}

function adivinaganador(nombre , apellido){
    if(nombre === "Oscar" && apellido === "Ferreiro"){
        alert("Adivinaste! fue el ganador a mejor actor protagónico");
        
        adivinaganador()
    }
        
        else{
            alert("No fue el ganador. Intente nuevamente");
        }

    }

nominados()
 




/*   return nominados;
}

let ganador = preguntarganador;

   
console.log(ganador);*/


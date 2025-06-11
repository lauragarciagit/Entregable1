alert("Bienvenido a los premios Martin fierro - Actores");

alert("A continuación les diré los nominados a mejor actor protagónico de novela")

console.log("Los nominados son:");




function nominados() {
    alert("Los nominados son:" + nominados);
    let ganador = prompt("Quién de los tres piensa que fue el ganador:");
    adivinaganador(ganador);
}

function adivinaganador(ganador){
    if(ganador === "Oscar Ferreiro"){
        alert("Adivinaste! fue el ganador a mejor actor protagónico");
    }
        
        else{
            alert("No fue el ganador. Intente nuevamente");
        }

    }

 
 

nominados("Oscar Ferreiro");
nominados("Joaquín Furriel");
nominados("Pablo Echarri");


/*   return nominados;
}

let ganador = preguntarganador;

   
console.log(ganador);*/


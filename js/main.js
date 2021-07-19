// let cantPrenda = parseInt(prompt("ingrese cantidad de prendas que quiere comprar")) ;
// let localization=prompt("ingrese su pais");
// let cuota = prompt("desea sacar sus productos en cuotas ?")


// function envio(){   
//     if(cantPrenda > 10 && localization == "argentina"){
//         alert("usted tiene envio gratis a cualquier parte del pais");  
//     }
//     else {
//         alert("debera abonar el envio o pasarlo a buscar por la direccion que le aparezca en pantalla ");
//         alert("direccion del local : calle falsa 123");
//     }
// }

// function cuotas(){
//     if(cuota == "si"){
//         alert("puede sacar en 1 , 3 , 6 o 12 cuotas . elija entre las anteriores ")
//         let eleccion = parseInt(prompt("en cuatas cuotas va a sacar los productos ?"));
//         if(eleccion === 1){
//             alert("tiene 1 cuota sin interes");
//         }
//         else if(eleccion == 3){
//             alert("tiene un recargo del 10% del producto final");
//         }
//         else if(eleccion == 6){
//             alert("tiene un recargo del 20% del producto final");
//         }
//         else {
//             alert("tiene un recargo del 30% del producto final");
//         }
//     }  
// }

// envio(cantPrenda,localization);
// cuotas(cuota);


// -------------------- prendass personalizadas---------------

class Personalizable{
    constructor(tipo , talle ,color , envio ){
        this.tipo = tipo;
        this.talle =  talle;
        this.color= color;
        
        
    }
    confirmar(){
        console.log("La prenda que usted eligio es : " + " " + this.tipo + "." + " El talle elegido es : " + " " + this.talle + "." + " El color elegido es : " + "" + this.color + "." ); 
    }
}

let prenda1 = new Personalizable(prompt("Elija el tipo de prenda que desee"), prompt("Elija el talle que desee"),prompt("Elija el color que desee") );
prenda1.confirmar();
let prenda2 = new Personalizable(prompt("Elija el tipo de prenda que desee"), prompt("Elija el talle que desee"),prompt("Elija el color que desee") );
prenda2.confirmar();

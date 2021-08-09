const productos = [];
if ("productos" in localStorage){
    console.log("Existe la clave");
    const guardados =JSON.parse(localStorage.getItem("productos")) ;
    for (const producto of guardados) {
        productos.push(new Producto(producto.id,producto.tipo,producto.talle , producto.color ,producto.img, producto.precio));
    }

}

//productos en stock siempre (por ahora)
// productos.push(new Producto(1,"Buzo","Unico" , "negro" ,'../img/boston1.jfif', 1200));
// productos.push(new Producto(2,"Buzo","Unico" , "Rojo" ,'../img/boston2.jfif', 1200));
// productos.push(new Producto(3,"Buzo","Unico" , "Blanco" ,'../img/boston3.jfif', 1200));
// productos.push(new Producto(4,"Camperita","Unico" , "Gris" ,'../img/brooklyn1.jfif', 3200));
// productos.push(new Producto(5,"Camperita","Unico" , "Beige" ,'../img/brooklyn2.jfif', 3200));
// productos.push(new Producto(6,"Camperita","Unico" , "Rojo" ,'../img/brooklyn3.jfif', 3200));
// productos.push(new Producto(7,"Camperita","Unico" , "Amarillo" ,'../img/tricolor1.jfif', 2700));
// productos.push(new Producto(8,"Camperita","Unico" , "Rosa" , '../img/tricoloe2.jfif',2700));
// productos.push(new Producto(9,"Camperita","Unico" , "Gris" ,'../img/tricolor3.jfif', 2700));

for(const producto of productos){
    let div = document.createElement("div");
    div.classList.add('tarjeta');
    
    div.innerHTML = `<hr>
                    <h2 class ='tipo'>${producto.tipo}</h2>
                    <h3 class ='tipo'>${producto.talle}</h3>
                    <h3 class ='tipo'>${producto.color}</h3>
                    <h3 class ='tipo'> ${producto.precio}</h3>
                    <button id="${producto.id}" class="btnCompra">Anadir al Carrito</button>
                    <hr>`;
                    
    document.getElementById("productosUI").appendChild(div);

}

const botones = document.getElementsByClassName('btnCompra');
console.log(botones);


const carrito = [];

function comprarManejador(e){
    // console.log(e.target.id);
    const seleccionado = productos.find( producto => producto.id == this.id);
    carrito.push(seleccionado);
    console.log(seleccionado);
    localStorage.setItem('seleccionado' , JSON.stringify(carrito)); //nos habilita a guardar y usar en otra pantalla
    const divCarrito =  document.getElementById('carrito')
    divCarrito.innerHTML = "";
    for (const producto of carrito) {
        let item = document.createElement('p');
        item.innerHTML = `<hr>
                        Producto ${producto.tipo} 
                        <br>
                        Talle : ${producto.talle}
                        <br>
                        Color : ${producto.color}
                        <br>
                        Precio : ${producto.precio}
                        <br>
                        <hr>`
        divCarrito.appendChild(item);
    }

}

for (const boton of botones) {
    boton.addEventListener("click", comprarManejador);

    // boton.onclick = function (){
    //     console.log("respuesta 1");
    // }
}

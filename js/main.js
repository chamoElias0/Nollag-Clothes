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



const botones = document.getElementsByClassName('btnCompra');
console.log(botones);

// ----------------------agregue Jquery----------------------------------------------------------------
function productosUIjQuery(productos , id){
    for (const producto of productos) {
        $(id).append(`<div class= "card text-center mb-4">
        <div class= "card-body">
            <strong>Tipo Producto</strong>: ${producto.tipo}
            <br>
            <strong>Talle Producto</strong>: ${producto.talle}
            <br>
            <strong>Color Producto</strong>: ${producto.color}
            <br>
            <strong>Precio Producto</strong>: ${producto.precio}
            <button type="button" id="${producto.id}" name="delete" class="btnCompra btn-primary">Anadir al carrito</button>

        <a href="#" class = "btn btn-danger">Borrar</a>
</div>`)
    }
}
productosUIjQuery(productos , "#product-list");





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
        item.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Tipo : ${producto.tipo} </h5>
          <h5 class="card-title">Talle : ${producto.talle} </h5>
          <h5 class="card-title">Color : ${producto.color} </h5>
          <h5 class="card-title">Precio : ${producto.precio} </h5>
        </div>
      </div>`
        divCarrito.appendChild(item);
    }

}

for (const boton of botones) {
    boton.addEventListener("click", comprarManejador);  
}






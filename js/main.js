//-------------------------------tp final -------------------
class Producto {
    constructor(tipo , talle , color ,cantidad, precio){
        this.tipo = tipo ;
        this.talle = talle; 
        this.color = color ;
        this.cantidad = cantidad ;
        this.precio = precio; 
    }
}
//-------------------CARGA DE PRODUCTOS----------------------
var ingresoProductos = [];

do{
    var condicion = prompt("si quiere seguir cargando productos , presione cualquier tecla o LISTO si desea terminar de cargar ");
    if (condicion === "LISTO"){
        alert("Usted termino de cargar los pructos");
    break;
    }else{
        var tipoProducto = prompt("ingrese el tipo de producto ");
        var talleProducto = prompt("ingrese el talle del producto");
        var colorProducto = prompt("ingrese el color del producto");
        var cantidadProducto = prompt("ingrese la cantidad del producto que tiene en stock");
        var precioProducto = prompt("ingrese el precio del producto");
        ingresoProductos.push(new Producto(tipoProducto , talleProducto , colorProducto ,cantidadProducto ,precioProducto));
    }
} 
while(condicion != "LISTO");

console.log(ingresoProductos);

for(var producto of ingresoProductos){
    document.write("<ul><li> Producto :"+ producto.tipo + "</li>");
    document.write("<li> Talle :" + producto.talle  + "</li>");
    document.write("<li> Color :" + producto.color  + "</li>");
    document.write("<li> Color :" + producto.cantidad  + "</li>");
    document.write("<li> Precio :" + producto.precio + "</ul>");
}
//-----------------------precio maximo------------------------
document.write("Se muestran todas las prendas menor al precio colocado " );
var precioMaximo = prompt("ingrese el precio maximo que desee pagar");
var encontrado = ingresoProductos.filter(element => element.precio < precioMaximo);

for(var productos of encontrado ){
    document.write("<ul><li> Producto :"+ producto.tipo + "</li>");
    document.write("<li> Talle :" + producto.talle  + "</li>");
    document.write("<li> Color :" + producto.color  + "</li>");
    document.write("<li> Color :" + producto.cantidad  + "</li>");
    document.write("<li> Precio :" + producto.precio + "</ul>");
}


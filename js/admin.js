const formulario = document.getElementById('registroProducto');

productosRegistrados = [];
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    const inputs = formulario.children;
    console.log(inputs);
    const nuevo = new Producto(inputs[0].value ,inputs[1].value , inputs[2].value ,inputs[3].value , inputs[4].value, inputs[5].value)

    productosRegistrados.push(nuevo);
    localStorage.setItem('productos', JSON.stringify(productosRegistrados))
    console.log(nuevo)
})

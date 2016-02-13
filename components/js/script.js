 var appInventario = {};

appInventario.administrador = function(){
	//lista inicial de productos
  var productos = [
    new Producto("Camisetas" , 40 , 5000, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex."),
    new Producto("Galletas" , 10 , 150, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex."), 
    new Producto("Ropa" , 500 , 3000, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex."),
    new Producto("Cereal" , 1000 , 1500, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex."),
    new Producto("Jabon" , 70 , 500, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex."),
    new Producto("Pepsi" , 35000 , 1000, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex."),
    new Producto("Atun" , 50 , 1000, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex.") 
  ]; 

  function listarProductos(){
    var contenido ="";
    for(var k = 0; k < productos.length; k++){
      contenido +='<li class="list-item" onclick="appInventario.administrador.imprimirProducto('+k+')">'+productos[k].nombre+'</li>';
    }   
    document.getElementById('products-list').innerHTML=contenido;
  }

  return{
    buscarProducto: function(n){
      if(typeof n === "string"){
        for(var i= 0; i< productos.length; i ++){
          if(productos[i].nombre.toUpperCase() === n.toUpperCase()){
            return productos[i];
            break;
          }
        }
      }
    },
    agregarProducto: function(n, c, p, d){
      nombre = document.getElementById("nombre").value;
      cantidad = document.getElementById("precio").value;
      precio = document.getElementById("cantidad").value;
      detalles = document.getElementById("detalles").value;
      productos.push(new Producto(nombre, cantidad, precio, detalles));
      listarProductos(productos); 
    },
    eliminarProducto: function(n){
      for(i=0; i < productos.length; i++){
        if(n === productos[i].nombre){
          productos.splice(i,1);
          AppInventario.administrador.listarTodos(i);
        }
      }
    },
    imprimirProducto : function(k){
      var contentProductos = "";
      for (var i = 0; i < productos.length; i++) {
        if( i === k){
          contentProductos += '<div class="content-img col-md-6"><img class="img" src=img/'
          +productos[i].nombre+'.jpg></div> <div class="content-information col-md-6"><h2>'
          +productos[i].nombre+'</h2><p>Precio: '
          +productos[i].precio+'</p><p>Cantidad: '
          +productos[i].cantidad+'</p><p class="detalles">Detalles: '
          +productos[i].detalles+'</p><br/><button class="btn btn-group-sm glyphicon glyphicon-trash" onclick="appInventario.administrador.eliminarProducto("'+productos[i].nombre+'")"></button>';
        }
      };
      document.getElementById('show-product').innerHTML = contentProductos;
    },
    listarTodos: function(){
      listarProductos(productos);
    },
    borrarTodos: function(){
      productos.splice(new Producto(nombre, cantidad, precio, detalles));
      listarProductos(productos);      
    }
  }
}(); 
function Producto(n, c, p, d){
  this.nombre = n;
  this.cantidad = c;
  this.precio = p;
  this.detalles = d;
}
appInventario.administrador.listarTodos();
 
      
 var appInventario = {};

appInventario.administrador = function(){
	//lista inicial de productos
  var productos = [
    new Producto("Camisetas" , 40 , 5000, 120, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex."),
    new Producto("Galletas" , 10 , 150, 130, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex."), 
    new Producto("Ropa" , 500 , 3000, 140, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex."),
    new Producto("Cereal" , 1000 , 1500, 150, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex."),
    new Producto("Jabon" , 70 , 500, 160, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex."),
    new Producto("Pepsi" , 35000 , 1000, 170, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex."),
    new Producto("Atun" , 50 , 1000, 180, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in magna ex.") 
  ]; 

  function listarProductos(){
    var contenido ="";
    for(var k = 0; k < productos.length; k++){
      contenido +='<li class="list-item" onclick="appInventario.administrador.imprimirProducto('+k+')">'+productos[k].nombre+'</li>';
    }   
    document.getElementById('products-list').innerHTML=contenido;
  }

  return{
    listarTodos: function(next){
      listarProductos(productos);
      if(next === undefined || next > (productos.length-1)){
        AppInventario.inventarioProductos.activeProduct(0);
      }else{
       AppInventario.inventarioProductos.activeProduct(next);
      }
    },
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
    agregarProducto: function(){
      nombre = document.getElementById("nombre").value;
      cantidad = document.getElementById("precio").value;
      precio = document.getElementById("cantidad").value;
      detalles = document.getElementById("detalles").value;
      codigo = document.getElementById("code").value;
      productos.push(new Producto(nombre, cantidad, precio, codigo, detalles));
      listarProductos(productos); 
    },
    imprimirProducto : function(k){
      var contentProductos = "";
      for (var i = 0; i < productos.length; i++) {
        if( i === k){
          contentProductos += '<div class="content-img col-md-6"><img class="img" src=img/'
          +productos[i].nombre+'.jpg></div> <div class="content-information col-md-6"><h2>'
          +productos[i].nombre+'</h2><p>Precio: '
          +productos[i].precio+'</p><p>Cantidad: '
          +productos[i].cantidad+'</p><p class="Detalles">Detalles: '
          +productos[i].detalles+'</p><p class="codigo">Codigo: '
          +productos[i].code+'</p><br/><button class="btn btn-group-sm glyphicon glyphicon-trash" onclick="appInventario.administrador.eliminarProducto('+productos[i].code+')"></button>';
        }
      };
      document.getElementById('show-product').innerHTML = contentProductos;
    },
    eliminarProducto: function(p){
      for(i=0; i < productos.length; i++){
        if(p == productos[i].code){
          productos.splice(i,1);
          appInventario.administrador.listarTodos(i);
        }
      }
    },
    borrarTodos: function(){
      productos.splice(new Producto(nombre, cantidad, precio, code, detalles));
      listarProductos(productos);      
    }
  }
}(); 
function Producto(nombre, cantidad, precio, code, detalles){
  this.nombre = nombre;
  this.cantidad = cantidad;
  this.precio = precio;
  this.code = code;
  this.detalles = detalles;
}
appInventario.administrador.listarTodos();
 
      
var total = 0;
var platos = $('#platos');
var comanda= $('#comanda');
var menuButton= $('#menu button')


menuButton.on('click', function(){
	var cat= $(this).attr('id');	
	carta(cat);

});


function carta (category){
	platos.empty();
	$.ajax({
		url:'http://localhost:3000/comida',
		dataType: 'json',
		success: function (response){
			for (var i = 0; i < response.length; i = i + 1){
				if (response[i].categoria == category) {
					console.log(response[i].nombre);

					var plato = '<div class="row " id="platos">\
									<div class="col-4 foto">\
										<img class="foto" src="'+response[i].imagen+'" alt="">\
									</div>\
									<div class="col-6">\
										<div class="row nombre">\
											<p>'+response[i].nombre+'</p>\
										</div>\
										<div class="row descripcion">\
											<p>'+response[i].descripcion+'</p>\
										</div>\
										<div class="row precio">\
											<p class="number">'+response[i].precio+'€'+ '</p>\
											<button data-price="'+response[i].precio+ '€' + '" data-name="'+response[i].nombre+'" type="button" class="btn btn-success">Añadir</button>\
										</div>\
									</div>\
								</div>';
					platos.append(plato);
				}
   			}

   			$(".btn-success").on("click", function(){
   				var button = $(this);
   					console.log(button.attr("data-price"))
   				var pedido= document.getElementById ('comanda');
   				var list= document.createElement('li');
   				var nombre= button.attr('data-name');
   				var precio= button.attr("data-price");
   					var found = $("#comanda li[data-name='"+ nombre +"']");

   					if(found.length > 0){
   						console.log("a")
   						var multiplicador = found.text().split(" x")[1];
   						multiplicador = parseInt(multiplicador);
   						multiplicador++;
   						found.text(nombre+ " "+precio + "    x"+multiplicador);
   						
   					}else if(found.length == 0){
   						list.innerText= nombre+ " "+precio + "    x1";
   						list.setAttribute("data-name", nombre);
   						comanda.append(list);

   					}
   					
   					total = total + parseInt(precio);
   					console.log(total);
   				var recuento= document.getElementById('suma');
   					recuento.innerText="TOTAL: "+ total+"€";

   			})


   			$("#clear").on("click",function clearScreen(){
   				$('#comanda').empty();
   				$('#suma').text("TOTAL:");
   				total=0;
   			})
		} 
	});


}


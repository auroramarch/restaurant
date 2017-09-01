var entrantes= $('#Entrantes');
var principal= $('#Principal');
var postres= $('#Postres');
var bebidas= $('#Bebidas');

entrantes.on('click', function(){
	$.ajax({
		url:'http://localhost:3000/comida',
		dataType: 'json',
		success: function (response){
			for (var i = 0; i < response.length; i = i + 1){
				if (response[i].categoria == 'Entrantes'){
					console.log(response[i].nombre);
				}
   			}
		} 
	});
		

})

principal.on('click', function(){
	$.ajax({
		url:'http://localhost:3000/comida',
		dataType: 'json',
		success: function (response){
			for (var i = 0; i < response.length; i = i + 1){
				if (response[i].categoria == 'Principal'){
					console.log(response[i].nombre);
				}
   			}
		} 
	});
})

postres.on('click', function(){
	$.ajax({
		url:'http://localhost:3000/comida',
		dataType: 'json',
		success: function (response){
			for (var i = 0; i < response.length; i = i + 1){
				if (response[i].categoria == 'Postres'){
					console.log(response[i].nombre);
				}
   			}
		} 
	});
})

bebidas.on('click', function(){
	$.ajax({
		url:'http://localhost:3000/comida',
		dataType: 'json',
		success: function (response){
			for (var i = 0; i < response.length; i = i + 1){
				if (response[i].categoria == 'Bebidas'){
					console.log(response[i].nombre);
				}
   			}
		} 
	});
})
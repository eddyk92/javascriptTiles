$(document).ready(function(){
	function setPrice () {

    var selectsize = $(".size input[name='selectsize']:checked").val()

    var selectcrust = $(".crust input[name='selectcrust']:checked").val()
    var selectsauce = $(".sauce input[name='selectsauce']:checked").val()
    
    var toppings = $('#toppings').find(":selected").val();

    var more = $('#more').find(":selected").val();

    var pickup = $(".delivery input[name='pickup']:checked").val()


    console.log(selectsize,selectsauce,more,pickup,selectcrust);

    var result = parseFloat(selectsize) + parseFloat(selectcrust) + 
      parseFloat(selectsauce) + parseFloat(toppings) + parseFloat(more) + parseFloat(pickup);
    console.log(result)

   	$('#total').val(result);
}
$('form > select').change(setPrice);

$('button').on( "click", function() {
    console.log( "" );
	setPrice();
});

function calculateTotal() {
	console.log("");
}

})













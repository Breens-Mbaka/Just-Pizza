//User interface logic
(document).ready(function(event) {
    event.preventDefault();

    //user interface logic
    $("#order-1").click(function() {
        var size = $(".size input[type='radio']:checked").val();
        var crust = $(".crust input[type='radio']:checked").val();
        var toppings = $(".toppings input[type='radio']:checked").val();
        var number = $("#quantity").val();
        var delivery = $(".delivery input[type='radio']:checked").val();
        var location = $("#input-location").val();
        var deliveryFee = 1.99

        swal({
            title: "Confirmed Order",
            text: `Number of Pizzas: ${number}`,
            text: `Delivery fee: ${deliveryFee}`,
            text: `Delivery address${location}`,
            text: `Order summary: You bought ${number} ${size} pizzas with ${toppings} and a ${crust} crust Your price is ${totalSum()}.It will be delivered in ${location}`,
            icon: "success",
            buttons: true,
        });
    });
    $("input:radio[type=radio]").on("change", function() {
            if ($("#delivery").is(":checked")) {
                $(".location").show();
                swal("Delivery fee: $ 1.99");
            }
        })
        .change();


    //Business Interface logic
    var pizza = {
        smallPrice: 20.99,
        mediumPrice: 21.05,
        largePrice: 22.00,
        topping: 5,
        crust: 2
    }

    var deliveryFee = 1.99

    function totalSum() {
        var size = $(".size input[type='radio']:checked").val();
        var number = $("#quantity").val();
        console.log(number)
        if (size === "small") {
            var smallPizza = pizza.smallPrice
            var toppings = pizza.topping
            var crusts = pizza.crust
            return ((smallPizza.SM * number) + toppings + crusts);
        } else if (size === "medium") {
            var mediumPizza = pizza.mediumPrice
            var toppings = pizza.topping
            var crusts = pizza.crust
            return ((mediumPizza * number) + toppings + crusts);
        } else {
            var largePizza = pizza.largePrice
            var toppings = pizza.topping
            var crusts = pizza.crust
            return ((pizza * number) + toppings + crusts);
        }
    }
})
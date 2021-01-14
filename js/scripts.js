//User interface logic
$(document).ready(function() {

    //user interface logic
    $("#order-1").click(function() {
        var size = $(".size input[type='radio']:checked").val();
        var crust = $(".crust input[type='radio']:checked").val();
        var toppings = $(".toppings input[type='radio']:checked").val();
        var number = $("#quantity").val();
        var location = $("#input-location").val();
        var deliveryFee = 1.99

        swal({
            title: "Confirmed Order",
            text: `Number of Pizzas: ${number}`,
            text: `Delivery fee: ${deliveryFee}`,
            text: `Delivery address${location}`,
            text: `Order summary: You bought ${number} ${size} pizzas with ${toppings} and a ${crust} crust Your price is $ ${totalSum()}.It will be delivered in ${location}`,
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

        $("#button-2,#button-3,#button-4,#button-5,#button-6,#button-7,#button-8,#button-9,#button-10,#button-11,#button-12")
        .click(function() {
            location.href = "order.html";
        })
        $("#button-1").click(function(){

        })

        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
          });

          $("#button-1").click(function() {
            $('html,body').animate({
                scrollTop: $(".classic-pizza").offset().top},
                'slow');
        });


    //Business Interface logic
    var pizza = {
        smallPrice: 20.99,
        mediumPrice: 21.05,
        largePrice: 22.00,
        topping: 5,
        crust: 2
    }

    var deliveryFee = 1.99;
    var delivery = $(".delivery input[type='radio']:checked").val();
    function totalSum() {
        var size = $(".size input[type='radio']:checked").val();
        var number = $("#quantity").val();
        if(delivery === "pickup") {
            var mediumPizza = pizza.mediumPrice
            var toppings = pizza.topping
            var crusts = pizza.crust
            return ((mediumPizza * number) + toppings + crusts);
        }
        else if (size === "small") {
            var smallPizza = pizza.smallPrice
            var toppings = pizza.topping
            var crusts = pizza.crust
            return ((smallPizza * number) + toppings + crusts + deliveryFee);
        } else if (size === "medium") {
            var mediumPizza = pizza.mediumPrice
            var toppings = pizza.topping
            var crusts = pizza.crust
            return ((mediumPizza * number) + toppings + crusts + deliveryFee);
        } 
        else {
            var largePizza = pizza.largePrice
            var toppings = pizza.topping
            var crusts = pizza.crust
            return ((largePizza * number) + toppings + crusts + deliveryFee);
        }
    }
})
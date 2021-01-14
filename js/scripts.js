//Business logic
//Store data for the name and price of each item
function Meal(name, price, smallSize,
            mediumSize,largeSize) {
    this.name = name;
    this.price = price;
    this.smallSize = smallSize;
    this.mediumSize = mediumSize;
    this.largeSize = largeSize;
  }
var mealOne = new Meal("Hawaiian",19.99, 5, 7, 9)
var mealTwo = new Meal("Borewors",19.00, 5, 7, 9)
var mealThree = new Meal("BBQ Steak",21.00, 5, 7, 9)
var mealFour = new Meal("Chicken Tikka",20.00, 5, 7, 9)
var mealFive = new Meal("Chicken Bacon BBQ",19.55, 5, 7, 9)
var mealSix = new Meal("Veg Feast",22.00, 5, 7, 9)
var mealSeven = new Meal("Spicy Borewors",22.50, 5, 7, 9)
var mealEight = new Meal("Chicken Pepperoni",23.00, 5, 7, 9)
var mealNine = new Meal("Chicken Mushroom",24.00, 5, 7, 9)
var mealTen = new Meal("Nyama Feast",24.55, 5, 7, 9)
var mealEleven = new Meal("Roast Veg & Feta",25.00, 5, 7, 9)
var mealTwelve = new Meal("Peri Peri Chicken",26.00, 5, 7, 9)


//user interface logic
//get data from the home page
$(document).ready(function() {
    $("#button-2").click(function() {
        var nameOfMealOne = mealOne.name
        var nameOfPriceOne = mealOne.price
    }) ;
    $("#button-3").click(function() {
        var nameOfMealTwo = mealTwo.name
        var nameOfPriceTwo = mealTwo.price
    }) ;
    $("#button-4").click(function() {
        var nameOfMealThree = mealThree.name
        var nameOfPriceThree = mealThree.price
    }) ;
    $("#button-5").click(function() {
        var nameOfMealFour = mealFour.name
        var nameOfPriceFour = mealFour.price
    }) ;
    $("#button-6").click(function() {
        var nameOfMealFive = mealFive.name
        var nameOfPriceFive = mealFive.price
    }) ;
    $("#button-7").click(function() {
        var nameOfMealSix = mealSix.name
        var nameOfPriceSix = mealSix.price
    }) ;
    $("#button-8").click(function() {
        var nameOfMealSeven = mealSeven.name
        var nameOfPriceSeven = mealSeven.price
    }) ;
    $("#button-9").click(function() {
        var nameOfMealEight = mealEight.name
        var nameOfPriceEight = mealEight.price
    }) ;
    $("#button-10").click(function() {
        var nameOfMealNine = mealNine.name
        var nameOfPriceNine = mealNine.price
    }) ;
    $("#button-11").click(function() {
        var nameOfMealTen = mealTen.name
        var nameOfPriceTen = mealTen.price
    }) ;
    $("#button-12").click(function() {
        var nameOfMealEleven = mealEleven.name
        var nameOfPriceEleven = mealEleven.price
    }) ;
    $("#button-12").click(function() {
        var nameOfMealTwelve = mealTwelve.name
        var nameOfPriceTwelve = mealTwelve.price
        console.log(nameOfMealTwelve)
        console.log(nameOfPriceTwelve)
    }) ;
    //get data from the options selected
    $("#order-1").click(function(){
        var size = $(".size input[type='radio']:checked").val();
        var crust = $(".crust input[type='radio']:checked").val();
        var toppings = $(".toppings input[type='radio']:checked").val();
        var number = $("#quantity").val();
        var delivery = $(".delivery input[type='radio']:checked").val();
        var location = $("#location").val();
    });
    $("input:radio[type=radio]").on("change", function() {
        if ($("#delivery").is(":checked")) {
            $(".location").show();
            swal("Delivery fee: $ 1.99");
        }
      })
      .change();
});
//Business logic
//Store data for the name and price of each item
function Meal(name, price, smallSize,
            mediumSize,largeSize,
            toppingOne,toppingTwo,toppingThree) {
    this.name = name;
    this.price = price;
    this.smallSize = smallSize;
    this.mediumSize = mediumSize;
    this.largeSize = largeSize;
    this.toppingOne = toppingOne;
    this.toppingTwo = toppingTwo;
    this.toppingThree = toppingThree;
  }
var mealOne = new Meal("Hawaiian",19.99, 5, 7, 9, 2.5, 3.5, 3.7)
var mealTwo = new Meal("Borewors",19.00, 5, 7, 9, 2.5, 3.5, 3.7)
var mealThree = new Meal("BBQ Steak",21.00, 5, 7, 9, 2.5, 3.5, 3.7)
var mealFour = new Meal("Chicken Tikka",20.00, 5, 7, 9, 2.5, 3.5, 3.7)
var mealFive = new Meal("Chicken Bacon BBQ",19.55, 5, 7, 9, 2.5, 3.5, 3.7)
var mealSix = new Meal("Veg Feast",22.00, 5, 7, 9, 2.5, 3.5, 3.7)
var mealSeven = new Meal("Spicy Borewors",22.50, 5, 7, 9, 2.5, 3.5, 3.7)
var mealEight = new Meal("Chicken Pepperoni",23.00, 5, 7, 9, 2.5, 3.5, 3.7)
var mealNine = new Meal("Chicken Mushroom",24.00, 5, 7, 9, 2.5, 3.5, 3.7)
var mealTen = new Meal("Nyama Feast",24.55, 5, 7, 9, 2.5, 3.5, 3.7)
var mealEleven = new Meal("Roast Veg & Feta",25.00, 5, 7, 9, 2.5, 3.5, 3.7)
var mealTwelve = new Meal("Peri Peri Chicken",26.00, 5, 7, 9, 2.5, 3.5, 3.7)


//user interface logic
//get data from the home page
$(document).ready(function() {
    $("#button-2").click(function() {
        var nameOfMealOne = mealOne.name
        var nameOfPriceOne = mealOne.price
        var nameOfMealTwo = mealTwo.name
        var smallSize = mealOne.smallSize
        var mediumSize = mealOne.mediumSize
        var largeSize = mealOne.largeSize
        var toppingOne = mealOne.toppingOne;
        var toppingTwo = mealOne.toppingTwo;
        var toppingThree = mealOne.toppingThree;
    }) ;
    $("#button-3").click(function() {
        var nameOfMealTwo = mealTwo.name
        var nameOfPriceTwo = mealTwo.price
        var smallSize = mealTwo.smallSize
        var mediumSize = mealTwo.mediumSize
        var largeSize = mealTwo.largeSize
        var toppingOne = mealTwo.toppingOne;
        var toppingTwo = mealTwo.toppingTwo;
        var toppingThree = mealTwo.toppingThree;
    }) ;
    $("#button-4").click(function() {
        var nameOfMealThree = mealThree.name
        var nameOfPriceThree = mealThree.price
        var smallSize = mealThree.smallSize
        var mediumSize = mealThree.mediumSize
        var largeSize = mealThree.largeSize
        var toppingOne = mealThree.toppingOne;
        var toppingTwo = mealThree.toppingTwo;
        var toppingThree = mealThree.toppingThree;
    }) ;
    $("#button-5").click(function() {
        var nameOfMealFour = mealFour.name
        var nameOfPriceFour = mealFour.price
        var smallSize = mealFour.smallSize
        var mediumSize = mealFour.mediumSize
        var largeSize = mealFour.largeSize
        var toppingOne = mealFour.toppingOne;
        var toppingTwo = mealFour.toppingTwo;
        var toppingThree = mealFour.toppingThree;
    }) ;
    $("#button-6").click(function() {
        var nameOfMealFive = mealFive.name
        var nameOfPriceFive = mealFive.price
        var smallSize = mealFive.smallSize
        var mediumSize = mealFive.mediumSize
        var largeSize = mealFive.largeSize
        var toppingOne = mealFive.toppingOne;
        var toppingTwo = mealFive.toppingTwo;
        var toppingThree = mealFive.toppingThree;
    }) ;
    $("#button-7").click(function() {
        var nameOfMealSix = mealSix.name
        var nameOfPriceSix = mealSix.price
        var smallSize = mealSix.smallSize
        var mediumSize = mealSix.mediumSize
        var largeSize = mealSix.largeSize
        var toppingOne = mealSix.toppingOne;
        var toppingTwo = mealSix.toppingTwo;
        var toppingThree = mealSix.toppingThree;
    }) ;
    $("#button-8").click(function() {
        var nameOfMealSeven = mealSeven.name
        var nameOfPriceSeven = mealSeven.price
        var smallSize = mealSeven.smallSize
        var mediumSize = mealSeven.mediumSize
        var largeSize = mealSeven.largeSize
        var toppingOne = mealSeven.toppingOne;
        var toppingTwo = mealSeven.toppingTwo;
        var toppingThree = mealSeven.toppingThree;
    }) ;
    $("#button-9").click(function() {
        var nameOfMealEight = mealEight.name
        var nameOfPriceEight = mealEight.price
        var smallSize = mealEight.smallSize
        var mediumSize = mealEight.mediumSize
        var largeSize = mealEight.largeSize
        var toppingOne = mealEight.toppingOne;
        var toppingTwo = mealEight.toppingTwo;
        var toppingThree = mealEight.toppingThree;
    }) ;
    $("#button-10").click(function() {
        var nameOfMealNine = mealNine.name
        var nameOfPriceNine = mealNine.price
        var smallSize = mealNine.smallSize
        var mediumSize = mealNine.mediumSize
        var largeSize = mealNine.largeSize
        var toppingOne = mealNine.toppingOne;
        var toppingTwo = mealNine.toppingTwo;
        var toppingThree = mealNine.toppingThree;
    }) ;
    $("#button-11").click(function() {
        var nameOfMealTen = mealTen.name
        var nameOfPriceTen = mealTen.price
        var smallSize = mealTen.smallSize
        var mediumSize = mealTen.mediumSize
        var largeSize = mealTen.largeSize
        var toppingOne = mealTen.toppingOne;
        var toppingTwo = mealTen.toppingTwo;
        var toppingThree = mealTen.toppingThree;
    }) ;
    $("#button-12").click(function() {
        var nameOfMealEleven = mealEleven.name
        var nameOfPriceEleven = mealEleven.price
        var smallSize = mealEleven.smallSize
        var mediumSize = mealEleven.mediumSize
        var largeSize = mealEleven.largeSize
        var toppingOne = mealEleven.toppingOne;
        var toppingTwo = mealEleven.toppingTwo;
        var toppingThree = mealEleven.toppingThree;
    }) ;
    $("#button-12").click(function() {
        var nameOfMealTwelve = mealTwelve.name
        var nameOfPriceTwelve = mealTwelve.price
        var smallSize = mealTwelve.smallSize
        var mediumSize = mealTwelve.mediumSize
        var largeSize = mealTwelve.largeSize
        var toppingOne = mealTwelve.toppingOne;
        var toppingTwo = mealTwelve.toppingTwo;
        var toppingThree = mealTwelve.toppingThree;
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
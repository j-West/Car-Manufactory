/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {
  this.manufacturedDate = Date.now();
  // Create the manufactured date property (see above)
}

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value.
         For, example, this.manufacturer = "Ford".
 */
function Honda () {
  this.manufacturer = "Honda";
  // Define the manufacturer instance variable
}
// Set the prototype to a new Car instance
Honda.prototype = new Car();

/*
  1. Create a constructor function named after your favorite car model.
  2. It must inherit from the specific make type you created in previous step.
  3. Create some instance properties that are specific to the specific
        car model (e.g. horsepower, cargo capacity, etc.)
*/
function Civic () {
  this.horsepower = "3 clydesdale's worth"
  this.cargo = false
  this.capacity = 1

}
// Set the prototype to appropriate model you created above and set the model name argument
Civic.prototype = new Honda();

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/
var myFirstFavoriteCar = new Civic();
var mySecondFavoriteCar = new Civic();
var myThirdFavoriteCar = new Civic();
myFirstFavoriteCar.plate_number = "notMINE";
mySecondFavoriteCar.plate_number = "HI__MOM";
myThirdFavoriteCar.plate_number = "lastOne";



/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
function Accord () {

}
/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.
 */
Accord.prototype = new Honda()


/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */
var myFourthFavoriteCar = new Accord()
myFourthFavoriteCar.plate_number = "_Su'in_"


console.log(myFirstFavoriteCar);
console.log(mySecondFavoriteCar);
console.log(myThirdFavoriteCar);
console.log(myFourthFavoriteCar);

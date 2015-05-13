//donut shop constructor
function Shop(location, minCustomer, maxCustomer, donutAverage, hoursOpen) {

  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.donutAverage = donutAverage;
  this.hoursOpen = hoursOpen;

  this.randomCustArray = [];
  this.donutsPerHourArray = [];
  this.donutsPerDay = 0;
  this.hourlyAverage = 0;

  //create an array of random numbers for each hour open and store in an array
  for (var i = 0; i < this.hoursOpen; i++) {
    this.randomCustArray[i] = (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
  }

  //method to return the nubmer of donuts for the random hours generated
  this.getDonutsPerHour = function () {
    for (var i = 0; i < this.randomCustArray.length; i++) {
      this.donutsPerHourArray[i] = Math.ceil(this.randomCustArray[i] * this.donutAverage);
    }
    return this.donutsPerHourArray;
  };

  //method to return the total donuts needed for the randomly generated day
  this.getDonutsPerDay = function () {
    this.getDonutsPerHour();
    for (var i = 0; i < this.randomCustArray.length; i++) {
      this.donutsPerDay += this.donutsPerHourArray[i];
    }
    return this.donutsPerDay;
  };

  //method to return the average donuts per hour
  this.getHourlyAverage = function () {
    this.hourlyAverage = Math.ceil(this.getDonutsPerDay() / this.hoursOpen);
    return this.hourlyAverage;
  };

  //in order for the table to generate, these methods have to be called
  this.getDonutsPerHour();
  this.getDonutsPerDay();
  this.getHourlyAverage();
}

//shop manager object constructor
function DonutMaster() {

  var managerName = name;

  //function to display shop name, donuts per hour and donuts per day
  this.generateReport = function () {
    for (var i = 0; i < printArray.length; i++) {
        alert(printArray[i].location + " Donuts per hour: " + printArray[i].getDonutsPerHour() + "    Donuts per day: " + printArray[i].getDonutsPerDay());
    }
  };

  //method to add a new shop to the current list of shops and their parameters.  This is LOCAL ONLY, does not change values in the rest of the script
  this.addShop = function(){

    //create a new local array to be eddited
    var addShopArray = new Array();
      for (var i = 0; i < printArray.length; i++) {
        addShopArray.push([printArray[i].location, printArray[i].hoursOpen]);
      }

    //get parameters for the new shop and add them to the array
    var newShopName = prompt("Enter a name or location for the new shop");
    var newShopDaily = prompt("Enter a number value for the hours per day the shop is open");

    addShopArray.push([newShopName, newShopDaily]);

    //loop through the array and display the values, including the new shop
    for (var i = 0; i < addShopArray.length; i++) {
      alert("Shop name and hours open: " + addShopArray[i]);
    }

  };

}

//create a function to populate the table with real time data
function generateTable() {
  //downtown
  document.getElementById("downtownHours").innerHTML=downtown.hoursOpen;
  document.getElementById("downtownDonutsPerHour").innerHTML=downtown.hourlyAverage;
  document.getElementById("downtownDonutsPerDay").innerHTML=downtown.donutsPerDay;

  //capitol hill
  document.getElementById("capitolHillHours").innerHTML=capitolHill.hoursOpen;
  document.getElementById("capitolHillDonutsPerHour").innerHTML=capitolHill.hourlyAverage;
  document.getElementById("capitolHillDonutsPerDay").innerHTML=capitolHill.donutsPerDay;

  //south lake union
  document.getElementById("sluHours").innerHTML=southLakeUnion.hoursOpen;
  document.getElementById("sluDonutsPerHour").innerHTML=southLakeUnion.hourlyAverage;
  document.getElementById("sluDonutsPerDay").innerHTML=southLakeUnion.donutsPerDay;

  //wedgewood
  document.getElementById("wedgewoodHours").innerHTML=wedgewood.hoursOpen;
  document.getElementById("wedgewoodDonutsPerHour").innerHTML=wedgewood.hourlyAverage;
  document.getElementById("wedgewoodDonutsPerDay").innerHTML=wedgewood.donutsPerDay;

  //ballard
  document.getElementById("ballardHours").innerHTML=ballard.hoursOpen;
  document.getElementById("ballardDonutsPerHour").innerHTML=ballard.hourlyAverage;
  document.getElementById("ballardDonutsPerDay").innerHTML=ballard.donutsPerDay;
}

//create shop opbjects
var downtown = new Shop("Downtown", 8, 43, 4.5, 24);
var capitolHill = new Shop("Capitol Hill", 4, 37, 2, 10);
var southLakeUnion = new Shop("South Lake Union", 9, 23, 6.33, 8);
var wedgewood = new Shop("Wedgewood", 2, 28, 1.25, 10);
var ballard = new Shop("Ballard", 8, 58, 3.75, 10);
var printArray = [downtown, capitolHill, southLakeUnion, wedgewood, ballard];

//create manager object
var managerBob = new DonutMaster();

//call function to generate table
generateTable();

//print detailed information to the console
for (i = 0; i < printArray.length; i++) {

  console.log(printArray[i].location);

  console.log("For the randomly generated day, the " + printArray[i].location + " store, which is open " + printArray[i].hoursOpen + " hours per day, had the following customers per hour: " + printArray[i].ranCustArray);

  console.log("The corresponding donuts per hour needed (rounded up) given the average of " + printArray[i].donutAverage + " donuts per customer, for the " + printArray[i].location + " store, therefore would be as follows: " + printArray[i].donutsHourArray);

  console.log("Given these numbers, the total number of donuts needed for this day would be " + printArray[i].donutsPerDay + " at an average of " + printArray[i].hourlyAverage + " donuts an hour (rounded up).");
}

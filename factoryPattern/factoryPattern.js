;(funtion () {
    function Car(options) {

        // some defaults
        this.doors = options.doors || 4;
        this.state = options.state || "brand new";
        this.color = options.color || "silver";
    }

    // A constructor for defining new trucks
    function Truck(options) {

        this.wheelSize = options.wheelSize || "large";
        this.state = options.state || "used";
        this.color = options.color || "blue";
    } 

// Define a skeleton vehicle factory
function VehicleFactory(){}

// Define the prototypes and utilities for the this factory

// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;

// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function (options) {

    if (options.VehicleType === "car") {
        this.vehicleClass = Car;
    } else {
        this.vehicleClass = Truck;
    }
    
    return new this.vehicleClass(options);
};

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
    VehicleType: "car",
    color: "yellow",
    doors: 6
});

// Test to confirm our car was created using vehicleClass/prototype class

// Outpus: true
console.log(car instanceof Car);

// Create an instance of our factory that makes truck 
var movingTruck = carFactory.createVehicle({
    VehicleType: "truck",
    state: "like new",
    color: "yellow",
    wheelSize: "small"
});

// Test to confirm our car was created using vehicleClass/prototype class

// Outpus: true
console.log(movingTruck instanceof Truck);
}());

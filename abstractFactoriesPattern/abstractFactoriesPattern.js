(function () {

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


    var AbstractVehicleFactory = (function () {

        // Storage for our vehicle types
        var types = {};
        return {
            getVehicle: function (type, customizations) {
                var Vehicle = types[type];

                return (Vehicle) ? return new Vehicle(customizations) : null;
            },
            registerVehicle: function (type, Vehicle) {
                var proto = Vehicle.prototype;

                // only register classes that fulfill the vehicle contract
                if (proto.drive && proto.breakDown) {
                    types[type] = Vehicle;
                }

                return AbstractVehicleFactory;
            }
        };
    }());

    // Usage

    AbstractVehicleFactory.registerVehicle("car", Car);
    AbstractVehicleFactory.registerVehicle("truck", Truck);
    
}());

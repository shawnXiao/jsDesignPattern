(function () {
    var CarManager = {
        
        //request information
        requestInfo: function (model) {
            return "The information for " + model + "is foobar";
        },

        //purchase the car
        buyVehicle: function (model) {
            return "You have successfully purchased Item" + model;
        },

        //arrange a viewing
        arrangeViewing: function (model) {
            return "You have successfully booked a viewing of " + model;
        },

        execute: function (name) {
            return CarManager[name] && CarManager[name].apply(CarManager,
                                                              [].slice.call(arguments, 1));
        }
    };

    CarManager.execute("arrangeViewing", "Ferrari");
    CarManager.execute("requestInfo", "Ford");
    CarManager.execute("buyVehicle", "BMW");
}());

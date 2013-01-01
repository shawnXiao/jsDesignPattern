var Singleton =(function () {
    var instantiated;

    function init () {
        // singleton here
        return {
            publicMethod: function () {
                 console.log("Hello world");
            },
            publicProperty: 'test'
        }

    }

    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init(); 
            }

            return instantiated;
        }
    }
});

/*
 *The Module Pattern
 *    The Module pattern waw originally defined as a way to provide 
 *    both private and public encapsulation for classes in conventiaonal
 *    software engineering.
 *    Privacy
 *    The Module pattern encapsulates "privacy" , stae and organization 
 *    using closures.
 */

/*
 *Advantages
 *    The freedom to have private functions which can only be consumed by
 *our module.As the aren't exposed to the rest of the page (only our exposrted 
 *API is ), They're considered truly private
 *    Given that functions are declared normally and are named, it can be sasier
 *to show callstacks in a debugger when we're attempting to discover what function(s)
 *threw an expection.
 *    It also enables us to return different functions depending on the environment.
 *In the past, I've seen developers us this to perform UA testing in order to provide
 *a code=path in their module specific to IE, but we can easilyopt for feature detecton
 *these days to achieve a similar goal.
 */

var testModule = (function () {
    var counter = 0;
    return {

        incrementCounter: function () {
            return counter++;
        },

        resetCounter: function () {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    };
}());
//Usage:

//Increment our counter
testModule.incrementCounter();

//Check the counter value and reset 
//Outputs: 1
testModule.resetCounter();

//When working with the Module patter,
//we may find it useful to define a simple
//template that we use for getting
//started with it.
var myNamespace = (function () {

    var myPrivateVar, myPrivateMethod;

    //A private coutner variable
    myPrivateVar = 0;

    //A private function which logs any arguments
    myPrivateMethod = function (foo) {
        console.log(foo);
    };

    return {

        //A public variable
        myPublicVar: "foo",

        //A public function utilizing privates
        myPublicFunction: function (bar) {

            //Increment our private counter
            myPrivateVar++;

            //Call our private method using bar
            myPrivateMethod(bar);
        }
    };
}());


//The basket array in the module is kept
//private and so other parts of our application
//are unable to directly read it.It only exists
//with the modulue's closure and so the only methods
//able to access it are those with access to its scope
var basketModule = (function () {

    //privates

    var basket = [];

    function doSomethingPrivate() {
        //...
    }

    function doSomethingElsePrivate() {
        //...
    }

    //Return an object exposed to the public
    return {

        //Add items to our basket
        addItem: function (values) {
            basket.push(values);
        },

        //Get the count of items in the basket
        getItemCount: function () {
            return basket.length;
        },

        //Public alias to a private function
        doSomething: doSomethingPrivate,

        // Get the total value of items in the basket
        getTotal: function () {

            var q = this.getItemCount(),
                p = 0;

            while (q--) {
                p += basket[q].price;
            }

            return p;

        }
    };
}());

//Inside the module, you may have noticed that we return an object
//This gets automatically assigned to basketModule so that we can
//interact with it as follows:

//basketModule returns an object with a public API we can use

basketModule.addItem({
    item: "bread",
    price: 0.5
});

basketModule.addItem({
    item: "butter",
    price: 0.2
});

//Outputs: 2
console.log(basketModule.getItemCount());

//Outputs: 0.8
console.log(basketModule.getTotal());

//However, the following will not work:

//Outputs: undefined
//This is because the basket itself is not exposed as a part
//of our the public API
console.log(basketModule.basket);

//This also won't work as it only exists within the scope of
//our basketModule closure, but not the returned public object
console.log(basket);


/*
 *The Revealing Module Pattern
 *    The Revealing Module pattern came about as Heilmann was frustrated
 *width the fact that he had to repeat to the name of the main object when
 *we wanted to call one public method from another or access public variables
 *He also disliked the Module pattern's requirement for having to switch to
 *object literal notation for the things he wished to make public.
 *    The result of his efforts was an updated pattern where we would simply
 *define all of our functions and variables in the private scope and return 
 *an anonymous object with pointers to the private functionality we wished to
 *reveal as public
 */

/*
 *Advantages
 *    It makes it more clear at the end of the module which of our functions and 
 *variables may be accessed publicly which eases readablity
 *
 *Disadvantages
 *    A disadvantage of this pattern is that if a private function refers to a public
 *function, that public functiong can't be override if a patch is necessary.This is
 *because the private function will continue to refer to the private implementation and
 *the pattern doesn't apply to public member,only to functions.
 */


var myRevealingModule = (function () {
     
    var privateVar = "Shawn Xiao",
        publicVar = "Hey there!";

    function privateFunction() {
        console.log("Name:" + privateVar);
    }

    function publicSetName(strName) {
        privateVar = strName;
    }

    function publicGetName() {
        privateFunction();
    }

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };

}());

myRevealingModule.setName("Jimy kinlan");


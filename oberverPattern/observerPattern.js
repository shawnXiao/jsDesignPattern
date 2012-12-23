/*
 *The Observer is a design pattern where an object (known as a subject)
 *maintains a list of objects depending on it (observers), automatically
 *notifying them of any changes to state.
 */


 /*
  *When a subject needs to notify observers about sth interesting happening,it
  *broadcasts a notification to the observers(which can include specific data 
  *related to the topic of the notification)
  */

 /*
  *When we no longer wish for a particular observer to be notified of changes
  *by the subject they are registered with, the subject can remove them from 
  *the list of observers
  */

  /*
   *Subject: maintains a list of observers, facilitates adding or removeing 
   *         observers
   *Observer: provides a update interface ofr objects that need to be notified
   *          of a Subjects's changes of state
   *ConcreteSubject: broadcasts notifications to observers on changes of state,
   *          stores the state of ConcreteObservers
   *ConcreteObserver: stores a reference to the ConcreteSubject,implements an 
   *          update interface for the Observer to ensure state is consistent 
   *          with the Subject's
   */
function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.Add = function (obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.Empty = function () {
    this.observerList = [];
};

ObserverList.prototype.Count = function () {
    return this.observerList.length;
};

ObserverList.prototype.Get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

ObserverList.prototype.Insert = function (obj, index) {
    var pointer = -1;

    if (index === 0) {

        //The unshift method inserts the given values to 
        //the beginning of an array-like object
        this.observerList.unshift(obj);
        pointer = index;
    }
};

ObserverList.prototype.Indexof = function (obj, startIndex) {
    var i = startIndex, pointer = -1;

    while (i < this.observerList.length) {

        if (this.observerList[i]) {
            pointer = i;
        }
    }

    return pointer;
};

ObserverList.prototype.RemoveAt = function (index) {
    
    if (index === 0) {
        this.observerList.shift();
    } else if (index === this.observerList.length - 1) {
        this.observerList.pop();
    }
};


//Extend an object with an extension
function extend(obj, extension) {
    var key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            extensionp[key] = obj[key];
        }
    }
}

function Subject() {
    this.observers = new ObserverList();
}

Subject.prototype.AddObserver = function (observer) {
    this.observers.Add(observer);
};

Subject.prototype.RemoveObservers = function (observer) {
    this.observers.RemoveIndexAt(this.observers.Indexof(observer, 0));
};

/*
 *Sample app
 *    A button for adding new observable checkboxes to the page
 *    A control checkbox which will act as a subject,notifying
 *        other checkboxes they should be checked
 *    A container for the new checkboxes being added
 */

 

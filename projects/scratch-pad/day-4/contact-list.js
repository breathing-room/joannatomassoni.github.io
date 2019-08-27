// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin's); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // using the given parameters, return an object template in the body of the code
    // values and keys will be the parameters
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    // create variable that is an empty array literal to contain all contacts
    var contacts = [];
    // create object to hold inner API functions
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        // addContact is a key whose value is a function that adds a contact
        // i: contact object
        // o: 
        // c:
        // e:
        addContact: function(contact)  {
            // use the push array to add new contact to contacts array
            contacts.push(contact);
        },
        
        // findContact is a key whose value is a function that finds a contact
        // i: fullName string
        // o: contact object
        // c: 
        // e: return undefined if contact does not exist
        // it takes a string that is a full name, and iterates through the contacts array
        
        findContact: function(fullName) {
        // create variable that splits the name string into an array of two strings
        var testArray = fullName.split(" ");
        // console.log(testArray);
        // loop through contacts array
        for (var i = 0; i < contacts.length; i++) {
            // for each object in the array, check if the first string of newArray equals the nameFirst value in the object,
            // and check if the second string of newArray equals the nameLast value in the object  
            if (testArray[0] === contacts[i]["nameFirst"] && testArray[1] === contacts[i]["nameLast"]) {
                return contacts[i];
                } else return undefined;
            }
        },
        
        // removeContact is a key whose value is a function that removes a contact
        // i: contact to be removed
        // o: nothing?
        // c: 
        // e: 
        
        removeContact: function(contact) {
            // find index of that particular array object
            var removeAtIndex = contacts.indexOf(contact);
            // use splice to remove that particular object
            contacts.splice(removeAtIndex, 1);
        },
        // printAllContactNames is a function that prints the whole contact list
        // i: contacts array
        // o: new-line separated string of all full names of contacts
        // c: names must be separated by lines, last name must not be followed by newline character
        // e: 
        printAllContactNames: function() {
        // create variable to store string of contacts' full names
        let allContactsString = "";
        console.log(allContactsString);
        // create for loop to iterate over contacts array
        for (var i = 0; i < contacts.length; i++) {
            // for each object in array, concatenate nameFirst, a space, and nameLast, stored in a fullName variable
            let fullName = contacts[i].nameFirst + " " + contacts[i].nameLast;
            console.log(fullName);
            // if we're at the last index in the array, concat. the fullName value to the string to be printed
            if (i === contacts.length - 1) {
                allContactsString += fullName;
            } // else, concat. the fullName value plus a newline sign to the printed string
                else {
                    allContactsString += fullName + "\n";
                }
            } return allContactsString;
        }
    };   
}

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

// ======== OBJECT PROPERTIES + updating + this ======== //
function pet() {
    console.log(this.name)
}

// ======== ASSIGN FUNCTIONS TO NEW PROPERTIES ======== //
//create pet object with name of Fluffy and method, pet
const pet1 = { name: "Fluffy", pet }

//create pet object with name of Polly, assign pet function to namePolly key
const pet2 = { name: "Polly", namePolly: pet }

console.log('pet1 object', pet1) //logs {name: 'Fluffy', pet: ƒ}
pet1.pet() //logs "Fluffy"

console.log('pet2 object', pet2) //logs {name: 'Polly', namePolly: ƒ}
// pet2.pet() //yields error bc we assigned the pet method to the namePolly property in pet2 object

//Because we assigned the pet function to namePolly in pet2 object, we can call it as if it's a method
pet2.namePolly()

// ======== ADD PROPERTIES + this ======== //
//You can add properties to JavaScript objects using dot notation

//add the type property to pet2 object and assign it to "bird"
pet2.type = "bird"
console.log("add type to pet2 obj", pet2) //logs {name: 'Polly', type: 'bird', namePolly: ƒ}

//add a tellMeWhatYouAre arrow function method to the pet2 object
pet2.tellMeWhatYouAre = () => console.log(this.type)
console.log("add tellMeWhatYouAre method to pet2", pet2) //logs {name: 'Polly', type: 'bird', namePolly: ƒ, tellMeWhatYouAre: ƒ}
pet2.tellMeWhatYouAre() //undefined because this in tellMeWhatYouAre arrow function refers to parent scope (Global Window object)and type is not within that execution context

//add a whatDoYouSay regular function method to the pet2 object
pet2.whatDoYouSay = function (sound) {
    console.log(`The ${this.type} says ${sound}`)
}
pet2.whatDoYouSay("chirp") //logs "The bird says chirp" because this in regular func whatDoYouSay refers to the pet2 object, so this.type refers to the type in pet2
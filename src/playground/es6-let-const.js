var nameVar = 'Andrew'
var nameVar = 'Mike'
console.log('nameVar', nameVar);

let nameLet = 'Jen'
nameLet = 'Julie'
console.log('nameLet', nameLet);

const nameConst = 'Frank'
console.log('nameConst', nameConst)

const getPetName = () => {
    var petName = 'Hal'
    return petName
}

// Block scoping
var fullName = 'Andrew Mead'

if (fullName) {
    var firstName = fullName.split(' ')[0]
    console.log(firstName);
}
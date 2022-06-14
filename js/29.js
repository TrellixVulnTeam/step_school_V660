let arr = [[1, 2, 3], [4, 5], [6]];

const getSumMatrix = matrix => matrix.flat().reduce((acc, el) => acc + el, 0);


/*************************************************************************************************************************/

function User(firstName, lastName, year) {

    Object.defineProperties(this, {

        'firstName': {
            writable: true,
            enumerable: true,
            configurable: true,
            value: firstName,
        },

        'lastName': {
            writable: true,
            enumerable: true,
            configurable: true,
            value: lastName,
        },

        'year': {
            writable: true,
            enumerable: true,
            configurable: true,
            value: year,
        },

        'age': {
            enumerable: true,
            configurable: true,
            get() {
                return new Date().getFullYear() - this.year;
            },
        },
    });
}

const getRandomBirthday = () => Math.floor(Math.random() * 50) + 1970;

const users = [
                new User('Oliver', 'Smith', getRandomBirthday()),
                new User('Jack', 'Johnson', getRandomBirthday()),
                new User('Harry', 'Williams', getRandomBirthday()),
                new User('Jacob', 'Jones',  getRandomBirthday()),
                new User('Charley', 'Brown', getRandomBirthday()),
                new User('Thomas', 'Davis', getRandomBirthday()),
                new User('George', 'Miller', getRandomBirthday()),
                new User('Oscar', 'Wilson', getRandomBirthday()),
                new User('Adam', 'Moore', getRandomBirthday()),
                new User('Simon', 'Taylor', getRandomBirthday())
              ];

function filterAge(n) {
    return users.filter(user => user.age > 13).sort((a, b) => a.lastName > b.lastName ? - 1 : 1);
}

function deleteUsers(n) {
    return users.filter(user => user.age > 45);
}

console.log(users[0].firstName);
console.log(users[0].lastName);
console.log(users[0].year);
console.log(users[0].age);





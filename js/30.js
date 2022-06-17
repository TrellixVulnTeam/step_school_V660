const shape = {

    color: 'white-red-white',

    draw() {
        return `${this.color} ${this.name}`
    }, 
};

const rectangle = Object.create(shape, { 

    name: { value: 'rectangle' }, 

    sides: { value: {

            l: 25, 
            h: 10,
        } 
    },

    points: { value: {

            x1: 0, 
            y2: 0,
            x2: 0, 
            y2: 10, 
            x3: 25, 
            y3: 10, 
            x4: 25, 
            y4: 0,
        } 
    },  
});

const circle = Object.create(shape, {
    name: { value: 'circle' },

    raius: { value: 15 },

    point: { value: {

            x: 0,
            y: 0,
        } 
    },
});

const shapes = [rectangle, circle];

shapes.forEach(shape => console.log(shape.draw()));

/*******************************************************************************************************/

function Student(firstName, lastName, group, averageMark) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
    this.averageMark = averageMark;
}

Student.prototype.getScholarship = function() {
    return this.averageMark >= 5 ? 100 : 80;
};

function Aspirant(firstName, lastName, group, averageMark, work) {
    Student.apply(this, arguments);
    this.work = work;
}

Object.setPrototypeOf(Aspirant.prototype, Student.prototype);
Object.setPrototypeOf(Aspirant, Student);

// Aspirant.prototype = Object.create(Student.prototype);
// Aspirant.prototype.constructor = Aspirant;
// Object.assign(Aspirant, Student);

Aspirant.prototype.getScholarship = function() {
    return this.averageMark >= 5 ? 200 : 180;
}

const student = new Student('David', 'Jonson', 1, 4);

const aspirant = new Aspirant('Simon', 'Smith', 2, 7, 'Work');

const arr = [student, aspirant];

arr.forEach(person => console.log(person.getScholarship()));
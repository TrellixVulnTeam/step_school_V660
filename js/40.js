class Student {
    constructor(firstName, lastName, group, averageMark) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.averageMark = averageMark;
    }

    getScholarship() {
        return this.averageMark === 5 ? 100 : 80;
    }
}


class Aspirant extends Student {
    constructor(firstName, lastName, group, averageMark, work) {
        super(firstName, lastName, group, averageMark);
        this.work = work;
    }

    getScholarship() {
        return super.getScholarship() + 100;
    }
}


const persons = [new Student ('Terry','Smith', 'A', 4),
                 new Aspirant('Sheldon', 'Jonson', 'B', 5 , 'Guns'),
                 new Student ('Eugene','Hills', 'C', 5),
                 new Aspirant('Alex', 'Baden', 'D', 2 , 'Weapons'),
                ];

persons.forEach(person => console.log(person.getScholarship()));





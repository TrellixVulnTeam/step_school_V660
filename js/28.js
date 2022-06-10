let city1 = {}, city2 = { name: "Brest", population: 1e4 };
city1.name = 'Grodno';
city1.population = 1.5e4;

city1.getName = function() {
  return this.name;
}

city1.exportStr = function() {
  return `name = ${this.name}\npopulation = ${this.population}\n`;
}

city2.getName = function() {
  return this.name;
}

city2.exportStr = function() {
  return `name = ${this.name}\npopulation = ${this.population}\n`;
}

function getObj() {
  return this.name;
}

city1.getCity = getObj;

city2.getCity = getObj;


/*********************************************************************************/

const obj = {
              method1() {
                return this;
              },

              method2() {
                return this;
              },

              method3() {
                return 'method3';
              },
            };

/*********************************************************************************/

function Train(dest, num, time) {

  this.dest = dest;
  this.num = num;
  this.time = time;

  this.showInfo = function() {
    return `Final destination: ${this.dest}\nTime: ${this.time}`
  }
}

const trains = [
                new Train('Brest', 101, '11.40'),
                new Train('Vitebsk', 251, '12.10'),
                new Train('Minsk', 311, '13.00'),
                new Train('Grodno', 101, '11.25'),
                new Train('Gomel', 101, '11.50'),
               ];

const parseTrains = n => trains.find(train => train.num === n)?.showInfo() ?? 'not found!'; 
const sortTrains = arr => arr.sort((a, b) => a.num - b.num || parseFloat(a.time) - parseFloat(b.time));

sortTrains(trains);

console.log(parseTrains(311));

console.log(console.log(JSON.stringify(trains)));



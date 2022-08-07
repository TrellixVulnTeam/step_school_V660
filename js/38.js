
// Получите текущую дату и время
// Выведите текущий день.
// Выведите текущий месяц.
// Выведите текущий год.
// Выведите номер текущего дня недели

const currentDate = new Date();

const options = { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long', };

console.log(currentDate.toLocaleString('be-BE', options));

console.log(currentDate.getDay(), currentDate.getDate(), currentDate.getMonth(), currentDate.getFullYear());

//****************************************************************************************************************//

// Узнайте, каким днем недели былл 10-го марта 2005 года

console.log( new Date('2005 02 10').toLocaleString( 'be-BE', { weekday: 'long' } ) );

//****************************************************************************************************************//

//Выведите количество дней с 1-го января 1970 года до настоящего момента времени. Результат округлите

console.log(Math.round( Date.now() / (1000 * 60 * 60 * 24) ));

//****************************************************************************************************************//

//Выведите количество часов, прошедшее между 1 марта 1988 года и 8 марта 2015 года

console.log( (new Date('2015 3 8').getTime() - new Date('1988 3 1').getTime()) / 3600000 );

//****************************************************************************************************************//

//Выведите на экран количество секунд, которое осталось до конца дня.

const now = new Date();

const allSeconds = new Date(`${now.getFullYear()} ${now.getMonth() + 1} ${now.getDate() + 1}`).getTime();

const nowSeconds = now.getTime();

console.log( (allSeconds - nowSeconds) / 1000 );

//****************************************************************************************************************//

//Преобразуйте массив таким образом, что бы в нем все элементы были уникальными (встречаются лишь один раз)

const arr = [1, 2, 3, 1, 2, 5, 6, 3];

console.log([...new Set(arr)]);

//****************************************************************************************************************//

//Удалить в массиве все числа, которые повторяются более двух раз.

const array = [1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8 ];

function removeRep(arr) {
    const obj = arr.reduce( (acc, el) => (acc[el] ? acc[el]++ : acc[el] = 1, acc), {} );
    return arr.filter(el => obj[el] < 3);
}

console.log(removeRep(array));

//****************************************************************************************************************//

//Удалить из второго массива только те элементы, которые встречаеются в первом массиве

const arr1 = [1, 3, 5];
const arr2 = [1, 2, 3, 4, 5, 6];

console.log( arr2.filter( el => !arr1.includes(el) ) );

//****************************************************************************************************************//

//Строка состоит из слов, разделенных одним или несколькими пробелами и знаками препинания.

const str = 'Объектно-ориентированное   программирование (ООП) —   методология программирования, основанная на   представлении программы в виде совокупности    объектов, каждый из которых является   экземпляром определённого класса, а классы    образуют иерархию наследования';

// Найдите слово наибольшей длины.

console.log(str.match(/[ёа-я]+/gi).sort((a, b) => b.length - a.length)[0]);

// Определить какая буква в строке встречается чаще всего

function getMaxLetter(str) {

    str = str.replace(/[^ёа-я]/ig, '');

    const obj = Array.prototype.reduce.apply(str, [(acc, el) => 
                (acc[el.toLowerCase()] ? acc[el.toLowerCase()]++ : acc[el.toLowerCase()] = 1, acc), {}] );

    return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
}

console.log(getMaxLetter(str));

// Вывести в алфавитном порядке все слова, содержащие наибольшее количество гласных букв

function getWords(str) {
    const arr = str.match(/[ёа-я]+/gi);
    const max = Math.max(...arr.map(word => getNumberVowel(word)));
    return arr.filter(word => getNumberVowel(word) === max).sort();
}

function getNumberVowel(word) {
    let result = 0;
    let vowels = 'аеёиоуыэюя';
    for(let letter of word) {
        vowels.includes(letter) && result++;
    }
    return result;
}

console.log(getWords(str));

// Найти все слова, в которые буква «а» входит не менее двух раз

console.log( str.match(/[ёа-я]+/gi).filter(el => /(.*а.*){2,}/gi.test(el)));

// Вывести текст, составленный из первых букв всех слов содержащих букву «и».

console.log( str.match(/[ёа-я]+/gi).filter(el => el.includes('и')).map(el => el[0]).join(''));

// Вывести слова, в которых нет повторяющихся букв

console.log( str.match(/[ёа-я]+/gi).filter(el => el === [...new Set(el.split(''))].join('')));


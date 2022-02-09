// DRY - don't repeat yourself

//task1
for(let i=10;i<=50;i=i+2){
    console.log(i);
};

//task2
const me = {
    name:'Fatulla',
    surname:'Bashirov',
    age: 18,
    pets: false
};

//task3

/*"В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"
*/

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
];

let result = [array[3],array[7],array[0],array[8],array[11],array[5],array[9],array[6],array[4],array[1],array[12],array[2],array[10]];
console.log(result.join(' '));


//task4

const full= (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
};
full("Fatulla","Bashirov");


//task5
let x=21;
while(x<=67) {
    console.log(x);
    x=x+2;
}
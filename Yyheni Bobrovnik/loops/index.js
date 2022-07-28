/*

while () {}
do {} while ()
for () {}

while (condition) { // со временем должен становиться ложью
    loop body
}

let i = 5;

while ( i >= 0 ) {
    console.log(i);
    i--;
}


let i;

do {
    i = +prompt('ВВЕДИТЕ 5 !!!');
} while (i !== 5)


for (let i; i !== 5; ) {
    i = +prompt('5');
}

for (let i = 0; i <= 10; i++) {

   console.log('before continue');

    if ( i === 4 ) {
        break;
    }

    console.log(i);
}


for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 5; j++) {
        console.log(`${i}.${j}`);
    }
}

1.1
1.2
1.3
1.4
2.1
2.2
2.3
2.4
3.1
3.2
3.3
3.4
4.1
4.2
4.3
4.4
5.1
5.2
5.3
5.4
6.1
6.2
6.3
6.4
7.1
7.2
7.3
7.4
8.1
8.2
8.3
8.4
9.1
9.2
9.3
9.4

for (let i = 1; i <= 5;  i++) {
   for (let j = 1; j < 5; j++) {
        if (i === 3 || j === 3) {
           continue;
       }
       console.log(`${i}.${j}`);
   }
}

1.1
1.2
1.4
2.1
2.2
2.4
4.1
4.2
4.4
5.1
5.2
5.4


написать программу которая выводит на экран
ДВУЗНАЧНЫЕ числа, которые делятся на 4 но не делятся на 6

не делятся на 6 - остаток не 0 - выводить (делятся на 6 - не выводить)
делятся на 4 - остаток 0 - выводить (не делятся на 4 - не выводить)

*/

for (let namberTwoDigit = 1; namberTwoDigit <= 99 ; namberTwoDigit++) {
    if ( (namberTwoDigit % 4) !== 0 || (namberTwoDigit % 6) === 0 || namberTwoDigit < 9 ) {
        continue
    }
    console.log(namberTwoDigit);
}
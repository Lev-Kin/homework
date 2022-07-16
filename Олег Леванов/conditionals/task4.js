// Напишите программу в которой пользователя
// спрашивают его пол. Если был выбран мужской
// пол, то пользователя просят ввести возраст (в
// программе используйте 2 prompt’a один для пола,
// второй для возраста) . В зависимости от возраста
// выводится статус человека. От 0 до 14 (вкл.) –
// «подросток», от 14 до 20 (вкл.) – «юноша», от 20 до
// 60 (вкл.) – «молодой человек», от 60 до 100 – «дед».
// Если был выбран женский пол, то вне зависимости
// от указанного возраста всегда выводится
// «девушка»

let inputGen = prompt('Напишите свой пол');
const gen = inputGen.toLocaleLowerCase();
let inputAge;
let age;
let ageGroup;
switch (gen) {
    case 'мужской':
        inputAge = prompt('Сколько вам лет?');
        age = Number(inputAge);
        ageGroup;

        if (inputAge === null || inputAge === '') {
            ageGroup = 'Надо было вести число а не пустую строку.';
        } else {
            if (age <= 14) {
                ageGroup = age <= 3 ? 'Вы малыш.' : 'Вы подросток.';
            } else if (age > 14 && age < 20) {
                ageGroup = 'Вы юныша.';
            } else if (age < 100) {
                ageGroup = age >= 60 ? 'Вы дед.' : 'Вы молодой человек.';
            } else {
                ageGroup = 'Некорректный ввод возраста!!!';
            }
        }

        alert(ageGroup);
        break;

    case 'женский':
        inputAge = prompt('Сколько вам лет?');
        age = Number(inputAge);
        ageGroup;

        if (inputAge === null || inputAge === '') {
            ageGroup = 'Надо было вести число а не пустую строку.';
        } else {
            if (age <= 14) {
                ageGroup = age <= 3 ? 'Вы малышка.' : 'Вы подросток.';
            } else if (age > 14 && age < 20) {
                ageGroup = 'Вы юная девушка.';
            } else if (age < 100) {
                ageGroup = age >= 60 ? 'Вы бабушка.' : 'Вы молодая девушка.';
            } else {
                ageGroup = 'Некорректный ввод возраста!!!';
            }
        }

        alert(ageGroup);
        break;

    default:
        alert('Нет такого пола.');
}


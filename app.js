//Дан объект car. Написать условие если поле lastService больше 5 месяцев (из строки нужно достать число) то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.//
let car = { 
    name: 'Lexus', 
    age: 10, 
    lastService: '1 month', 
    create: 2008, 
    needRepair: false 
}

//На основе строки. Cделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать цикл for.//
let sting = "JavaScript is a pretty good language";
let Newsting = '';
for (let i = 0; i < sting.length; i++) {
    Newsting += (sting[i - 1] == ' ') ? sting[i].toUpperCase() : sting[i];
    Newsting = Newsting.split(' ').join('');
}
//Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива//
function doubleArray(nambers){
    return nambers.concat(nambers);
 }
 var nambers = [1,2,3];
 //Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений//
 
 



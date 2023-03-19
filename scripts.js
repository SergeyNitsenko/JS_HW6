'use strict'

// Task 1

{
    let str = 'aaa@bbb@ccc';

    let str1 = str.replace(/@/gi, '!');
    console.log(str1);
}

// Task 2 

{
    let date = new Date();

    date = date.toLocaleDateString('ru');
    console.log(date);

    date = date.split('.');

    let date1 = date[0] + '/' + date[1] + '/' + date[2];
    console.log(date1);
}
{
    let date = '2025-12-31';

    date = date.split('-');

    date = date.join('/');
    console.log(date);
}
{
    let date = '2025-12-31';
    date = date.replace(/-/gi, '/')
    console.log(date.replace(/-/gi, '/'));
}


// Task 3

{
    let str = 'Я учу javascript!';

    let str1 = str.substring(2, 5 + 11);
    let str1_1 = str.substring(2, 5) + ' ' + str.substring(6, 16);
    let str2 = str.substr(2, 14);
    let str3 = str.slice(2, 5 + 11);

    console.log(str1);
    console.log(str1_1);
    console.log(str2);
    console.log(str3);
}


// Task 4

{
    let arr = [4, 2, 5, 19, 13, 0, 10];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** 3;
    }

    let result = Math.sqrt(sum);

    console.log(result);
}


// Task 5

{

    let c;
    function result(a, b) {
        c = Math.abs(a - b);
        return c;
    }

    console.log(result(3, 5));
    console.log(result(6, 1));
}


// Task 6

{
    let date = new Date();
    date = date.toLocaleString('ru');
    date = date.split(',');
    date = date.reverse();
    date = String(date);
    date = date.replace(/,/gi, ' ')

    console.log(date);
}


// Task 7

{
    let str = 'aa aba abba abbba abca abea'
    let str1 = str.match(/.ab*a/gi)
    let str2 = str.match(/ab+a/gi)
    console.log(str1);
    console.log(str2);
}


// Task 8

{
    function validPhone(numb) {
        let phone = /^\+\d{3}\d{2}\d{7}$/gi;
        let numTest = phone.test(numb)
        console.log(numTest);

    }

    //validPhone(prompt('Введите номер телефона :'));

}

// Task 9

{
    function checkEmail(emailUser) {
        let emailTest = /^\w\D+\w.{1,}\w@\D+\w{1,11}\.\D+\w{1,11}$/gi;
        let email = emailTest.test(emailUser);
        console.log(email);
    }

    checkEmail(prompt('Введите email :'))
}
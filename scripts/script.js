// Lesson 1
// 1 Задание

'use strict';
// let tc = 15;
// let tf = (9 / 5) * tc + 32;
// alert(tf);

// 2 Задание
// //let name = 'Vasiliy'
// //let admin = 'Vasiliy'
// //alert(name);

// 3* Задание
// let task = 1000 + '108'; //ответ = 1000108
// alert(task);

//Lesson 2
// 1 Задание

// let a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
//  В данном примере используется инкримент в префиксная форме, поэтому alert возвращает значение 2.
// d = b++; alert(d);           // 1
// В данном примере используется инкримент в постфиксной форме, поэтому alert возвращает значение 1.
// c = (2+ ++a); alert(c);      // 5
//  В данном примере "a" будет равно уже не 1, а 2 т.к в первом примере прибавили одну единицу, поэтому ответ 5.
// d = (2+ b++); alert(d);      // 4
//  В данном примере  b = 2 т.к во 2 прмере мы прибавили 1, затем в данном прмере использовали инкримент в постфиксной форме, поэтому значение возвращено к 2. 2 + 2 = 4.
// alert(a);                    // 3
//  В данном примере изначально a = 1, затем два раза использовался инкримент, получается ответ 3
// alert(b);                    // 3
//  В данном примере изначально b = 1, затем два раза использовался инкримент, получается ответ 3

// Задание 2

// let a = 2;
// let x = 1 + (a *= 2);
// alert(x); // ответ : 5.

// Задание 3

// let a = -12;
// let b = 6;
// if(a > 0 && b > 0)
//     alert(a - b);
// else if(a < 0 && b < 0)
//     alert(a * b);
// else if(a > 0 && b < 0 || a < 0 && b > 0)
//     alert(a + b);

// Задание 4

let a = 1;
switch (a){
    case 1: alert(a++);
    case 2: alert(a++);
    case 3: alert(a++);
    case 4: alert(a++);
    case 5: alert(a++);
    case 6: alert(a++);
    case 7: alert(a++);
    case 8: alert(a++);
    case 9: alert(a++);
    case 10: alert(a++);
    case 11: alert(a++);
    case 12: alert(a++);
    case 13: alert(a++);
    case 14: alert(a++);
    case 15: alert(a++);

    default: null;
}

// Задание 5
function CalcAddition(arg1, arg2){
    return arg1 + arg2;
}
function CalcSubtraction(arg1, arg2){
    return arg1 - arg2;
}
function CalcMultiplication(arg1, arg2){
    return arg1 * arg2;
}
function CalcDivision(arg1, arg2){
    return arg1 / arg2;
}

// Задание 6
function mathOperation(arg1, arg2, operation){
    switch(operation){
    case CalcAddition: 
        return CalcAddition(arg1, arg2);
    case CalcSubtraction:
        return CalcSubtraction(arg1, arg2);
    case CalcMultiplication:
        return CalcMultiplication(arg1, arg2);
    case CalcDivision:
        return CalcDivision(arg1, arg2);
    default:
        return null;
    }
}
mathOperation()
console.log(mathOperation(12, 6, CalcAddition));
console.log(mathOperation(12, 6, CalcSubtraction));
console.log(mathOperation(12, 6, CalcMultiplication));
console.log(mathOperation(12, 6, CalcDivision));
// Задание 7

// Задание 8




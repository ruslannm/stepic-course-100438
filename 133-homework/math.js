/*
 * Домашнее задание: реализуйте функции sum, mul и avg
 */

function sum(...args) { return args.reduce((a, b) => a + b, 0);}
function mul(...args) {return args.reduce((a, b) => a * b, 1); /* возвращает произведение аргументов */ }
function avg(...args) {return sum(...args) / args.length ; /* возвращает среднее арифметическое аргументов */ }
module.exports = {
    sum,
    mul,
    avg,
}
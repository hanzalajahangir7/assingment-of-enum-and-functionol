// QUESTION 1
function greet(name) {
    if (name === void 0) { name = "world"; }
    return ("hello how are you ".concat(name));
}
console.log(greet());
// QUESTION 2
function average() {
    var number = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        number[_i] = arguments[_i];
    }
    if (number.length === 0) {
        return 0;
    }
    var sum = number.reduce(function (acc, crr) { return acc + crr; }, 0);
    return sum / number.length;
}
console.log(average(3, 6, 3));
// QUESTION 3
var Data;
(function (Data) {
    Data["active"] = "hanzala";
    Data["inactive"] = "ali";
    Data["pending"] = "usama";
})(Data || (Data = {}));
console.log(Data);
console.log(Data.inactive);
console.log(Data.pending);
console.log(Data.active);

var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * 1);
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
var ny = 'rana';
var sentence = "My name is " + ny + " i am a jark";
console.log(sentence);
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c);

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) {
    return arr[arr.length - 1];
};
var l = last([1, 2, 3]);
var l2 = last(["a", "b", "c"]);
var makeArr = function (x, y) {
    return [x, y];
};
var v = makeArr(5, 6);
var v2 = makeArr("a", "b");
var v3 = makeArr("a", 1);
var makeFullname = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
var v4 = makeFullname({ firstName: "bob", lastName: "junior", age: 15 });

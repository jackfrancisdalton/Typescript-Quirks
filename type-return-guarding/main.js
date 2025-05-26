var isString = function (x) {
    return typeof x === 'string';
};
var value = 2;
if (isString(value)) {
    var str = value;
    str.toUpperCase(); // ✅ Safe
}
else {
    value.toFixed(2); // ✅ Still works
}

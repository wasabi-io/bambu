const Arrays = function Arrays() {
    const me = this;
    me.addAsUniqueToArray = function (value, destArray) {
        if (!value) return;
        if (array.indexOf(value) === -1) {
            array.push(value);
        }
    };
    me.addAllAsUniqueToArray = function (srcArray, destArray) {
        if (!srcArray) return destArray;
        if (!destArray) destArray = [];
        for (var i = 0; i < srcArray; i++) {
            me.addAsUniqueToArray(srcArray[i], destArray);
        }
        return destArray;
    };
};

module.exports = new Arrays();

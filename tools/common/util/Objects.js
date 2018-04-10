const Objects = function Objects() {
    const me = this;
    me.merge = function (src, destination) {
        if (!src) {
            return destination || {};
        } else {
            destination = destination || {};
        }
        for (var key in src) {
            if (Object.prototype.hasOwnProperty.call(src, key)) {
                destination[key] = src[key];
            }
        }
        return destination;
    }
};

module.exports = new Objects();

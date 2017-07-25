exports.window2Canvas = function (can, x, y) {
	let box = can.getBoundingClientRect();
	return {
		x: (x - box.left) * (can.width / box.width),
		y: (y - box.top) * (can.height / box.height),
	}
};
exports.bindEvent = function (el, fn, data) {
    return function(e) {
        fn.apply(el, [e, data]);
    }
};
function Stroke(dom, board) {
	this.dom = dom;
	this.board = board;
	this.initEvent();
}
Stroke.prototype = {
	initEvent: function () {
		let self = this;
		this.dom.addEventListener('click', function (e) {
			self.board.type = 'eraser';
			self.board.eraser(e.offsetX, e.offsetY);
		});
	}
};
module.exports = Stroke;
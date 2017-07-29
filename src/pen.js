function Pen(ctx) {
    this.ctx = ctx;
    this.can = this.ctx.canvas;
	this.color = ctx.strokeStyle;
	this.weight = ctx.lineWidth;
    this.type = 'none';
}
Pen.prototype = {
    
};
module.exports = Pen;
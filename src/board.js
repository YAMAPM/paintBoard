import _ from './util/util';
function Board(pen, can, ctx) {
	this.init(pen, can,ctx);
    let mousedownHandler = this.mousedownHandler = function(e) {
        let mousemoveHandler = function(e) {
            var x1 = e.offsetX;
            var y1 = e.offsetY;
            ctx.lineTo(x1,y1);
            ctx.stroke();
        };
        let mouseupHandler = function(e) {
            canvas.removeEventListener('mousemove',mousemoveHandler);
            // canvas.removeEventListener('mousedown',mousedownHandler);
        };
        canvas.addEventListener('mousemove',mousemoveHandler);
        canvas.addEventListener('mouseup',mouseupHandler);
        var d = window.devicePixelRatio;
        var x = e.offsetX;
        var y = e.offsetY;
        ctx.moveTo(x,y);
    };
	this.initEvent(ctx, can, true, mousedownHandler);
}
Board.prototype = {
    init:function(pen,can,ctx) {
        this.pen = pen;
        this.can = can;
        this.ctx = ctx || this.can.getContext('2d');
    },
    initEvent:function(ctx,canvas, first, mousedownHandler) {
        let self = this;
        if (first) {
            canvas.addEventListener('mousedown',mousedownHandler);
            return;
        } else {
            canvas.removeEventListener('mousedown', self.mousedownHandler);
        }
    },
    draw:function(type) {
        /*let close = {};
        let self = this;
        let surfaceImgData = null;
        let startHandler = function(e) {
            let x1 = e.offsetX;
            let y1 = e.offsetY;
            surfaceImgData = self.ctx.getImageData(0, 0, self.can.width, self.can.height);
            self.ctx.beginPath();
            self.ctx.moveTo(x1, y1);
            close.x1 = x1;
            close.y1 = y1;
            self.can.addEventListener('mousemove', moveHandler)
        };
        let moveHandler = function(e) {
            let x2 = e.offsetX;
            let y2 = e.offsetY;
            close.x2 = x2;
            close.y2 = y2;
            // self.ctx.clearRect(0, 0, self.can.width, self.can.height);
            self.ctx.putImageData(surfaceImgData, 0, 0);
            self.ctx.beginPath();
            self.ctx.moveTo(close.x1, close.y1);
            self.ctx.lineTo(x2, y2);
            self.ctx.stroke();
            console.log(x2, y2);
        };
        let finishHandler = function(e) {
            let x3 = e.offsetX;
            let y3 = e.offsetY;
            close.x3 = x3;
            close.y3 = y3;
            self.can.removeEventListener('mousemove', moveHandler);
        };*/
        let self = this;
        switch (type) {
            case 'line':
                this.initEvent(this.ctx, this.can, false);
                this.can.addEventListener('mousedown', _.bindEvent(self.pen, self.pen.drawStart, type));
                this.can.addEventListener('mouseup', _.bindEvent(self.pen, self.pen.drawEnd, type));
                break;
            case 'rect':
                this.initEvent(this.ctx, this.can, false);
                this.can.addEventListener('mousedown', _.bindEvent(self.pen, self.pen.drawStart, type) );
                this.can.addEventListener('mouseup', _.bindEvent(self.pen, self.pen.drawEnd, type));
                break;
            case 'circle':
                this.can.addEventListener('mousedown', self.pen.drawStart);
                this.can.addEventListener('mouseup', self.pen.drawEnd);
                break;
            default:
                this.initEvent();
        }
	},
    openPic: function(data) {
        let self = this;
        let img = new Image();
        img.src = data;
        img.style.display = 'none';
        document.body.appendChild(img);
        img.onload = function () {
            self.ctx.drawImage(img, 0, 0);
            document.body.removeChild(document.querySelector('img'));
        }
    }
};
module.exports = Board;
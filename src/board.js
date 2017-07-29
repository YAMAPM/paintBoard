import _ from './util/util';
function Board(pen, can, ctx) {
	this.init(pen, can,ctx);
	this.initEvent(ctx, can);
}
Board.prototype = {
    init:function(pen,can,ctx) {
        this.pen = pen;
        this.can = can;
        this.ctx = ctx || this.can.getContext('2d');
    },
    initEvent:function(ctx,canvas) {
        var self = this;
        let close = {};
        let surfaceImgData = null;
        let mousedownHandler = function (e) {
            self.drawing = true;    
            console.log('mousedown', self.drawing, self.pen.type);
            let x1 = e.offsetX;
            let y1 = e.offsetY;
            close.x1 = x1;
            close.y1 = y1;
            surfaceImgData = self.ctx.getImageData(0, 0, self.can.width, self.can.height);
            
            
        };
        let mousemoveHandler = function (e) {
            console.log(self.drawing, self.pen.type);
            if (self.drawing) {
                switch (self.pen.type) {
                    case 'line':
                        if (self.drawing) {
                            let x2 = e.offsetX;
                            let y2 = e.offsetY;
                            close.x2 = x2;
                            close.y2 = y2;
                            self.ctx.putImageData(surfaceImgData, 0, 0);
                            self.ctx.beginPath();
                            self.ctx.moveTo(close.x1, close.y1);
                            self.ctx.lineTo(x2, y2);
                            self.ctx.stroke();
                        }
                        break;
                    case 'rect':
                        if (self.drawing) {
                            /*let edit = document.querySelector('#choose .choice .opt').getAttribute('edit');
                            if (edit == '1') {
                                if (self.ctx.isPointInPath(e.offsetX, e.offsetY)) {
                                    console.log('asdf');
                                    self.ctx.restore();
                                    self.ctx.clearRect(0, 0, self.can.width, self.can.height);
                                    // self.ctx.putImageData(surfaceImgData, 0, 0);
                                    self.ctx.rect(close.x1, close.y1, Math.abs(close.x1 - close.x2), Math.abs(close.y1 - close.y2));
                                    self.ctx.stroke();
                                    return;
                                }
                            }*/
                            let x2 = e.offsetX;
                            let y2 = e.offsetY;
                            close.x2 = x2;
                            close.y2 = y2;
                            self.ctx.putImageData(surfaceImgData, 0, 0);
                            self.ctx.save();
                            surfaceImgData = self.ctx.getImageData(0, 0, self.can.width, self.can.height);
                            ctx.beginPath();
                            self.ctx.rect(close.x1, close.y1, Math.abs(close.x1 - close.x2), Math.abs(close.y1 - close.y2));
                            self.ctx.stroke();
                            ctx.closePath();
                        }
                        break;
                    case 'polyline':
                        if (self.drawing) {
                            let x2 = e.offsetX;
                            let y2 = e.offsetY;
                            close.x2 = x2;
                            close.y2 = y2;
                            self.ctx.putImageData(surfaceImgData, 0, 0);
                            self.ctx.beginPath();
                            self.ctx.moveTo(close.x1, close.y1);
                            self.ctx.lineTo(x2, y2);
                            self.ctx.stroke(); 
                        }
                        break;
                    case 'polygon':
                        if (self.drawing) {

                        }
                        break;
                    case 'eraser':
                        if (self.drawing) {
                            self.ctx.beginPath();
                            self.ctx.fillStyle = 'white';
                            self.ctx.strokeStyle = 'white';
                            self.ctx.rect(e.offsetX - 5, e.offsetY - 5, 10, 10);
                            self.ctx.stroke();
                            if (self.ctx.isPointInPath(e.offsetX - 5, e.offsetY - 5)) {
                                self.ctx.rect(e.offsetX - 5, e.offsetY - 5, 10, 10);
                                self.ctx.fillStyle = 'white';
                                self.ctx.stroke();
                            }  
                        }
                        
                }
            }
            
            
        };
        let mouseupHandler = function (e) {
            if (self.pen.type != 'polyline') {
                self.drawing = false;
            } else {

            }
            console.log('mouseup', self.drawing);
        }
        let mousedbHandler = function (e) {
            self.drawing = false;
            console.log('mousedbHandler', self.drawing);
        }
        canvas.addEventListener('mousedown', mousedownHandler);
        canvas.addEventListener('mousemove', mousemoveHandler);
        canvas.addEventListener('mouseup', mouseupHandler);

        // canvas.addEventListener('dbclick', mousedbHandler);
    },
    draw:function(type) {

        let self = this;
        switch (type) {
            case 'line':
                this.pen.type = 'line';
                break;
            case 'rect':
                this.pen.type = 'rect';
                break;
            case 'circle':
                this.pen.type = 'circle';
                break;
            case 'polyline':
                this.pen.type = 'polyline';
                break;
            case 'polygon':
                this.pen.type = 'polygon';
                break;
            default:
        }
	},
    openPic: function(data) {
        let self = this;
        let img = new Image();
        img.src = data;
        img.style.display = 'none';
        document.body.appendChild(img);
        img.onload = function () {
            self.ctx.drawImage(img, 0, 0, self.can.width, self.can.height);
            document.body.removeChild(document.querySelector('img'));
        }
    },
    slicePic: function(x, y) {
        this.ctx.save();
        this.ctx.strokeStyle = 'black';
        this.draw('rect');
        this.ctx.restore(); 
    },
    eraser: function (x, y) {
        console.log('eraser');
        this.pen.type = 'eraser';
    }
};
module.exports = Board;
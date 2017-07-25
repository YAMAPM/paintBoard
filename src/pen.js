function Pen(ctx) {
    this.ctx = ctx;
    this.can = this.ctx.canvas;
	this.color = ctx.strokeStyle;
	this.weight = ctx.lineWidth;
}
Pen.prototype = {
    drawStart: function(e, type, points) {
        this.drawing = true;
        let self = this;
        // self.ctx = self.getContext('2d');
        let close = {};
        let x1 = e.offsetX;
        let y1 = e.offsetY;
        self.ctx.beginPath();
        self.ctx.moveTo(x1, y1);
        close.x1 = x1;
        close.y1 = y1;
        let surfaceImgData = self.ctx.getImageData(0, 0, self.can.width, self.can.height);
        switch (type) {
            case 'line':
                let moveHandler = function(e) {
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
                };
                if (self.drawing) {
                    self.can.addEventListener('mousemove', moveHandler);
                }
                break;
            case 'rect':
                let rectmoveHandler = function(e) {
                    if (self.drawing) {
                        let x2 = e.offsetX;
                        let y2 = e.offsetY;
                        close.x2 = x2;
                        close.y2 = y2;
                        self.ctx.putImageData(surfaceImgData, 0, 0);
                        self.ctx.strokeRect(close.x1, close.y1, Math.abs(close.x1 - close.x2), Math.abs(close.y1 - close.y2));
                    }
                };
                if (self.drawing) {
                    self.can.addEventListener('mousemove', rectmoveHandler);
                }
                break;
            
        }
    },
    drawEnd: function(e, type, points) {
        switch (type) {
            case 'line':
                let x3 = e.offsetX;
                let y3 = e.offsetY;
                // self.can.removeEventListener('mousemove', moveHandler);
                this.drawing = false;
                break;
            case 'rect':
                this.drawing = false;
                break;
        }   
    }
};
module.exports = Pen;
function Tools(dom, board, can, ctx) {  
    this.init(dom, can, ctx);
    this.initEvent(board);
};

Tools.prototype = {
    init: function (dom, can, ctx) {
        this.toolsDom = dom;
        this.can = can;
        this.ctx = ctx;
    },
    initEvent: function (board) {
        let clickHandler = function (e) {
            let dom = e.target;
            console.log(dom);
            // let startX = e.offsetX;
            // let startY = e.offsetY;
            switch (e.target.tagName) {
                case 'line':
                    board.draw('line');
                    break;
                case 'circle':
                    board.draw('circle');
                    break;
                case 'rect':
                    board.draw('rect');
                    break;
            }
        };
        this.toolsDom.addEventListener('click', clickHandler);
    }
};
module.exports = Tools;
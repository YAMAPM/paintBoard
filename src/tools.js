import Choose from './tool/choose';
import Shape from './tool/shape';
function Tools(dom, board, can, ctx) {
    this.init(dom, board, can, ctx);
    this.initEvent(board);
};

Tools.prototype = {
    init: function (dom, board, can, ctx) {
        this.toolsDom = dom;
        this.can = can;
        this.ctx = ctx;
        this.choose = new Choose(dom.querySelector('#choose'), board);
        this.shape = new Shape(dom.querySelector('#shape'), board);
    },
    initEvent: function (board) {
        // 点击图形
        let clickHandler = function (e) {
            let dom = e.target;
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
                case 'polyline':
                    board.draw('polyline');
                    break;
                case 'polygon':
                    board.draw('polygon');
                    break;
            }
        };
        this.shape.dom.addEventListener('click', clickHandler);
    }
};
module.exports = Tools;
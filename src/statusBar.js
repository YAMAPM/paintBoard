function StatusBar(dom, ctx, board) {
    this.dom = dom;
    this.ctx = ctx;
    this.board = board;
    this.init();
};
StatusBar.prototype = {
    init: function() {
    	this.board.point = {x: 0, y: 0};	    
    }
    
};
module.exports = StatusBar;
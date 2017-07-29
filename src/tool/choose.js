function Choose(dom, board) {
    this.board = board;
    this.sliceDom = dom.querySelector('.slice');
    this.rotateDom = dom.querySelector('.rotate');
    this.initEvent();
}
Choose.prototype = {
    initEvent: function () {
        let self = this;
        this.sliceDom.addEventListener('click', function (e) {
            self.board.slicePic();
        });
        this.rotateDom.addEventListener('click', function (e) {
            
        });
        document.querySelector('#choose .choice .opt').addEventListener('click', function (e) {
            if (/active/.test(e.target.className)) {
                e.target.className = e.target.className.replace(/active/, '');
                e.target.setAttribute('edit', '0');
            } else {
                e.target.className += ' active';
                e.target.setAttribute('edit', '1');
            }
        });
    }
};
module.exports = Choose;
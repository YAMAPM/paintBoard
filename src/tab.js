function Tab(dom, board, ctx) {
    this.dom = dom;
    this.ctx - ctx;
    this.file = dom.querySelector('#file');
    this.seen = dom.querySelector('#seen');
    this.board = board;
    this.initEvent();
}
Tab.prototype = {
    initEvent: function () {
        let self = this;
        self.dom.querySelector('#open').addEventListener('change', function (e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                self.seen.data = e.target.result;
                self.board.openPic(e.target.result);
            }
        });
        this.seen.addEventListener('click', function(e) {
            let ev = document.createEvent('MouseEvents');
            ev.initEvent('click',true, true);
            self.dom.querySelector('#open').dispatchEvent(ev);
        });
    }
};
module.exports = Tab;
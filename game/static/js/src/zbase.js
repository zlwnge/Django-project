export class QiuQiuGame {
	constructor(id) {
		this.id = id;
		this.$qiuqiu_game = $('#' + id);
		// this.menu = new QiuQiuGameMenu(this);
        this.playground = new QiuQiuGamePlayground(this);

        this.start();
	}

    start() {
    }
}

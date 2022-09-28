class QiuQiuGame {
	constructor(id) {
		this.id = id;
		this.$qiuqiu_game = $('#' + id);
		this.menu = new QiuQiuGameMenu(this);
	}
}

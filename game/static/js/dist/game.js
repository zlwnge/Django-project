class QiuQiuGameMenu {
	constructor(root) {
		this.root = root;
		this.$menu = $(`
<div class="qiuqiu-game-menu"></div>
`);
		this.root.$qiuqiu_game.append(this.$menu);
	}
}
class QiuQiuGame {
	constructor(id) {
		this.id = id;
		this.$qiuqiu_game = $('#' + id);
		this.menu = new QiuQiuGameMenu(this);
	}
}

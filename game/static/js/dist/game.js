class QiuQiuGameMenu {
	constructor(root) {
		this.root = root;
		this.$menu = $(`
<div class="qiuqiu-game-menu">
	<div class="qiuqiu-game-menu-field">
		<div class="qiuqiu-game-menu-field-item qiuqiu-game-menu-field-item-single">
            单人模式
		</div>
        </br>
        <div class="qiuqiu-game-menu-field-item qiuqiu-game-menu-field-item-multi">
            多人模式
        </div>
        </br>
        <div class="qiuqiu-game-menu-field-item qiuqiu-game-menu-field-item-settings">
            设置
        </div>
	</div>
</div>
`);
		this.root.$qiuqiu_game.append(this.$menu);
        this.$single = this.$menu.find('.qiuqiu-game-menu-field-item-single');
        this.$multi = this.$menu.find(".qiuqiu-game-menu-field-item-multi");
        this.$settings = this.$menu.find(".qiuqiu-game-menu-field-item-settings");

        this.start();
	}

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single.click(function(){
            outer.hide();
            outer.root.playground.show();
        });
        this.$multi.click(function(){

        });
        this.$settings.click(function(){

        });
    }

    show() {
        this.$menu.show();
    }

    hide() {
        this.$menu.hide();
    }
}
class QiuQiuGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $('<div>游戏界面</div>');

        this.hide();
        this.root.$qiuqiu_game.append(this.$playground);

        this.start();
    }

    start() {

    }

    show() {
        this.$playground.show();
    }

    hide() {
        this.$playground.hide();
    }
}
class QiuQiuGame {
	constructor(id) {
		this.id = id;
		this.$qiuqiu_game = $('#' + id);
		this.menu = new QiuQiuGameMenu(this);
        this.playground = new QiuQiuGamePlayground(this);

        this.start();
	}

    start() {
    }
}

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
class GameMap extends QiuQiuGameObject {
    constructor(playground) {
        super();
        this.playground = playground;
        this.$canvas = $('<canvas></canvas>');
        this.ctx = this.$canvas[0].getContext('2d');
        this.ctx.canvas.width = this.playground.width;
        this.ctx.canvas.height = this.playground.height;
        this.playground.$playground.append(this.$canvas);
    }

    start() {
    }

    update() {
    }
}
let QIUQIU_GAME_OBJECTS = [];

class QiuQiuGameObject {
    constructor() {
        QIUQIU_GAME_OBJECTS.push(this);

        this.has_called_start = false; // 是否执行过start函数
        this.timedelta = 0; // 当前帧距离上一帧的时间间隔
    }

    start() { // 只会在第一帧执行一次
    }

    update() { // 每一帧均会执行一次
    }

    on_destory() { // 在被销毁前执行一次
    }

    destory() { // 删除该物体
        this.on_destory();

        for (let i = 0; i < QIUQIU_GAME_OBJECTS.length; i ++) {
            if (QIUQIU_GAME_OBJECT[i] === this) {
                QIUQIU_GAME_OBJECT.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp;
let QIUQIU_GAME_ANIMATION = function(timestamp) {

    for (let i = 0; i < QIUQIU_GAME_OBJECT.length; i ++) {
        let obj = QIUQIU_GAME_OBJECT[i];
        if (!obj.has_called_start) {
            obj.start();
            obj.has_called_start = true;
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;

    requestAnimationFrame(QIUQIU_GAME_ANIMATION);
}


requestAnimationFrame(QIUQIU_GAME_ANIMATION);
class QiuQiuGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $('<div class="qiuqiu-game-playground"></div>');

        // this.hide();
        this.root.$qiuqiu_game.append(this.$playground);
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        this.game_map = new GameMap(this);

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

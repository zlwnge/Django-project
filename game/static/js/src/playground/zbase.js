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

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

    for (let i = 0; i < QIUQIU_GAME_OBJECTS.length; i ++) {
        let obj = QIUQIU_GAME_OBJECTS[i];
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

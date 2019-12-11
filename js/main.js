let game;
let model;
let emitter;
let G;
let controller;
let mediaManager;
window.onload = function () {
    let isMobile = this.navigator.userAgent.indexOf("Mobile");
    if (isMobile === -1) {
        isMobile = this.navigator.userAgent.indexOf("Tablet");
    }
    let config = null;
    if (isMobile === -1) {
        config = {
            type: Phaser.AUTO,
            width: 480,
            height: 640,
            parent: 'phaser-game',
            scene: [SceneLoad, SceneTitle, SceneMain, SceneOver]
        };
    } else {
        config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            parent: 'phaser-game',
            scene: [SceneLoad, SceneTitle, SceneMain, SceneOver]
        };
    }
    G = new Constants();
    model = new Model();
    model.isMobile = isMobile;
    game = new Phaser.Game(config);
}
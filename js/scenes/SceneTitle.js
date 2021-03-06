class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTitle');
    }

    preload() {
        this.load.image('title', 'images/title.png');
        this.load.image('button1', 'images/ui/buttons/2/1.png');
    }

    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();

        this.alignGrid = new AlignGrid({ rows: 11, cols: 11, scene: this });

        const title = this.add.image(0, 0, 'title');
        this.alignGrid.placeAtIndex(38, title);
        Align.scaleToGameW(title, .8);

        const btnStart = new FlatButton({ 
            scene: this, 
            key: 'button1', 
            text: 'Start', 
            event: 'start_game' 
        });

        this.alignGrid.placeAtIndex(93, btnStart);

        emitter.on('start_game', this.startGame, this);
    }

    startGame() {
        this.scene.start('SceneMain');
    }

    update() {

    }

}
class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() {
        //load our images or sounds 
    }
    create() {
        //define our objects
        mediaManager = new MediaManager({ scene: this });
        const sb = new SoundButtons({scene: this});
    }

    update() {
        //constant running loop
    }

}
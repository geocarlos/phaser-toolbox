class MediaManager {
    constructor(config) {
        this.scene = config.scene;
        emitter.on(G.PLAY_SOUND, this.playSond, this);
        emitter.on(G.MUSIC_CHANGED, this.musicChanged, this);
    }

    musicChanged() {
        if(this.background) {
           model.musicOn ? this.background.play() : this.background.stop();
        }
    }

    playSond(key) {
        if (model.soundOn) {
            const sound = this.scene.sound.add(key);
            sound.play();
        }
    }

    setBackgroundMusic(key) {
        if (model.musicOn) {
            this.background = this.scene.sound.add(key, { volume: .5, loop: true });
            this.background.play();
        }
    }
}
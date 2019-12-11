class Model {
    constructor() {
        this._score = 0;
        this.soundOn = true;
        this._musicOn = true;
    }

    set musicOn(value) {
        this._musicOn = value;
        emitter.emit(G.MUSIC_CHANGED);
    }

    get musicOn() {
        return this._musicOn;
    }
    
    set score(value) {
        this._score = value;
        emitter.emit(G.SCORE_UPDATED);
    }

    get score() {
        return this._score;
    }
}
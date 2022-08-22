import { GameMap } from '/static/js/game_map/game_map.js'
import { Kyo } from '/static/js/player/kyo.js'

class KOF {
    constructor(id) {
        this.$kof = $('#' + id)
        this.$game_map = new GameMap(this);

        this.players = [
            new Kyo(this, {
                id: 0,
                x: 120,
                y: 0,
                width: 120,
                height: 200,
                color: 'blue',
            }),
            new Kyo(this, {
                id: 1,
                x: 1000,
                y: 0,
                width: 120,
                height: 200,
                color: 'red',
            }),
        ];
        console.log(this.$kof);
        console.log(this.$game_map);
    }
}

export {
    KOF
}
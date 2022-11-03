const { Model } = require("objection");
const BaseModel = require("./baseModel");

class Game_tag extends BaseModel {
    static tableName = 'game_tag'

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['gameId', 'userId'],
            properties: {
                id: { type: 'integer' },
                gameId: { type: 'integer' },
                tagId: { type: 'integer' },
            }
        }
    }

}

module.exports = Game_tag
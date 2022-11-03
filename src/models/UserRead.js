const BaseModel = require("./baseModel");

class UserRead extends BaseModel {
    static tableName = 'user_read'

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['userId'],
            properties: {
                id: { type: 'integer' },
                userId: { type: 'integer' },
            }
        }
    }
}

module.exports = UserRead
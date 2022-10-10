/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('game_tag').insert([
    { gameId: "1", tagId: "7" },
    { gameId: "1", tagId: "2" },
    { gameId: "1", tagId: "1" },
    { gameId: "1", tagId: "4" },
    { gameId: "1", tagId: "11" },
    { gameId: "1", tagId: "6" },

    { gameId: "2", tagId: "4" },
    { gameId: "2", tagId: "3" },
    { gameId: "2", tagId: "6" },
    { gameId: "2", tagId: "5" },
    { gameId: "2", tagId: "11" },

    { gameId: "3", tagId: "5" },
    { gameId: "3", tagId: "8" },
    { gameId: "3", tagId: "9" },
    { gameId: "3", tagId: "4" },
    { gameId: "3", tagId: "11" },

    { gameId: "4", tagId: "1" },
    { gameId: "4", tagId: "5" },
    { gameId: "4", tagId: "11" },
    { gameId: "4", tagId: "2" },

    { gameId: "5", tagId: "1" },
    { gameId: "5", tagId: "5" },
    { gameId: "5", tagId: "11" },
    { gameId: "5", tagId: "8" },
    { gameId: "5", tagId: "4" },

    { gameId: "6", tagId: "5" },
    { gameId: "6", tagId: "12" },
    { gameId: "6", tagId: "6" },

    { gameId: "7", tagId: "1" },
    { gameId: "7", tagId: "10" },
    { gameId: "7", tagId: "7" },

    { gameId: "8", tagId: "2" },
    { gameId: "8", tagId: "5" },
    { gameId: "8", tagId: "9" },
    { gameId: "8", tagId: "13" },
    { gameId: "8", tagId: "14" },

    { gameId: "9", tagId: "13" },
    { gameId: "9", tagId: "7" },
    { gameId: "9", tagId: "15" },

    { gameId: "10", tagId: "13" },
    { gameId: "10", tagId: "2" },
    { gameId: "10", tagId: "16" },
    { gameId: "10", tagId: "9" },

    { gameId: "11", tagId: "5" },
    { gameId: "11", tagId: "2" },
    { gameId: "11", tagId: "6" },
  ]);
};

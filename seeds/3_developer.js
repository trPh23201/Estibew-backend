/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('developer').insert([
    { name: "CAPCOM Co., Ltd", gameId: 1 },
    { name: "Valve", gameId: 2 },
    { name: "Valve", gameId: 3 },
    { name: "Behaviour Interactive Inc", gameId: 4 },
    { name: "Kinetic Games", gameId: 5 },
    { name: "Unreal Software", gameId: 6 },
    { name: "Valve", gameId: 7 },
    { name: "Obsidian Entertainment", gameId: 8 },
    { name: "FromSoftware Inc", gameId: 9 },
    { name: "Techland", gameId: 10 },
    { name: "KRAFTON, Inc", gameId: 11 },
    { name: "Hidden Path Entertainment", gameId: 2 },
  ]);
};

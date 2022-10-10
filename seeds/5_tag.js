/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
    await knex('tag').insert([
        { id: 1, name: "Horror", },
        { id: 2, name: "Survival", },
        { id: 3, name: "Competitive", },
        { id: 4, name: "FPS", },
        { id: 5, name: "Multiplayer", },
        { id: 6, name: "Shooter", },
        { id: 7, name: "Single Player", },
        { id: 8, name: "Puzzle", },
        { id: 9, name: "Co-op", },
        { id: 10, name: "VR", },
        { id: 11, name: "3D", },
        { id: 12, name: "2D", },
        { id: 13, name: "Open World", },
        { id: 14, name: "Crafting", },
        { id: 15, name: "RPG", },
        { id: 16, name: "Zombie", },
    ]);
};

exports.up = function(knex) {
    return knex.schema.createTable('reset_password', function (table) {
        table.increments();
        table.string('password');
        table.integer('userId').references('user.id').onDelete('CASCADE');
        table.timestamp('created').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('reset_password');
};

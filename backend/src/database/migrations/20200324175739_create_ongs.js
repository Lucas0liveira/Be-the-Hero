
exports.up = function (knex) { //responsável sempre pela criação da tabela
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
};

exports.down = function (knex) {//o que fazer quando precisar voltar atrás na criação?
    return knex.schema.dropTable('ongs')
};


exports.up = function (knex) { //responsável sempre pela criação da tabela
    return knex.schema.createTable('incidents', function (table) {
        table.increments()//ao invés de um id, cria ids em incrementos numericos
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()

        table.string('ong_id').notNullable()

        table.foreign('ong_id').references('id').inTable('ongs')
    })
};

exports.down = function (knex) {//o que fazer quando precisar voltar atrás na criação?
    return knex.schema.dropTable('incidents')
};

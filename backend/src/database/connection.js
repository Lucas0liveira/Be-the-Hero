const knex = require('knex')
const configuration = require('../../knexfile')// ../ voltar para pasta anterior

const connection = knex(configuration.development)

module.exports = connection
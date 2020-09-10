//npx knex --knexfile knexfile.ts migrate:latest
import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('proffy', table=>{
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('avatar').notNullable()
        table.string('whatsapp').notNullable()
        table.string('bio').notNullable()

        table.integer('account_id')
        .notNullable()
        .references('id')
        .inTable('accounts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
}

export async function down(knex: Knex){
    knex.schema.dropTable('proffy')
}
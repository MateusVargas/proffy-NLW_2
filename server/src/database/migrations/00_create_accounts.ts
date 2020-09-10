import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('accounts', table=>{
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('surname').notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.string('passwordResetToken')
        table.string('passwordResetExpires')
    })
}

export async function down(knex: Knex){
    knex.schema.dropTable('accounts')
}
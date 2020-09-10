import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('classes', table=>{
        table.increments('id').primary()
        table.string('subject').notNullable()
        table.decimal('cost').notNullable()
        
        table.integer('proffy_id')
        .notNullable()
        .references('id')
        .inTable('proffy')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
}

export async function down(knex: Knex){
    knex.schema.dropTable('classes')
}
import {Sequelize} from 'sequelize'

const db = new Sequelize('database_app', 'root', '00000000',{
    host:'localhost',
    dialect: 'mysql'
})

export default db
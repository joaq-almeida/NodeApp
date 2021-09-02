const Sequelize = require("sequelize")
//config conexao com o banco de dados
const sequelize = new Sequelize('postapp', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
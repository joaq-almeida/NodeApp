//abaixo mostra como criar uma conexão ao mysql com o sequelize
/*
sequelize.authenticate()
    .then(function(){
        console.log("Conectado com sucesso")
    }).catch(function(erro){
        console.log("Falha ao se conectar com o banco de dados " + erro)
    })
*/

//Exemplo abaixo mostra como criar uma tabela no mysql pelo sequelize
// const Postagem = sequelize.define('postagens', {
//     titulo: {
//         type: Sequelize.STRING
//     },
//     conteudo: {
//         type: Sequelize.TEXT
//     }
// })

//abaixo um exemplo de como adicionar dados a uma tabela
// Postagem.create({
//     titulo: "Um titulo novo",
//     conteudo: "blablablabla"
// })

// const Usuario = sequelize.define('usuarios', {
//     nome: {
//         type: Sequelize.STRING
//     },
//     sobrenome: {
//         type: Sequelize.STRING
//     },
//     idade: {
//         type: Sequelize.INTEGER
//     },
//     email: {
//         type: Sequelize.STRING
//     }
// })

// Usuario.create({
//     nome: "Steve",
//     sobrenome: "da Silva",
//     idade: 99,
//     email: "email.steve@email.com"
// })

//Postagem.sync({force: true})
//Usuario.sync({force: true})
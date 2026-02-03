use ('AulaMongo')

db.people.insertOne({
    name: "Ketlyn",
    lastname: "Jomes",
    salary: 1000
}) 

use ('AulaMongo')

db.people.insertMany([{
    name: "Queila",
    lastname: "Lima",
    salary: 1234
},
{
    name: "Dom",
    lastname: "Goncalves",
    salary: 4321

}])

use ('AulaMongo')

let pessoa = {
    name: 'Ketlyn',
    lastname: "Sofia",
    salary: 2000
}

db.people.insertOne(pessoa)

use ('AulaMongo')

const arrpeople = [
{
    name: 'Cesar',
    lastname: 'Stati',
    salary: 9999
},
{
    name: 'Nicolas',
    lastname: 'Marques',
    salary: 2651
}
]

db.people.insertMany(arrpeople)

use ('AulaMongo')

db.people.insertOne({
    name: "Isabella",
    lastname: "Rodrigues",
    salary: 614

})

use ('AulaMongo')

db.people.insertMany([{
    name: "Maria",
    lastname: "Jomes",
    salary: 321
},
{
    name: "Héctor",
    lastname: "Jomes",
    salary: 412

}])

// "Select" de SQL

use('AulaMongo')

db.people.find()

// ({name: "Ketlyn"}) "Wherer do SQL"

use('AulaMongo')

db.people.find({ name: "Ketlyn"})

// "Like do SQL"

use('AulaMongo')

db.people.find({ name: /H/ })

// ^ começa

use('AulaMongo')

db.people.find({ name: /^M/ }) 

// $ termina

use('AulaMongo')

db.people.find({ lastname: /s$/ })

// Dois jeitos de pesquisar a primeira e ultima letra (com o * 
// ele vai para a ultima letra, 
// ja sem o * ele encontra a primeira letra na palavra)

use('AulaMongo')

db.people.find({ name: /[^K][n$]/ }) 

use('AulaMongo')

db.people.find({ name: /^K.*n$/ }) 

// Procura mais de um dado

use('AulaMongo')

db.people.find({ $and: [{name: 'Cesar'}, {lastname: 'Stati'}]}) 

// 12 -  Valores maiores

use('AulaMongo')

db.people.find({ salary: {$gt: 2000}}) 

// Valores menores

use('AulaMongo')

db.people.find({ salary: {$lt: 2000}}) 

// Consulta de campo especifico, o 1 significa que voce quer o nome e sobrenome 
// das pessoas que tem salario maior ou igual a 2000

use('AulaMongo')

db.people.find({ salary: {$gte: 2000}},{name: 1, lastname: 1}) 


// Alterar algum atributo da connection 

use('AulaMongo')

db.people.updateOne(
{_id: ObjectId('6981f33518734102f23a9dbb')},
{ $set:{name:"Alterado"}}
)

// Alterar todas as pessoas algum atributo da connection 

use('AulaMongo')

db.people.updateMany(
{ salary: {$gte: 2000}},
{ $set:{name:"Ketlyn"}}
)

// Delete

use('AulaMongo')

db.people.deleteOne({name: /Q/})


use('AulaMongo')

db.people.deleteMany({name: /K/})

// Deletar especifico é pelo ID

use('AulaMongo')

db.people.deleteOne({
    _id: ObjectId('6981fdc0a69a8bc727652c18')
})


use('AulaMongo')

db.people.deleteMany({name: /K/})
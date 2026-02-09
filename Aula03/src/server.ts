import express from 'express'

const port = 8080
const app = express()

const pessoa = {
    name: "Ketlyn",
    lastname: "Jomes"
}

// correto:
app.get('/objeto', (req, res) => {
    res.send({pessoa: pessoa})
})
// outro exmplo:
app.get('/direto', (req, res) => {
    res.send({pessoa})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
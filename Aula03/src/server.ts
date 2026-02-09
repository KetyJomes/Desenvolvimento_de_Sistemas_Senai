import express from 'express'

const port = 8080
const app = express()

app.get('/', (req, res) => {
    res.send({response: "Api funcionando!"})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
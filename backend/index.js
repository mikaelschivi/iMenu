// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   // root handler
//   res.send('hello world!')
// })

// app.listen(port, err => {
//   if (err){
//     return console.log("error:", error);
//   }
//   console.log(`Example app listening on port ${port}`)
// })





// teste ryan 
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

//informa que aplicacao usara json
app.use(express.json()) 

//deixa livre o acesso de frontend
app.use(cors())         

const itens = [
    {
      nome:"Pizza Bacon", 
      descrição:"bacon, ovo, ...",
      id:0,
      preco:"R$ 60,00",
      amount: "10",
    },
    {
      nome:"Pizza de File",
      descrição:"bacon, ovo, ...",
      id:1,
      preco:"R$ 60,00",
      amount: "10",
    }
]

//Rota para acessar os itens do backend
app.get('/item', function (request, response) { 
  response.json(itens)
})

app.listen(port, err => {
  if (err){
    return console.log("error:", error);
  }
  console.log(`Example app listening on port ${port}`)
})

//Rota para publicas pedidos de itens no backend
app.post('/item', function (request, response) {
  console.log(request.body)

  const newRequest = request.body

  pedidos.push(newRequest)

  response.status(201).json(newRequest)
}) 
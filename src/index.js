const naipe_controllers = require('./controllers/naipe.js')
const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

app.get("/naipe", (req, res)=>{
    const content = naipe_controllers.index()
    res.json(content)
})

app.get("/naipe/:id", (req, res)=>{
    const content = naipe_controllers.show(req.params.id)
    res.json(content)
})

app.post("/naipe", (req, res)=>{
    const code = naipe_controllers.store(req.body)
    res.status(code).json()
})

app.put("/naipe/:id", (req, res)=>{
    const code = naipe_controllers.update(req.params.id, req.body);
    res.status(code).json()
})

app.delete("/naipe/:id", (req, res)=>{
    const code = naipe_controllers.destroy(req.params.id);
    res.status(code).json()
})

app.listen(port, ()=>{
    console.log(`Porta ${port} inicializada`);
})
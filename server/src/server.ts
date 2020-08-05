import express from 'express'

const app = express()

app.use(express.json())

app.listen(3333)

app.post('/users', (req, res) => {
    const users = [ 
        {name: 'Diego', age: 25},
    ]

    return res.json(users)
})
import express from "express"
const app = express()
const port = process.env.PORT || 3002

app.get('/', (req, res) => {
    res.send("Oi, teste")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
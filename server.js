import express from "express"
import mysql from "mysql"
const app = express()
const port = process.env.PORT || 3002

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "new_password",
  database: "meu_app"
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting MySQL:", err);
    return;
  }
  console.log("COnnected MySQL!");
});

app.get('/', (req, res) => {
    db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      console.error("Query error:", err);
      return res.status(500).send("User error");
    }
    res.json(results);
  });
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
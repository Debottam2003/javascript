let express = require('express');
let app = express();
let pg_obj = require('./pg_connect');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    let data = await pg_obj.query('select * from members;');
    let dr = data.rows;
    console.log(dr);
    res.send(data.rows);
});

app.listen(3003, () => {
    console.log("Running on port 3003");
});
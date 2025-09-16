import express from 'express';
import pg_obj from "./db_connect.js";

const app = express();
const PORT = 5000;

app.get('/', async (req, res) => {
    let { rows } = await pg_obj.query("select * from authors");
    res.send(rows);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
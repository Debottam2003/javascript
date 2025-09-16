import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get(/^\/(?!api).*/, (req, res) => {
    return res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3333, () => {
    console.log('Server is running on http://localhost:3333');
});
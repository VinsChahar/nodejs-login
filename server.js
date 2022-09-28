const express = require("express");
const dotenv = require('dotenv');

dotenv.config();


const app = express();

app.get('/users', (req, res) => {
    res.json([{}]);
});


app.listen(process.env.PORT, () => {
    console.log('Server listening at http://%s - ', process.env.PORT);
});

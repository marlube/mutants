// import dependencies and routes
const express = require("express");
//import indexRoutes from "./routes/index";
const cors = require("cors");

// created express app
const app = express();

app.use(cors());
app.options('*', cors());
//app.use(indexRoutes);
app.use(express.urlencoded({ extended: false }));
app.listen(3000, () => {
    console.log('Escuchando en puerto 3000');
});

app.get('/hello', (req, res) => {
    res.send('perrito');
});
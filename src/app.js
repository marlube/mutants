// import dependencies and routes
import indexRoutes from "./routes/index";
const express = require("express");
const cors = require("cors");
const { PORT } = require("../config");
const morgan = require("morgan");

// created express app
const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(indexRoutes);
app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
});
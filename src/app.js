// import dependencies and routes
const express = require("express");
import indexRoutes from "./routes/index";
const cors = require("cors");

// created express app
const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(indexRoutes);
app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
});
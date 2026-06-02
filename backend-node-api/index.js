import express from "express";
import "dotenv/config";
import { sequelize } from "./models/index.js";
import routerList from "./router/list.routes.js";
import routerCard from "./router/card.routes.js";
import routerTag from "./router/tag.routes.js";


const app = express();
const PORT = process.env.PORT || 3310;

app.use('/lists', routerList);
app.use('/cards', routerCard);
app.use('/tags', routerTag);

app.listen(PORT, () => {
    console.log("Server is runing at http://localhost:" + PORT);
});


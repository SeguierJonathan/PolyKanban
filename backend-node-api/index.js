import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3310;

app.get("/", (req, res) => {
    res.send("Hellowork !!!");
})

app.listen(PORT, () => {
    console.log("Server is runing at http://localhost:" + PORT);
});
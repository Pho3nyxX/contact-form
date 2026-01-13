import "dotenv/config";
import express from "express";
import { connectDB } from "./db.js";

await connectDB();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
})
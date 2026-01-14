import express from "express";
import { connectDB } from "../db.js";

const router = express.Router();

router.post('/', async (req, res) => {
    console.log("Body:", req.body);

    try {
        let db = await connectDB();

        let contact = {
            name: req.body.name,
            email: req.body.email,
            reason: req.body.reason,
            createdAt: new Date(),
        }

        // let name = req.body.name;
        // let email = req.body.email;
        // let reason = req.body.reason;
        // let createdAt = new Date();

        // let data = {
        //     name: name,
        //     email: email,
        //     reason: reason,
        //     createdAt: createdAt,
        // }

        await db.collection("contacts").insertOne(contact);
        // await db.collection("contacts").insertOne(data);

        res.status(201).json({
            message: "Contact submitted successfully."
            // message: "Data submitted successfully."
        })
    } catch (error) {
        console.error("Insert failed:", error);
        res.status(500).json({ 
            message: "Insert failed" 
        });
    }
})

export default router;
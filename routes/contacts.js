import express from "express";
import { connectDB } from "../db.js";
import contactSchema from "../middleware/contactSchema.js";

const router = express.Router();

router.get("/", async ( req, res) => {
    try {
        let db = await connectDB();

        let contacts = await db
            .collection("contacts")
            .find()
            .sort({ createdAt: -1 })
            .toArray();

        res.status(200).json(contacts);

    }catch (error) {
        res.status(500).json( { message: "Failed to fetch contacts."});
    }
})

router.post('/', contactSchema, async (req, res) => {
    // console.log("Body:", req.body);

    try {
        let db = await connectDB();

        let contact = {
            name: req.body.name,
            email: req.body.email,
            reason: req.body.reason,
            createdAt: new Date(),
        }

        await db.collection("contacts").insertOne(contact);

        res.status(201).json({
            message: "Contact submitted successfully."
        })
    } catch (error) {
        console.error("Insert failed:", error);
        res.status(500).json({
            message: "Insert failed"
        });
    }
})

export default router;
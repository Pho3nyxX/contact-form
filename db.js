import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;
const client = new MongoClient(URI);
let db;

export async function connectDB() {
    if (db) return db;

    try {
        await client.connect();
        console.log("Connected to database");
        db = client.db("contactForm");
    } catch (error) {
        console.error("Failed to connect to the database", error);
        throw error;
    }
    return db;
}
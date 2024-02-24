import { MongoClient, ServerApiVersion } from "mongodb";

// console.log(process.env.DB_URI);
export const client = new MongoClient(process.env.DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
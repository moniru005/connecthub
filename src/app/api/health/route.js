import { client } from "@/ConnectDB/connectToDatabase";
import { NextResponse } from "next/server"

export const POST = async (req, res) => {

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const userCollection = client.db("connectHub").collection("users")
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        // console.log(req);
        const body = await req.json();
        console.log(body, "body");


        const result = await userCollection.insertOne(body)
        // res.send(result)
        return NextResponse.json(result)


    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }

}
// run().catch(console.dir);

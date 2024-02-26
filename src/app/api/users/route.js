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
export const GET = async (req, res) => {

    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const userCollection = client.db("connectHub").collection("users")
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const result = await userCollection.find().toArray()
        return NextResponse.json(result)


    } finally {

    }

}


export const PUT = async (req, res) => {
    try {
        await client.connect();
        const userCollection = client.db("connectHub").collection("users");
        const body = await req.json();
        console.log(body);
        const filter = { email : body.email }
        const updatedDoc ={
            $set:{
                
            }
        }
    }
    catch (error) {
        return NextResponse.json(error)
    }
}

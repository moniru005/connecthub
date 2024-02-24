import { client } from "@/ConnectDB/connectToDatabase"
import { NextResponse } from "next/server";

export const POST = async(req,res)=>{
    try{
        await client.connect()

        const useCollection = client.db("connectHub").collection("posts")

        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const body =await req.json();
        console.log(body);

        const result = await useCollection.insertOne(body);

        return NextResponse.json(result);

    }
    finally{

    }
}
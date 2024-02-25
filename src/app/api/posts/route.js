import { client } from "@/ConnectDB/connectToDatabase"
import { NextResponse } from "next/server";

const useCollection = client.db("connectHub").collection("posts")

export const POST = async(req,res)=>{
    try{
        await client.connect()

  

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


export const GET = async (req, res)=>{
try{
    await client.connect()
    const result = await useCollection.find().toArray();
    console.log(result)
    return NextResponse.json(result);

}
catch(err){
    console.log(err)
}

}
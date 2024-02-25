import { client } from "@/ConnectDB/connectToDatabase"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const useCollection = client.db("connectHub").collection("posts")

export const POST = async (req, res) => {
    try {
        await client.connect()



        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const body = await req.json();
        console.log(body);

        const result = await useCollection.insertOne(body);

        return NextResponse.json(result);

    }
    finally {

    }
}


export const GET = async (req, res) => {
    try {
        await client.connect()
        const result = await useCollection.find().toArray();
        console.log(result)
        return NextResponse.json(result);

    }
    catch (err) {
        console.log(err)
    }

}

// patch request for  update like comment and share request

export const PATCH = async (req, res) => {
    try {
        await client.connect()
        const body = await req.json();
        const searchParams = request.nextUrl.searchParams
        console.log(searchParams);
        console.log(body);
        const id = searchParams.get('postId')
        const options = { upsert: true };
        const filter = {_id : new ObjectId(id)}
        const updateDoc = {
            $set:{
                like: body.like || 0,
                comment:body.comment || 0 ,
                share:body.share || 0
            }
        }
        const result = await useCollection.updateOne(filter,updateDoc, options)
        return NextResponse.json(result)
    }

    catch (error) {
        console.log(error);
    }
}
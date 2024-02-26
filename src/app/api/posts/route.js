import { client } from "@/ConnectDB/connectToDatabase"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const useCollection = client.db("connectHub").collection("posts")
await client.connect()


export const POST = async (req, res) => {
    try {
        await client.connect()
        const body = await req.json();
        // console.log(body);

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

export const PUT = async (req, res) => {
    try {
        await client.connect()
        const body = await req.json();
        console.log('from server',body);
        // const id = searchParams.get('postId')
        // const options = { upsert: true };
        const filter = { _id: new ObjectId(body.postId) }
        // console.log(filter);
        let updateDoc ={}
        if (body.like) {
            updateDoc = {
                $push: {
                    like: { author: body?.author, authorImage: body?.authorImage }
                },
            }

        }

        if (body.comment) {
            updateDoc = {
                $push: {
                     comment: { comment: body?.comment ,author:body?.author, authorImage:body?.authorImage},
                },
            }
        }

        const result = await useCollection.updateMany(filter, updateDoc)
        return NextResponse.json(result)
    }

    catch (error) {
        return NextResponse.json(error);
    }
}


export const DELETE = async (req, res) => {

    try {
        await client.connect()

        const body = await req.json();
        console.log(req, "aaa");
        const filter = { _id: new ObjectId(body.postId) }
        const result = await useCollection.deleteOne(filter)
        return NextResponse.json(result)

    }
    catch (error) {
        return NextResponse.json(error.message)
    }

}
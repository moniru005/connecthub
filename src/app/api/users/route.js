import { client } from "@/ConnectDB/connectToDatabase";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const userCollection = client.db("connectHub").collection("users");
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // console.log(req);
    const body = await req.json();
    console.log(body, "body");

    const result = await userCollection.insertOne(body);
    // res.send(result)
    return NextResponse.json(result);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
};

export const GET = async (req, res) => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const userCollection = client.db("connectHub").collection("users");

    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const result = await userCollection.find().toArray();
    return NextResponse.json(result);
  } finally {
  }
};

export const PATCH = async (req, res) => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const userCollection = client.db("connectHub").collection("users");

    const userId = req.params.userId;
    const updatedUserData = req.body;

    const result = await userCollection.updateOne(
      { _id: userId },
      { $set: updatedUserData }
    );

    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "User Data updated successfully" });
    } else {
      res.status(404).json({ message: "User not found or no changes made" });
    }
  } catch {
    res.status(500).json({ error: error.message });
  } finally {
    // await client.close();
  }
};

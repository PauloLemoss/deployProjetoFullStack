// Java Script Assícrono
// Await async
// Fullfilled

import {MongoClient} from "mongodb";



const URI = "mongodb+srv://paulocaualemos:Vb1rZAD6VCSYj36k@cluster0.2nnvv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const client = new MongoClient(URI)


export const db = client.db("spotifyAula");
// const songCollection =  await db.collection("songs").find({}).toArray();


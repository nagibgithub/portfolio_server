const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());




const uri = `mongodb+srv://${process.env.User}:${process.env.Pass}@cluster0.ehpilc7.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, { serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true } });

const run = async () => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        client.connect();


        const projects = client.db("portfolio").collection("projects");


        // ok everything 
        // https://portfolio-server-gamma-lake.vercel.app



        // Send a ping to confirm a successful connection
        client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => res.send('Nagib Portfolio'));
app.listen(port, () => console.log(`server is running on port: ${port}`));
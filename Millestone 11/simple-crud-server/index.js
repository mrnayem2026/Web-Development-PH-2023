const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// USER NAME and PAssword {MUST do Private password}
// name : DB_NAME
// pass : DB_PASS

// middleware
  app.use(cors());
  app.use(express.json());

// Needed Variable 
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@mrn.gtqnz.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create a db with MongoDB 
    const userCollection = client.db('usersDB').collection('users');

    // Read or GET all data from DB 
    app.get('/users', async(req,res)=>{
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    // create user and data pass to server side and  MongoDB .
    app.post('/users', async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    })


    // Delete a data from server side and MongoDB 
    app.delete('/users/:id', async(req,res)=>{
      const id = req.params.id;
      const query ={_id : new ObjectId(id)}
      const result = userCollection.deleteOne(query);
      res.send(result);
    })



    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req,res)=>{
  res.send("new user : Nayem ");
})



app.listen(port, () => {
  console.log(`SIMPLE CRUD is Running on port, ${port}`);
})
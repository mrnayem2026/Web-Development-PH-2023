const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// midilwere 
app.use(cors());
app.use(express.json());




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

    // Create a Database and a collection 
    const coffeeCollection = client.db('CoffeDB').collection('Coffee');

    // Add a coffee in server side and Database 
    app.post("/coffees", async (req, res) => {
      const newCoffe = req.body;
      const result = coffeeCollection.insertOne(newCoffe);
      res.send(result);
    })

    // get all  data from database
    app.get('/coffees', async (req, res) => {
      const corsor = coffeeCollection.find();
      const result = await corsor.toArray();
      res.send(result)
    })

    // get specific data from database by id 
    app.get('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new Object(id) }
      const result = coffeeCollection.findOne(query);
      res.send(result);
    })

    // delete data from database 
    app.delete('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = coffeeCollection.deleteOne(query);
      res.send(result);
    })

    // Update a data
    app.put('/coffees/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedCoffee = req.body;

      const coffee = {
        $set: {
          name: updatedCoffee.name,
          quantity: updatedCoffee.quantity,
          supplier: updatedCoffee.supplier,
          taste: updatedCoffee.taste,
          category: updatedCoffee.category,
          details: updatedCoffee.details,
          photo: updatedCoffee.photo
        }
      }
      const result = coffeeCollection.updateOne(filter, options, coffee);
      res.send(result)
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


app.get('/', (req, res) => {
  res.send("'Hello Nayme', Welcome to Coffee-store-server-side")
})

app.listen(port, () => {
  console.log(`Server is running this port ${port}`);
})

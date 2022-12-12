require("dotenv").config()
// Dependencies
const mongoose = require("mongoose")

// Global configuration -tell Mongoose where to connect with Mongo and have it connect with the sub-database tweets(if it doesn't exist, it will be created)
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection
//require express
const express = require('express');
const Pokemon = require('./models/pokemon')
// set express to a variable
const app = express();
//set a variable of port to 3000
const port =3000;
// Connect to Mongo
mongoose.connect(mongoURI)
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use((req,res,next)=>{
  console.log("I run for all routes")
  next()
})
app.use(express.urlencoded({extended:false}))
mongoose.set("strictQuery",true)
// set view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', function(req, res) {
    res.send('<h3>Welcome to the Pokemon App!</h3>');
  });
  
app.get('/pokemon', (req,res) => {
    Pokemon.find({}, (error, pokemon)=> {
        res.render('Index', {
            pokemon: pokemon // getting all pokemons 
        })
    })
    })

app.get('/pokemon/new', function(req, res) {
    res.render('New');
  });


app.get('/pokemon/:id', function(req, res){
  Pokemon.findById(req.params.id, function(error, selectPokemon){
    res.render('Show', {pokemon:selectPokemon})
  })
    
});

app.post('/pokemon', function(req,res){
      let pokemonBody = req.body
      pokemonBody.image = pokemonBody.name
  Pokemon.create(req.body, function(error, createdPokemon){
    res.redirect('/pokemon')
  })
  
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
});


//require express
const express = require('express');
const { default: mongoose } = require('mongoose');
const pokemon = require('./models/pokemon')
// set express to a variable
const app = express();
//set a variable of port to 3000
const port =3000;
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
  

app.get('/pokemon', function(req, res) {
    Pokemon.find({},(error,pokemonList)=>{
      res.render('Index',{pokemon:pokemonList});
    })
  });

app.get('/pokemon/new', function(req, res) {
    res.render('New');
  });

app.get('/pokemon/:id', function (req, res){
    res.render('Show', {pokemon:Pokemon[req.params.id]})
});

app.post("/pokemon", function(req,res){
  Pokemon.create(req.body, (error, createdPokemon))
  res.redirect("/pokemon")
})
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
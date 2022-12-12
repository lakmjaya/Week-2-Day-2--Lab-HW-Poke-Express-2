const React = require('react')

const myStyle = {
    color: 'yellow',
    backgroundColor: 'blue',
};


class Show extends React.Component {
   render () {
   const {pokemon} = this.props;
   console.log(this.props)
    return (
      <div>
      <h1 style ={myStyle}>Gotta Catch 'Em All</h1>
      <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
      <img src={'http://img.pokemondb.net/artwork/' + pokemon.name + ".jpg"} ></img> 
      <a href = '/pokemon'>BACK</a>
      
      </div>
     );
    }
 }
 module.exports  = Show;



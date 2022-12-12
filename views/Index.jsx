const React = require('react')
const myStyle = {
  color: '#ffffff',
  backgroundColor: '#AC9362',
};
  
class Index extends React.Component {
  render () {
  const{pokemon} = this.props
  //console.log(this.props)
    return (
          <div style={myStyle}><h1>'See All The Pokemon!'</h1>
          <ul>
            {pokemon.map((pokemon, i) => {
              return( 
                <li>
                  <a href={`/pokemon/${pokemon.id}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>
                </li>
              );
            })}
          </ul>
          <a href="/pokemon/new">Create New Pokemon</a>
          </div>  
         );
        }
     }
     
    
  
      module.exports  = Index;


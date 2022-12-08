const React = require('react')

class Show extends React.Component {
   render () {
    const fruit = this.props.fruit
    return (// you can only return one element but one element can have baby elements so a div etc
      <>
      <h1> Show Page </h1>
      The {fruit.name} is {fruit.color}. {fruit.readyToEat? 'It is ready to eat' : 'It is not ready to eat... Cant touch this' }
      <br />
      <a href={`/fruits`}>Back to all fruits</a>
      </>
     )
    }
 }
 module.exports  = Show
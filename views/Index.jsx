const React = require("react");

class Index extends React.Component {
  render() {
    const { fruits } = this.props;
    return (
      <div>
        <a href={`/fruits/new`}>Create a New Fruit</a>
        <h1>Fruits Index Page</h1>
        <ul>
          {fruits.map((fruit, i) => {
            return (
              <li>
                The <a href={`/fruits/${fruit.id}`}>
                {/* it is important to use id insted of index value becasue we are now pulling from a database and not an array */}
                {fruit.name}</a> is {fruit.color}{" "}
                <br></br>
                {fruit.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;

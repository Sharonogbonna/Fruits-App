const React = require("react");
const DefaultLayout = require('./default');

class Index extends React.Component {
  render() {
    const { fruits } = this.props;
    return (
      <DefaultLayout title={"Fruits Index Page"}>
        <a href={`/fruits/new`}>Create a New Fruit</a>
        <ul>
          {fruits.map((fruit, i) => {
            return (
              <li>
                The <a href={`/fruits/${fruit.id}`}>
                {/* it is important to use id insted of index value becasue we are now pulling from a database and not an array */}
                {fruit.name[0].toUpperCase() + fruit.name.slice(1)}</a> is {fruit.color}{" "}
                <br></br>
                {fruit.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                  <br />
                  <a href={`/fruits/${fruit._id}/edit`}>Edit</a>
              <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
               <input type="submit" value="DELETE"/>
               </form>
              </li>
            );
          })}
        </ul>
        </DefaultLayout>
    );
  }
}
module.exports = Index;

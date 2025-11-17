import React from "react"

class Car extends React.Component{
  render ()
  {
    return <h1>This is a Car</h1>
  }
}

class Second extends React.Component{
  constructor()
  {
    super()
    this.state = {color:"red"}
  }

  render()
  {
    return (<>
    <h1>My Color is {this.state.color}</h1>
    <h1>This is my second class component component</h1>
    </>)
  }
}


class Third extends React.Component{

  render()
  {
    return (  <>   <h1> {this.props.cl}  is the data that i am getting from the parent  </h1>    <h1>  Hello world </h1>  </>)
  }
}


class Fourth extends React.Component{
  
  constructor()
  {
    super()
  }
  
  render()
  {
    return (<> <h1>This is my Forth component</h1><Third></Third> <h1>This is my Forth component</h1> </>)
  }
}



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}


export default Car
export {Second,Third,Fourth, Header}
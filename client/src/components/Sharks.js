import React, {Component} from "react";
import axios from "axios";

export default class Sharks extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      sharks: []
    }
  }

  componentWillMount() { // use react life cycle events and grab data
    axios.get('/api/sharks')
      .then((response) => {
        this.setState({sharks: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    return (
      <div>
        <h1>Sharks!</h1>
         { this.state.sharks.map((shark) => {
            return (
              <div key={shark.type} >
                <h3>{shark.type} {shark.length}</h3>
                <img src={shark.image} width="400"/>
              </div>
            );
          }) }
      </div>
    )
  }
}

// export default Sharks;
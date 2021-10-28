import React from "react";


class Drinks extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          drinks: [],
      }
  }
    
    componentDidMount() {
        fetch('http://localhost:3000/api/v1/drinks')
            .then(response => response.json())
            .then(data => this.setState({ drinks: data.drinks }))
    }

    render() {
        return (
            <div>
                <h1>Drinks</h1>
                <ul>
                    {this.state.drinks.map(drink =>
                        <li key={drink.id}>
                            {drink.name}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}





            




export default Drinks;
import React from "react";

class Liqours extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liqours: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/liqours')
            .then(res => res.json())
            .then(liqours => this.setState({ liqours }))
    }

    render() {
        return (
            <div>
                <h1>Liqours</h1>
                <ul>
                    {this.state.liqours.map(liqour =>
                        <li key={liqour.id}>
                            <h2>{liqour.name}</h2>
                        </li>
                    )}
                </ul>
            </div>
        )
    }

}

export default Liqours;
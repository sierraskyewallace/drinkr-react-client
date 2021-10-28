import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home">
      <h1>Welcome to Drinkr</h1>
      <p>
              <p> about </p>
              <Link to="/drinks">See Drink Recipes</Link>
              <br /><br />
              <Link to="/liquors">Liqours</Link>
      </p>
    </div>
  );
}

export default Home;
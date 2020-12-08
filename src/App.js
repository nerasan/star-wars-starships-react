import React from "react";
// React Router
import { Route } from "react-router-dom"
// Components imports
import Home from "./components/Home";
import StarshipPage from "./components/StarshipPage"
// Common imports
import Layout from "./components/common/Layout"
// import Loading from "./components/common/Loading"
// CSS imports
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/starship" render={({location}) =>
            <StarshipPage location={location} />
          }/>
      </Layout>
    </div>
  );
}

export default App;

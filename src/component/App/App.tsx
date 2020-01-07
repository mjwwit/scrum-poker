import * as React from 'react'
import { Router, Link } from "@reach/router";
import Home from '../Home/Home';
import Room from '../Room/Room';


const App = () => {
    return (

            <Router>
                <Home path="/" />
                <Room path="/room" />
            </Router>
  )

}

export default App

import {BrowserRouter, Route} from "react-router-dom";
import * as React from "react";
import Room from './room'
import Home from './home'

export function Routes () {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/room" component={Room}/>
            </div>
        </BrowserRouter>
    );

}

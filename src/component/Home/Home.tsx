import * as React from 'react';
import Room from '../Room/Room';
import { Link, RouteComponentProps } from "@reach/router";


const Home = (props: RouteComponentProps) => {
return (

<div>
 
    <h1>Welcome to the scrum poker app!</h1>
    <nav>
    <Link to="/room">{" "}
        <button>Create room</button>
    </Link>
    <Link to="/room:id">
        <button>Join existing room</button>
    </Link>
    </nav>
 
</div>
)
}
export default Home

import * as React from 'react'
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

class Home extends React.Component {

    render() {
        return <div>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Scrum Poker app
                    </Typography>
                </Toolbar>
            </AppBar>
            <Link to="/room">
                <Button variant="contained" >
                    New room
                </Button>
            </Link>

        </div>
    }
}
export default Home

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'

import * as Scenes from 'scenes'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Scenes.Home} />
        </Switch>
    </Router>
)
export default Routes
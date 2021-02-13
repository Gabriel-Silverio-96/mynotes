import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

//pages
import Index from './page';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route path="/mynotes" component={Index} />
                <Route path="*" component={Index}>
                    <Redirect to="/mynotes" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

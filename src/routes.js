import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Page
import Index from './page/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route path="*" component={Index}>
                    <Redirect to="/"/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
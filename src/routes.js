import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Page
import Index from './page/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Index} />
            </Switch>
        </BrowserRouter>
    )
}
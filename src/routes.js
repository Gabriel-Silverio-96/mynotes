import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

//pages
import HomePagePublic from "page/public/home";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePagePublic} />             
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
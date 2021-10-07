import { BrowserRouter, Switch, Route } from "react-router-dom";

//Pages
import HomePagePublic from "page/public/home";
import Login from "page/public/login";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePagePublic} />             
                <Route path="/login" component={Login} />             
                <Route exact path="/mynotes" component={() => "mynotes"} />             
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
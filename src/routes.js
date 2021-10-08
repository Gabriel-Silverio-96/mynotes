import { BrowserRouter, Switch } from "react-router-dom";
import CustomRoute from "util/customRoute";

//Pages
import HomePagePublic from "page/public/home";
import Login from "page/public/login";
import MyNotes from "page/private/myNotes";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <CustomRoute exact path="/" component={HomePagePublic} />             
                <CustomRoute path="/auth/login" component={Login} />             
                <CustomRoute isPrivate path="/mynotes" component={MyNotes} />             
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
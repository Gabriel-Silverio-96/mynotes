import { BrowserRouter, Switch } from "react-router-dom";
import CustomRoute from "util/customRoute";

//Pages
import Home from "page/public/Home/index";
import Login from "page/public/Login/index";
import MyNotes from "page/private/myNotes";
import Profile from "page/private/profile";
import CreateAccount from "page/public/CreateAccount/index";
import ForgotPassword from "page/public/ForgotPassword/index";
import ResetPassword from "page/public/ResetPassword/index";
import Page404 from "page/error/Page404";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <CustomRoute exact path="/" component={Home} />             
                <CustomRoute path="/auth/login" component={Login} />             
                <CustomRoute path="/auth/create-account" component={CreateAccount} />
                <CustomRoute path="/auth/forgot-password" component={ForgotPassword} />
                <CustomRoute path="/auth/reset-password/token=:token" component={ResetPassword} />
                             
                <CustomRoute isPrivate path="/mynotes" component={MyNotes} />             
                <CustomRoute isPrivate path="/profile" component={Profile} />         

                <CustomRoute path="*" component={Page404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
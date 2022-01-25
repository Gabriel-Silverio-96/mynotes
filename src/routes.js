import { BrowserRouter, Switch } from "react-router-dom";
import Page404 from "page/error/404";
import MyNotes from "page/private/myNotes";
import Profile from "page/private/profile";
import CreateAccount from "page/public/CreateAccount/CreateAccount";
import ForgotPassword from "page/public/ForgotPassword/ForgotPassword";
import Home from "page/public/Home/Home";
import Login from "page/public/Login/Login";
import ResetPassword from "page/public/ResetPassword/ResetPassword";
import CustomRoute from "util/customRoute";

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
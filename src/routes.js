import Header from "components/Header";
import Layout from "components/Layout";
import Page404 from "page/error/404";
import MyNotesPage from "page/private/myNotes";
import Profile from "page/private/profile";
import CreateAccount from "page/public/createAccount";
import ForgotPassword from "page/public/ForgotPassword";
import Home from "page/public/home";
import Login from "page/public/login";
import ResetPassword from "page/public/resetPassword";
import { BrowserRouter, Switch } from "react-router-dom";
import CustomRoute from "util/customRoute";

const PageComponent = ({ children }) => <><Header />{children}</>

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <CustomRoute exact path="/" render={() => <PageComponent><Home /></PageComponent>} />
                <CustomRoute path="/auth/login" render={() => <PageComponent><Login /></PageComponent>} />
                <CustomRoute path="/auth/create-account" render={() => <PageComponent><CreateAccount /></PageComponent>} />
                <CustomRoute path="/auth/forgot-password" render={() => <PageComponent><ForgotPassword /></PageComponent>} />
                <CustomRoute path="/auth/reset-password/token=:token" component={ResetPassword} />

                <CustomRoute isPrivate path="/myNotes" render={() => <PageComponent><MyNotesPage /></PageComponent>} />
                <CustomRoute isPrivate path="/profile" render={() => <PageComponent><Profile /></PageComponent>} />

                <CustomRoute path="*" component={Page404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
import NavBar from "components/NavBar";
import Auth from "pages/Auth";
import ChartsPage from "pages/ChartsPage";
import ClientsPage from "pages/ClientsPage";
import ClientForm from "pages/ClientsPage/ClientForm";
import HomePage from "pages/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/charts'>
                    <ChartsPage />
                </Route>
                <Route path='/clients' exact>
                    <ClientsPage />
                </Route>
                <Route path='/clients/:id'>
                    <ClientForm />
                </Route>
                <Route path='/auth'>
                    <Auth />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
import NavBar from "components/NavBar";
import ChartsPage from "pages/ChartsPage";
import ClientsPage from "pages/ClientsPage";
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
                <Route path='/charts' exact>
                    <ChartsPage />
                </Route>
                <Route path='/clients' exact>
                    <ClientsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
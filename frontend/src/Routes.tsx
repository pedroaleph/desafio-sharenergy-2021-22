import NavBar from "components/NavBar";
import ChartsPage from "pages/ChartsPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path='/' exact>
                    <ChartsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
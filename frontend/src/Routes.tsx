import NavBar from "components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path='/' exact>

                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
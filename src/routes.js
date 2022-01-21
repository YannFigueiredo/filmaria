import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Filme from './pages/Filme';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme" component={Filme}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
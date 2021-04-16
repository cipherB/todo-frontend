import React from 'react';

import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Archive from './container/Archive';
import Complete from './container/Complete';
import Error from './container/Error';
import Family from './container/Family';

import List from './container/List';
import Login from './container/Login';
import Personal from './container/Personal';
import Signup from './container/Signup';
import Start from './container/Start';
import Study from './container/Study';
import Uncategorized from './container/Uncategorized';
import Work from './container/Work';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Start} />
                <PrivateRoute exact path='/dashboard' component={List} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/dashboard/uncategorized' component={Uncategorized} />
                <Route exact path='/dashboard/family' component={Family} />
                <Route exact path='/dashboard/work' component={Work} />
                <Route exact path='/dashboard/personal' component={Personal} />
                <Route exact path='/dashboard/study' component={Study} />
                <Route exact path='/dashboard/archive' component={Archive} />
                <Route exact path='/dashboard/complete' component={Complete} />
                ]<Route component={Error} />
            </Switch>
        </Router>
    )
};

export default Routes

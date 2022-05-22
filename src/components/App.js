import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home/Home';
import { Battle } from './Battle/Battle';
import { Popular } from './Popular/Popular';
import { Nav } from './Nav/Nav';

export const App = () => {
    return (
        <Router>
            <div className='container'>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/battle' component={Battle} />
                    <Route exact path='/popular' component={Popular} />
                    <Route render={() => {
                        return <div>Not Found</div>
                    }
                    } />
                </Switch>
            </div>
        </Router>
    )
}
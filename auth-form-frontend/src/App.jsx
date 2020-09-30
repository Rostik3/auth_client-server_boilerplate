import './styles/main.scss'
import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom'
import Form from './components/Form/Form.jsx'
import InitialPage from "./components/InitialPage/InitialPage.jsx";
import ProfilePage from './components/ProfilePage/ProfilePage.jsx'

const App = () => (
    <BrowserRouter>
        <Fragment>
            <Switch>
                <Route exact path='/' component={InitialPage} />
                <Route path='/login' render={() => <Form /> } />
                <Route path='/register' render={() => <Form isSignUp={true} /> } />
                <Route path='/profile' component={ProfilePage} />
            </Switch>
        </Fragment>
    </BrowserRouter>
)

render(<App />, document.getElementById('app'))
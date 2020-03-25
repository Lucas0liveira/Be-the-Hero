import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'

//switch garante que apenas uma rota sera chamada por momento
//exact faz com que entre no rota só se for exatamente essa a url
//...assim uma rota que começa com o mesmo texto não será ignorada.
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}></Route>
                <Route path="/register" component={Register}></Route>
            </Switch>
        </BrowserRouter>
    )
}
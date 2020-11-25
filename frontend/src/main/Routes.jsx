import React from 'react'
import { Switch, Route, Redirect } from 'react-router' //importando funcionalidades react router 
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

//irei agora, mapear os links dentro do site, para ser redirecionado pra cada sessao em especifico...

export default props =>
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>


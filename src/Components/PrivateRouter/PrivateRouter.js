import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'

const PrivateRouter = ({ component: Component, isAuth, ...props }) => {

    if (!isAuth) {
        return <Redirect to='/' />
    }

    return (
        <Route render={() => <Component {...props} />} />
    )
}

export default PrivateRouter


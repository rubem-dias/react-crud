import './Main.css'
import React from 'react'
import Header from './Header'

export default props => //em app.jsx, chamei o <Main> e dentro coloquei as propiedades. Passei as mesmas para esse header.
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>

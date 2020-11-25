import './Header.css'
import React from 'react'

//d-none pra mobile vai fazer esse header nao aparecer; d-sm-flex se o dispositivo for small, usar o display-flex;
export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3"> {/* mt-3 eh margin-top */}
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>

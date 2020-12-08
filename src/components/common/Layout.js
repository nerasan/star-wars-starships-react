import React from 'react';

const Layout = (props) => {
    return (
        <div>
            <div className="header">Star Wars Starships</div>
            {props.children}
        </div>

    )
}

export default Layout
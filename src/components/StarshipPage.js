import React from 'react'
import { Link } from 'react-router-dom'

const StarshipPage = (params) => {
    console.log("params.location.state.data:", params.location.state.data)
    let shipInfo = params.location.state.data
    return (
        <div className="container">
        <div className="col s4">
            <div className="card-panel grey darken-4 white-text">
                <h5>{shipInfo.name}</h5>
                <ul>
                    <li>Model: {shipInfo.model}</li>
                    <li>Manufacturer: {shipInfo.manufacturer}</li>
                    <li>Length: {shipInfo.length}</li>
                    <div className="card-action">
                        <Link to='/'>home</Link>
                    </div>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default StarshipPage;
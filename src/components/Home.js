import React, { useEffect, useState } from 'react'
import Loading from "./common/Loading"
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

    const [starwarsData, setStarwarsData] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://swapi.dev/api/starships/").then((res) => {
            setStarwarsData(res.data.results)
            console.log("data: ", starwarsData)
        }).then(() => setLoading(false))
    }, [])

    const display = () => {
        if(loading){
            return <Loading />
        } else {
            return starwarsData.map((data, i) => {
                console.log(data)
                return (
                    <div key={i} className="col s4">
                        <div className="card-panel grey darken-4 white-text hoverable">
                            <Link to={{pathname: `/starship/${i}`,
                            state: {data}}}
                            key={data.name}>
                                {data.name}
                                </Link>
                            </div>
                        </div>
                        )})
                    }
                }

    return (
        <>
            <div className="container">
                <div className="row">
                {display()}
                </div>
            </div>
        </>
    )
}

export default Home;
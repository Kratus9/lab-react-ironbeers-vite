import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Navigate } from "react-router-dom/dist";

function AllBeersPage() {
    const [ beers, setBeers ] = useState([]);

    useEffect(() => {
        setBeers()
    }, [])

    const getAllBeers = async () => {
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setBeers(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect (() => {
        getAllBeers()
    }, [])

    if(!beers) {
        return <p>... Loading</p>
    }
    
    return (
        <div>

        </div>
    )
}

export default AllBeersPage;

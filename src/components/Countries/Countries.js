import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const[countries,setCountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            {/* {
                countries.map(country=>console.log(country))
            } */}
            <h1>All the Capitals</h1>
            <div className='countries-css'>
            {
                countries.map(country=><Country country={country}></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;
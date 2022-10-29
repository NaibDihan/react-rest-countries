import React from 'react';
import './Country.css';

const Country = (props) => {
    const {capital,region,subregion} = props.country;
    return (
        <div className='country'>
            <h1>Capital: {capital}</h1>
            <p>Region: {region}</p>
            <p>Sub Region: {subregion}</p>
            

            
        </div>
    );
};

export default Country;
import React from 'react';
import "./Country.css"
const Country = (props) => {
    const {name,area,population,region,flags} = props.country
    return (
        <div className='container'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p><small>Population: {population}</small></p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;
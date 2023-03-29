import React from 'react';
import './Country.css'
const Country = (props) => {
     const {name, flags, population,area} = props.country
     return (
          <div className='country'>
               <h3>Country Name :{name.common}</h3>
               <img src={flags.png} alt="" />
               <h5>Populations :{population}</h5>
               <p><small>Area:{area}</small></p>
          </div>
     );
};

export default Country;
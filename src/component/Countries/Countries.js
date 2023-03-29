import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
     const [countryes, setCountryes] = useState([]);
     useEffect((countryes)=>{
          fetch('https://restcountries.com/v3.1/all')
          .then(res=>res.json())
          .then(data=>setCountryes(data))
     },[])
     return (
          <div>
               <h3>Hello World</h3>
               <hr/>
               <div className='container'>
               {
                    countryes.map((country)=><Country 
                     
                     country={country}
                     key= {country.cca3}
                     ></Country>)
               }
               </div>
          </div>
     );
};

export default Countries;
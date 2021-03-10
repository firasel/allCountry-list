import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Header from '../Header/Header';

const Home = () => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res=>res.json())
      .then(data=>setCountries(data))
    },[])

    return (
        <div>
            <Header/>
            <Grid container justify="space-between" alignItems="center" spacing={5}>
                {
                    countries.map(country=><Country country={country}/>)
                }
            </Grid>
        </div>
    );
};

export default Home;
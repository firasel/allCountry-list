import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';

const CountryDetails = () => {
    const {countryName}=useParams()
    const [countryDetail,setCountryDetail]=useState({})
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res=>res.json())
        .then(data=>setCountryDetail(data[0]))
    },[])
    const {name,flag,capital,population,region}=countryDetail

    return (
        <>
        <Header/>
        <div style={{textAlign:'center'}}>
            <Card style={{width:'50%',margin:'auto'}}>
                <CardActionArea>
                    <CardMedia
                    style={{height:'300px'}}
                    image={`${flag}`}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Capital:{capital}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Region:{region}</Typography>                    <Typography variant="body2" color="textSecondary" component="p">Population:{population}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
        </>
        
    );
};

export default CountryDetails;
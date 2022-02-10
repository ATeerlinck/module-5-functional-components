import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './components/Country';
import CountryNoMui from './components/CountryNoMui';
import NewCountry from './components/NewCountry';
import NewCountryNoMui from './components/NewCountryNoMui';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const App = () => {
  const [countries, setCountries] = useState([]);

  const handleAdd = (name) => {
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    const mutableCountries = countries.concat({ id: id, name: name, gold:0, silver:0, bronze:0 });
    setCountries( mutableCountries );
  } 
  const handleIncrement = (countryId, type) =>{
    const countryIndex = countries.findIndex(c => c.id === countryId);
    console.log("hey");
    console.log(countryIndex);
    let mutableCountries = countries.map((country, index) => {
      console.log(`country: ${country}, index: ${index}`);
      if(countryIndex === index){
        const newCountry = country; newCountry[type]+=1; 
        return newCountry;
      } else{
        return country;
      }
    } );
    //countries[country][type] += 1;
    setCountries(mutableCountries);
  }
  const handleDecrement = (countryId, type) =>{
    const countryIndex = countries.findIndex(c => c.id === countryId);
    console.log("hey");
    console.log(countryIndex);
    let mutableCountries = countries.map((country, index) => {
      console.log(`country: ${country}, index: ${index}`);
      if(countryIndex === index){
        const newCountry = country; newCountry[type]-=1; 
        return newCountry;
      } else{
        return country;
      }
    } );
    //countries[country][type] -= 1;
    setCountries(mutableCountries);
  }
  const getMedalCount = (medal) =>{
    let count = 0;
    for(let i=0; i<countries.length; i++){
     // console.log(countries);
      count+= countries[i][medal];
    }
    return count;
  }
  useEffect(() => {
    // initial data loaded here
    let mutableCountries = [
      { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 2 },
      { id: 2, name: 'China', gold: 3, silver: 2, bronze: 0 },
      { id: 3, name: 'Germany', gold: 0, silver: 2, bronze: 3 },
    ]
    setCountries(mutableCountries);
  }, []);

  return ( 
    <div className="App">
      <header style= {{display: 'flex', alignItems: 'center', justifyContent: 'center' , flexWrap: 'wrap'}} className="App-header">
        <div>Olympic Medals</div>
        <Avatar sx={{ bgcolor: '#e2d02f', mx:2}}>{ getMedalCount("gold") }</Avatar>
        <Avatar sx={{ bgcolor: '#cacaca', mx:2}}>{ getMedalCount("silver") }</Avatar>
        <Avatar sx={{ bgcolor: '#a1671a', mx:2}}>{ getMedalCount("bronze") }</Avatar>
      </header>
      <Container fixed={true}>
        <Grid spacing={1} justifyContent="center">
          {countries.map(country =>
          (<Grid item key={ country.id }>
            <Country 
            key={ country.id }
            country={ country }
            onIncrement={ handleIncrement } 
            onDecrement={ handleDecrement } />
          </Grid>)
          )}
        </Grid>
        <NewCountry onAdd={handleAdd} />
      </Container>
      {countries.map(country =>
        <CountryNoMui 
          key={ country.id } 
          country={ country }
          onIncrement={ handleIncrement } 
          onDecrement={ handleDecrement } />
      )}
      <NewCountryNoMui onAdd={ handleAdd } />
    </div>
   );
}


export default App;

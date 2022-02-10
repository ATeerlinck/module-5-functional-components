import React from 'react';
import MedalNoMui from './MedalNoMui'


const CountryNoMui = (props) => {
  const { onIncrement, onDecrement, country } = props;
      
  return (
          <div className='Country' style={{ margin: 'auto', display: 'block'}}>
            { country.name }: {country.gold + country.silver + country.bronze}<br/>
            <MedalNoMui
            country={ country }
            onIncrement={ onIncrement }
            onDecrement={ onDecrement }
            color={ "gold" } />
            <MedalNoMui
            country={ country }
            onIncrement={ onIncrement }
            onDecrement={ onDecrement }
            color={ "silver" } />
            <MedalNoMui
            country={ country }
            onIncrement={ onIncrement }
            onDecrement={ onDecrement }
            color={ "bronze" } />
          </div>
  );
}
 
export default CountryNoMui;
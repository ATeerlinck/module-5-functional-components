import React, { useState } from 'react';
 
const NewCountryNoMui = (props) => {
    const [ name, setName ] = useState('');
    const handleClick = () => {
        setName(prompt("Enter a country"));
        if (name.trim().length > 0) {
            props.onAdd(name);
        } 
    }
        return (
            <div className='Country' style={{ margin: 'auto', display: 'block'}}>
                <button onClick={ handleClick }>New Country</button>
            </div>
        );
    }

export default NewCountryNoMui
import React from 'react'

import './styles.css'

const CountryPicker = ({ data, onSelect }) => {
    return (
        <form>
            <select onChange={onSelect} name="country">
                <option value="global">Global</option>
                {data.map( country => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>
        </form>
    )
}

export default CountryPicker
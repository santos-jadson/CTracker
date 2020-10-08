import React from 'react'

const CountryPicker = ({ data }) => {
    return (
        <form>
            <select name="country">
                <option value="global">Global</option>
                {data.map( country => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>
        </form>
    )
}

export default CountryPicker
import React from 'react'

import Card from './Card'

import './styles.css'

const CardContainer = ({data: {confirmed, recovered, deaths}}) => {
    return (
        <section>
            <Card>
                <span>Infected</span>
                <strong>{confirmed.value}</strong>
                <h3>01/01/2020</h3>
            </Card>
            <Card>
                <span>Recovered</span>
                <strong>{recovered.value}</strong>
                <h3>01/01/2020</h3>
            </Card>
            <Card>
                <span>Deaths</span>
                <strong>{deaths.value}</strong>
                <h3>01/01/2020</h3>
            </Card>
        </section>
    )
}

export default CardContainer
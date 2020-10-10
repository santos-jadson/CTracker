import React from 'react'

import Card from './Card'

import './styles.css'

const CardContainer = ({data: {confirmed, recovered, deaths}}) => {

    return (
        <section>
            <Card reference={'infected'}>
                <div>
                    <span>Infected</span>
                </div>
                <strong>{confirmed.value}</strong>
                <h3>01/01/2020</h3>
            </Card>
            <Card reference={'recovered'}>
                <div>
                    <span>Recovered</span>
                </div>
                <strong>{recovered.value}</strong>
                <h3>01/01/2020</h3>
            </Card>
            <Card reference={'deaths'}>
                <div>
                    <span>Deaths</span>
                </div>
                <strong>{deaths.value}</strong>
                <h3>01/01/2020</h3>
            </Card>
        </section>
    )
}

export default CardContainer
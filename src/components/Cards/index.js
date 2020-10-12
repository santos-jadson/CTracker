import React from 'react'
import { format } from 'date-fns'
import Card from './Card'

import './styles.css'

const CardContainer = ({data: {confirmed, recovered, deaths}}) => {
    const today = (format(new Date(), "PPP"))
    return (
        <section>
            <Card reference={'infected'}>
                <div>
                    <span>Infected</span>
                </div>
                <strong>{confirmed.value}</strong>
                <h3>{today}</h3>
            </Card>
            <Card reference={'recovered'}>
                <div>
                    <span>Recovered</span>
                </div>
                <strong>{recovered.value}</strong>
                <h3>{today}</h3>
            </Card>
            <Card reference={'deaths'}>
                <div>
                    <span>Deaths</span>
                </div>
                <strong>{deaths.value}</strong>
                <h3>{today}</h3>
            </Card>
        </section>
    )
}

export default CardContainer
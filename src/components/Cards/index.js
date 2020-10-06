import React from 'react'

import Card from './Card'

import './styles.css'

const CardContainer = () => {
    return (
        <section>
            <Card>
                <span>Infected</span>
                <strong>123456</strong>
                <span>01/01/2020</span>
            </Card>
            <Card>
                <span>Infected</span>
                <strong>123456</strong>
                <span>01/01/2020</span>
            </Card>
            <Card>
                <span>Infected</span>
                <strong>123456</strong>
                <span>01/01/2020</span>
            </Card>
        </section>
    )
}

export default CardContainer
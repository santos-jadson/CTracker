import React, { Component } from 'react'
import api from '../../services/api'

import Card from './Card'

import './styles.css'



class CardContainer extends Component {
    constructor() {
        super()
    }

    async componentDidMount() {
        
    }

    render(){
        return (
            <section>
                <Card>
                    <span>Infected</span>
                    <strong>123456</strong>
                    <h3>01/01/2020</h3>
                </Card>
                <Card>
                    <span>Infected</span>
                    <strong>1246</strong>
                    <h3>01/01/2020</h3>
                </Card>
                <Card>
                    <span>Infected</span>
                    <strong>123465</strong>
                    <h3>01/01/2020</h3>
                </Card>
            </section>
        )
    }
}

export default CardContainer
import React from 'react';
import virus from './assets/images/covid.svg'

import './App.css'

import Container from './components/Container'
import CardContainer from './components/Cards'
import Chart from './components/Charts'
import CountryPicker from './components/CountryPicker'
import Loading from './components/Loading'

import { fetchCountries, fetchData } from './services/api'
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      countries: [],
      loading: true,
      selected: ''
    }
  }
/*  
    const [countries, setCountries] = useState([])
    const [data, setData] = useState({})
    const [selected, setSelected] = useState('')

    useEffect(() => {
      [setCountries, setData] = await Promisse.all([
        fetchCountries(),
        fetchData(selected)
      ])

      setCountries(countries.map( country => country.name ))
    }, selected)
*/
  async componentDidMount() {
    const [{data: {countries}}, {data}] = await Promise.all([
      fetchCountries(),
      fetchData(this.state.selected)
    ])

    const countriesList = countries.map( country => country.name )
    
    this.setState({
      data,
      countries: countriesList,
      loading:false
    })
  }

  handleChange = async (e) => {
    const dt = await fetchData(e.target.value)

    this.setState({data: dt.data})
  }


render() {
    const { loading } = this.state
    
    if(loading){
      return <Loading />
    }

    const { countries, data } = this.state

    return (
      <Container>
        <header>
          <img src={virus} alt="Virus"/>
          <h1>Corona Tracker</h1>
        </header>
        <CardContainer data={data}/>
        <CountryPicker onSelect={this.handleChange} data={countries}/>
        <Chart data={data}/>
      </Container>
    )
  }
}

export default App;

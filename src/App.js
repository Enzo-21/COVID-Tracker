import React from 'react';
import styles from './App.module.css';

import {fetchData} from './api'
import {Cards, Chart, CountryPicker} from './components'
import Footer from './components/Footer/Footer';

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData();
  
    this.setState({data: data})
    
  }

  handleCountryChange = async (country) => {
    
    const fetchedData = await fetchData(country)
    this.setState({data: fetchedData, country: country})
    
  }

  render() {

    const {data, country} = this.state

    return (
      <div className={styles.container}>
        <h1>COVID-19 Tracker App</h1>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <small>Select a country to see specific data about it</small>
       <Cards data={data}/> 
       <Chart data={data} country={country} />
       <Footer/>
      </div>
    );
  }
}

export default App;

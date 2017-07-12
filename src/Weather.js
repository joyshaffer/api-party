import React, { Component } from 'react'
import './Weather.css'
import { Route } from 'react-router-dom'
import WeatherInfo from './WeatherInfo'

class Weather extends Component {
    state = {
        zip: '',
    }

    handleChange = (ev) => {
        this.setState({ zip: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/weather/${this.state.zip}`)
        this.setState({ zip: '' })
    }

    render () {
        return (
            <div className="weather">
                <img className="weather-map"
                    src="http://www.ejsweather.com/newton/national.jpg"
                    alt="weather map"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            value={this.state.zip}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look up Weather for ZIP code</button>
                    </div>
                </form>
                <Route path="/weather/:zip" component={WeatherInfo} />
                <Route exact path="/weather" render={() => <h3>Please enter a ZIP code to look at the weather in your area.</h3>} />
            </div>
        )
    }
}

export default Weather 
import React, { Component } from 'react'
import './WeatherInfo.css'

class WeatherInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
        }

        this.fetchUserData(props)
    }

    fetchUserData = (props) => {
        fetch(`api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}${props.match.params.zip}`)
            .then(response => response.json())
            .then(data => {
                const userInfo = {
                    zip: data.zip,
                    weather: data.weather,
                    coord: data.coord,
                }
                this.setState({ userInfo })
            })
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged) {
            this.fetchUserData(nextProps)
        }
    }

    render () {
        return(
            <div className="weather-info">
                <h2>ZIP: {this.state.userName.zip}</h2>
                <h3>Weather: {this.state.userName.weather}</h3>
                <h3>Coordinates: {this.state.userName.coord}</h3>
            </div>
        )
    }
}

export default WeatherInfo
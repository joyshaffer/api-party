import React, { Component } from 'react'
import './WeatherInfo.css'

class WeatherInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
        }

        this.fetchUserData(props)
    }

    fetchUserData = (props) => {
        fetch(`https://openweathermap.org/api/${props.match.params.zip}`)
            .then(response => response.json())
            .then(user => this.setState({ user }, () => console.log(this.state)))
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
                <h2>ZIP: {this.state.user.zip}</h2>
                <h3>Weather: {this.state.user.weather}</h3>
            </div>
        )
    }
}

export default WeatherInfo
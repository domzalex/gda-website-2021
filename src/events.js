import React, { Component } from 'react';
import axios from 'axios';




export default class Events extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('https://gda-backend.herokuapp.com/getEvents').then(res => {
            this.setState({
                data: res.data
            });
        });
    }

    render() {
        const events = this.state.data.map(event => (
            <ul className="event" key={event._id}>
                <li className="event-name">{event.name}</li>
                <li className="event-date">{event.date}</li>
                <li className="event-location">{event.location}</li>
            </ul>
        ));

        return (
            <section className="non-home-section event-section">
                <h1>UPCOMING EVENTS</h1>
                <h2>scroll for more</h2>
                <div className="events-list">
                    <ul className="event-header">
                        <li>EVENT</li>
                        <li>DATE</li>
                        <li>LOCATION</li>
                    </ul>
                    <div className="all-events">
                    {events}
                    </div>
                </div>
            </section>
        );
    }
}






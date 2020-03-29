import React, { Component } from "react";
// import SearchForm from "./SearchForm";
// import ResultList from "./ResultList";
import API from "../../utils/API";
import Detail from "../../components/Detail";

class Adventures extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            currentEvent: 0,
            isLoaded: false
        }
        // this._TogglePrev = this._TogglePrev.bind(this);
        this._ToggleNext = this._ToggleNext.bind(this);
    }


    // When this component mounts, return events within 50 mi of this lat/lon
    componentDidMount() {
        this.getEvents("44.309662,-73.261215");

    }

    getEvents = query => {
        API.events(query)
            .then(res => {
                var events = res.data._embedded.events
                this.setState({
                    events: events,
                    isLoaded: true,
                    currentEvent: 0
                });
                console.log(this.state.events[1]);
            })
            .catch(err => console.log(err));
    };

    _ToggleNext() {
        if(this.state.currentEvent == this.state.events.length - 1)
            return;

        this.setState(prevState => ({
            currentEvent: prevState.currentEvent + 1
        }))
        console.log(this.state.currentEvent)
    }



    render() {
        const { isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        let {currentEvent, events} = this.state;

        return (
            <div>
                {/* <Detail event={this.state.events}
                    
                 />
                 {console.log(this.state.events[0].name)} */}
                {/* {console.log(this.state.events[0])} */}
                {/* {this.state.events.map(individualEvent => <Detail event={individualEvent} /> )} */}
                <button className="toggle toggle--next" style={{backgroundColor: "green"}} onClick={this._ToggleNext}>LIKE</button>

                <Detail event={events[currentEvent]} />

            </div>
        );
    }
}


export default Adventures;
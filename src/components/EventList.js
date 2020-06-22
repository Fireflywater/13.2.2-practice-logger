import React from "react";
import Event from "./Event";
import NewEventForm from "./NewEventForm";

class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allEvents: []
    };
  }

  handleAddingNewEvent = (request) => {
    const newEventList = this.state.allEvents.concat(request);
    this.setState({allEvents: newEventList});
  }

  handleEventCounter = (request) => {
    const newEventList = this.state.allEvents;
    newEventList.forEach(async function(element) {
      if (element.id === request.event.id) {
        element.counter += request.counterDelta;
      }
    })
    this.setState({allEvents: newEventList});
  }

  handleDeleteEvent = (request) => {
    const newEventList = this.state.allEvents.filter(e => e.id !== request.event.id);
    this.setState({allEvents: newEventList});
  }

  render(){
    return (
      <React.Fragment>
        <div>
          <NewEventForm onNewEventCreation={this.handleAddingNewEvent} />
          {this.state.allEvents.map((element, index) =>
            <Event
              name={element.name}
              counter={element.counter}
              key={index}
              id={element.id} /* Is this appropriate? Bah, it works.*/

              onChangeCounter={this.handleEventCounter}
              onDeleteElement={this.handleDeleteEvent}
            />
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default EventList;

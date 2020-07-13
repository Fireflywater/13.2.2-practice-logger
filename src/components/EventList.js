import React from "react";
import Event from "./Event";
import NewEventForm from "./NewEventForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class EventList extends React.Component {
  constructor(props) {
    super(props);
    /*this.state = {
      allEvents: []
    };*/
  }

  handleAddingNewEvent = (request) => {
    const { dispatch } = this.props;
    const { id, name, counter } = request;
    const action = {
      type: 'ADD_EVENT',
      id: id,
      name: name,
      counter: counter
    }
    dispatch(action);
  }

  handleEventCounter = (request) => {
    const { dispatch } = this.props;
    const { id, name, counter } = request.event;
    const action = {
      type: 'ADD_EVENT',
      id: id,
      name: name,
      counter: counter+request.counterDelta
    }
    dispatch(action);
  }

  handleDeleteEvent = (request) => {
    //const newEventList = this.state.allEvents.filter(e => e.id !== request.event.id);
    //this.setState({allEvents: newEventList});
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_EVENT',
      id: request.event.id
    }
    dispatch(action);
  }

  render(){
    return (
      <React.Fragment>
        <div>
          <NewEventForm onNewEventCreation={this.handleAddingNewEvent} />
          {this.props.allEvents.map((element, index) =>
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

EventList.propTypes = {
  allEvents: PropTypes.object
};

const mapStateToProps = state => {
  return {
    allEvents: state
  }
}

EventList = connect(mapStateToProps)(EventList);
export default EventList;

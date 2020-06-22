import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewEventForm(props){

  function handleNewEventSubmit(event) {
    event.preventDefault();
    props.onNewEventCreation({
      name: event.target.name.value,
      counter: 0,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewEventSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Event' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewEventForm.propTypes = {
  onNewEventCreation: PropTypes.func
};

export default NewEventForm;

import React from "react";
import PropTypes from "prop-types";
import './Event.css';

function Event(props) {

  function changeCounter(event) {
    event.preventDefault();
    props.onChangeCounter({
      counterDelta: parseInt(event.target.counterDelta.value),
      event: props
    });
  }

  function deleteElement(event) {
    event.preventDefault();
    props.onDeleteElement({
      event: props
    });
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2">
          <form className="inlineForm" onSubmit={changeCounter}>
            <input
              type='hidden'
              name='counterDelta'
              value={-1} />
            <button type='submit'>-</button>
          </form>
          <div className="inlineForm text-center">
            <h4>{props.counter}</h4>
          </div>
          <form className="inlineForm" onSubmit={changeCounter}>
            <input
              type='hidden'
              name='counterDelta'
              value={1} />
            <button type='submit'>+</button>
          </form>
        </div>
        <div className="col-md-9">
          <h3>{props.name}</h3>
        </div>
        <div className="col-md-1">
          <form className="inlineForm" onSubmit={deleteElement}>
            <button type='submit'>D</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  onChangeCounter: PropTypes.func,
  onDeleteElement: PropTypes.func
};

export default Event;

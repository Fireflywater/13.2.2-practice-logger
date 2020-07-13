import eventListReducer from '../../reducers/event-list-reducer';

describe('eventListReducer', () => {

  const currentState = {
    1: {name: 'TestEvent1',
    counter: 2,
    id: 1 },
    2: {name: 'TestEvent2',
    counter: 4,
    id: 2 }
  }

  let action;
  const eventData = {
    name: 'TestEvent1',
    counter: 2,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(eventListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new event data to allEvents', () => {
    const { name, counter, issue, id } = eventData;
    action = {
      type: 'ADD_EVENT',
      name: name,
      counter: counter,
      id: id
    };

    expect(eventListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        counter: counter,
        id: id
      }
    });
  });

  test('Should successfully delete an event', () => {
    action = {
      type: 'DELETE_EVENT',
      id: 1
    };
    
    expect(eventListReducer(currentState, action)).toEqual({
      2: {name: 'TestEvent2',
      counter: 4,
      id: 2 }
    });
  });
});

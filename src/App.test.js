import expect from 'expect';
import reducers from '../../reducers';
import {describe, it} from 'mocha'

const test = describe('reducers', () => {
  it('should handle actions', () => {
    let state;
    state = reducers(undefined, {});
    expect(state).toEqual({todos:[{id:'H7YlUJAGCtI4ieM9cijd4',content:'Buy groceries',checked:false},{id:'H7YlUJAGCtI4ieM9cijd4',content:'Walk the dog',checked:true},{id:'H7YlUJAGCtI4ieM9cijd4',content:'Do laundry',checked:false},{id:'H7YlUJAGCtI4ieM9cijd4',content:'Clean the house',checked:true},{id:'H7YlUJAGCtI4ieM9cijd4',content:'Mow the lawn',checked:false}]});
  });
});
console.log(test)
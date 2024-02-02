import React from 'react';

class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tagged: false,
        firstInput: '',
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
    handleClick(e) {
      this.setState({ tagged: true });
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    render() {
      const { firstInput, tagged } = this.state;
      return (
        <div id="id">
          {tagged && <p>{firstInput}</p> }
          <input 
            value={firstInput} 
            name="firstInput"
            onChange={this.handleChange} 
            type="text" />

          <button onClick={(e) => this.handleClick(e)}>
            {tagged ? 'Type' : 'Start '}
          </button>
        </div>
      )
    }
  }

export const Message = () => {
    return new ControlledInput()
}
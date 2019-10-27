import React, { Component, Fragment } from 'react';
import { Header, Button, Form, Radio } from 'semantic-ui-react';

export class PollQuestion extends Component {
  state = {
    value: ''
  };
  
  handleChange = (e, { value }) => this.setState({ value });
  
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value !== '') {
      this.props.onSubmit(this.state.value);
    }
  };
  
  render() {
    const { optionOne, optionTwo } = this.props;
    const disabled = this.state.value === '' ? true : false;
    
    return (
        <Fragment>
          <Header as="h4">Would you rather</Header>
          
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Radio
                  label={optionOne.text}
                  name="radioGroup"
                  value="this"
                  checked={this.state.value === 'opt1'}
                  onChange={this.handleChange}
              />
              <br />
              <Radio
                  label={optionTwo.text}
                  name="radioGroup"
                  value="that"
                  checked={this.state.value === 'opt2'}
                  onChange={this.handleChange}
              />
            </Form.Field>
            
            <Form.Field>
              <Button
                  fluid
                  disabled={disabled}
                  content="Submit"
              />
            </Form.Field>
          </Form>
        </Fragment>
    );
  }
}

export default PollQuestion;

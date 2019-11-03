import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {Header, Button} from 'semantic-ui-react';

export class PollTeaser extends Component {
  state = {
    viewPoll: false
  };
  
  handleClick = e => {
    this.setState(prevState => ({
      viewPoll: !prevState.viewPoll
    }));
  };
  
  render() {
    const {
      question,
      unanswered} = this.props;
    const buttonContent = unanswered === true ? 'Answer Poll' : 'Results';
    
    if (this.state.viewPoll === true) {
      return <Redirect push to={`/questions/${question.id}`} />;
    }
    return (
      <Fragment>
        <Header as="h5" textAlign="left">
          Would you rather
        </Header>
        <p style={{textAlign: 'center'}}>
          {question.optionOne.text}
          <br />
          or... </p>
        <Button fluid onClick={this.handleClick} content={buttonContent} />
      </Fragment>
    );
  }
}

PollTeaser.propTypes = {
  question: PropTypes.object.isRequired,
  unanswered: PropTypes.bool.isRequired
};

export default PollTeaser;
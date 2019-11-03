import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  Header,
  Segment,
  Progress,
  Label,
  Button,
  Icon
} from 'semantic-ui-react';

const YourVoteLabel = () => (
  <Label color="orange"
         ribbon="right"
         className="vote">
    <Icon name="check circle outline"
          size="big"
          className="compact" />
    <div style={{float: 'right'}}>
      Your<br />Vote
    </div>
  </Label>
);

export class PollResult extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
  };
  
  handleClick = () => {
    this.props.history.push('/');
  };
  
  render() {
    const {question, user} = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const votesTotal = optionOneVotes + optionTwoVotes;
    const userVote = user.answers[question.id];
    
    return (
      <Fragment>
        <Header as="h3">
          Results:
          <Header.Subheader style={{fontWeight: 'bold'}}>
            Would you rather
          </Header.Subheader>
        </Header>
        <Segment>
          {userVote === 'optionOne' && <YourVoteLabel />}
          <p style={{fontWeight: 'bold'}}>{question.optionOne.text}</p>
          <Progress percent={((optionOneVotes / votesTotal) * 100).toFixed(2)} progress>
            {optionOneVotes} out of {votesTotal} votes
          </Progress>
        </Segment>
        <Segment>
          {userVote === 'optionTwo' && <YourVoteLabel />}
          
          <p style={{fontWeight: 'bold'}}>{question.optionTwo.text}</p>
          <Progress percent={((optionTwoVotes / votesTotal) * 100).toFixed(2)} progress>
            {optionTwoVotes} out of {votesTotal} votes
          </Progress>
        </Segment>
        {/* <Form.Field> */}
        <Button floated="right" onClick={this.handleClick}>
          Back
        </Button>
      </Fragment>
    );
  }
}

function mapStateToProps({users, authUser}) {
  const user = users[authUser];
  return {
    user
  };
}

export default withRouter(connect(mapStateToProps)(PollResult));
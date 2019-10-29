import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Segment, Header, Grid, Image} from 'semantic-ui-react';
import PollQuestion from './PollQuestion';
import PollResult from './PollResult';
import PollTeaser from './PollTeaser';

const pollTypes = {
  POLL_TEASER: 'POLL_TEASER',
  POLL_QUESTION: 'POLL_QUESTION',
  POLL_RESULT: 'POLL_RESULT'
};

const PollContent = props => {
  const {pollType, question, unanswered} = props;
  
  switch (pollType) {
    case pollTypes.POLL_TEASER:
      return <PollTeaser question={question} unanswered={unanswered} />;
    case pollTypes.POLL_QUESTION:
      return <PollQuestion question={question} />;
    case pollTypes.POLL_RESULT:
      return <PollResult question={question} />;
    default:
      return;
  }
};

export class UserCard extends Component {
  render() {
    const {author, question, pollType, unanswered = null} = this.props;
    
    return (
        <Segment.Group>
          <Header as="h5" textAlign="left" block attached="top">
            {author.name} asks:
          </Header>
          
          <Grid divided padded>
            <Grid.Row>
              <Grid.Column width={5}>
                <Image circular src={author.avatarURL} />
              </Grid.Column>
              <Grid.Column width={11}>
                <PollContent pollType={pollType} question={question} unanswered={unanswered} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
    );
  }
  
  static propTypes = {
    question: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired,
    pollType: PropTypes.string.isRequired,
    unanswered: PropTypes.bool,
    question_id: PropTypes.string
  };
}

function mapStateToProps(
    {users, questions, authUser},
    {match, question_id}
) {
  let question, pollType;
  if (question_id !== undefined) {
    question = questions[question_id];
    pollType = pollTypes.POLL_TEASER;
  } else {
    const {question_id} = match.params;
    question = questions[question_id];
    const user = users[authUser];
    pollType = pollTypes.POLL_QUESTION;
    if (Object.keys(user.answers).includes(question.id)) {
      pollType = pollTypes.POLL_RESULT;
    }
  }
  const author = users[question.author];
  
  return {
    question,
    author,
    pollType
  };
}

export default connect(mapStateToProps)(UserCard);
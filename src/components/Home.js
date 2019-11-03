import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  Tab,
  Message} from 'semantic-ui-react';
import UserCard from './UserCard';

const panes = props => {
  const {userQuestionData} = props;
  return [
    {
      menuItem: 'Unanswered',
      render: () => (
        <Tab.Pane>
          {userQuestionData.answered.length === 0
              ? <Message color='green'>Congratulations! You have answered all the questions!</Message>
              : null
          }
          {userQuestionData.answered.map(question => (
            <UserCard key={question.id}
                      question_id={question.id}
                      unanswered={true} />
          ))}
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Answered',
      render: () => (
        <Tab.Pane>
          {userQuestionData.unanswered.length === 0
              ? <Message color='orange'>You have not answered any questions yet.<br />Please go to 'Unanswered' Tab and answer some would you rather questions.</Message>
              : null
          }
          {userQuestionData.unanswered.map(question => (
            <UserCard key={question.id}
                      question_id={question.id}
                      unanswered={false} />
          ))}
        </Tab.Pane>
      )
    }
  ];
};

export class Home extends Component {
  render() {
    const {userQuestionData} = this.props;
    return <Tab panes={panes({userQuestionData})}
                className="tab" />;
  }
}

function mapStateToProps({authUser, users, questions}) {
  const answeredIds = Object.keys(users[authUser].answers);
  const answered = Object.values(questions)
      .filter(question => !answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
      .filter(question => answeredIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);
  
  return {
    userQuestionData: {
      answered,
      unanswered
    }
  };
}

Home.propTypes = {
  userQuestionData: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Home);
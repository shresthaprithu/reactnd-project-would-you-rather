import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'semantic-ui-react';
import { Question } from './Question';

// sample data
const userQuestionData = {
  unanswered: [
    {
      qid: 1,
      author: 'Christian',
      avatar: 'christian.jpg',
      question: 'Option 1'
    },
    {
      qid: 2,
      author: 'Daniel',
      avatar: 'daniel.jpg',
      question: 'Option 1'
    },
    {
      qid: 3,
      author: 'Elliot',
      avatar: 'elliot.jpg',
      question: 'Option 1'
    }
  ],
  answered: [
    {
      qid: 4,
      author: 'Elyse',
      avatar: 'elyse.png',
      question: 'Option 1'
    },
    {
      qid: 5,
      author: 'Helen',
      avatar: 'helen.jpg',
      question: 'Option 1'
    },
    {
      qid: 6,
      author: 'Jenny',
      avatar: 'jenny.jpg',
      question: 'Option 1'
    }
  ]
};

const panes = props => [
  {
    menuItem: 'Unanswered',
    render: () => (
        <Tab.Pane>
          {userQuestionData.unanswered.map(question => (
              <Question
                  key={question.qid}
                  {...question}
                  unanswered={true}
                  {...props}
              />
          ))}
        </Tab.Pane>
    )
  },
  {
    menuItem: 'Answered',
    render: () => (
        <Tab.Pane>
          {userQuestionData.answered.map(question => (
              <Question
                  key={question.qid}
                  {...question}
                  unanswered={false}
                  {...props}
              />
          ))}
        </Tab.Pane>
    )
  }
];

export class Home extends Component {
  render() {
    return <TabControl onSetResult={this.props.onSetResult} />;
  }
  
  static propTypes = {
    onSetResult: PropTypes.func.isRequired
  };
}

class TabControl extends Component {
  render() {
    return <Tab panes={panes(this.props)} className="tab" />;
  }
}

export default Home;

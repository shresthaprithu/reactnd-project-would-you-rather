import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Tab, Menu } from 'semantic-ui-react';
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
    // menuItem: 'Unanswered',
    menuItem: () => (
        <Menu.Item
            key="Unanswered"
            name="Unanswered"
            as={Link}
            to="/unanswered"
        />
    ),
    render: () => (
        <Tab.Pane>
          {userQuestionData.unanswered.map(question => (
              <Question
                  key={question.author}
                  {...question}
                  unanswered={true}
                  {...props}
                  // onSetResult={props.onSetResult}
              />
          ))}
        </Tab.Pane>
    )
  },
  {
    // menuItem: 'Answered',
    menuItem: () => (
        <Menu.Item key="Answered" name="Answered" as={Link} to="/answered" />
    ),
    render: () => (
        <Tab.Pane>
          {userQuestionData.answered.map(question => (
              <Question
                  key={question.author}
                  {...question}
                  unanswered={false}
                  {...props}
              />
          ))}
        </Tab.Pane>
    )
  }
];

class TabControl extends Component {

  handleCallToRouter = value => {
    console.log(
        'this.props.history.location.pathname',
        this.props.history.location.pathname
    );
  };
  render() {
    return (
        <Tab
            panes={panes(this.props)}
            className="tab"
            onTabChange={this.handleCallToRouter}
        />
    );
  }
  
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
}

// export default TabControl;
export default withRouter(TabControl);

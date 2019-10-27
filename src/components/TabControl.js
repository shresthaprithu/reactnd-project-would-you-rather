import React, { Component } from 'react';
import { Tab, Grid } from 'semantic-ui-react';
import { Question } from './Question';

const questionData = {
  unanswered: [
    {
      user: 'Kristy',
      avatar: 'kristy.png',
      question: 'Option 1'
    }
  ],
  answered: [
    {
      user: 'Chris',
      avatar: 'chris.jpg',
      question: 'Option 1'
    }
  ]
};

const panes = [
  {
    menuItem: 'Unanswered',
    render: () => (
        <Tab.Pane>
          {questionData.unanswered.map(question => (
              <Question key={question.user} {...question} />
          ))}
        </Tab.Pane>
    )
  },
  {
    menuItem: 'Answered',
    render: () => (
        <Tab.Pane>
          {questionData.answered.map(question => (
              <Question key={question.user} {...question} />
          ))}
        </Tab.Pane>
    )
  }
];

export class TabControl extends Component {
  render() {
    return (
        <Grid padded="vertically" columns={1} centered>
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 550 }}>
              <Tab panes={panes} className="tab" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default TabControl;

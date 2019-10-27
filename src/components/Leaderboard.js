import React, { Component, Fragment } from 'react';
import {
  Segment,
  Grid,
  Header,
  Image,
  Label,
  Divider,
} from 'semantic-ui-react';

const cupColour = ['yellow', 'grey', 'orange'];

// test sample data
const leaderboardData = [
  {
    id: 'laura',
    name: 'Laura',
    avatar: 'laura.jpg',
    answerCount: 11,
    questionCount: 4
  },
  {
    id: 'matt',
    name: 'Matt',
    avatar: 'matt.jpg',
    answerCount: 7,
    questionCount: 4
  },
  {
    id: 'matthew',
    name: 'Matthew',
    avatar: 'matthew.png',
    answerCount: 4,
    questionCount: 3
  }
];

// test sample data
const users = {
  molly: {
    id: 'molly',
    name: 'Molly',
    // avatarURL: ,
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo',
      am8ehyc8byjqgar0jgpub9: 'optionTwo',
      loxhs1bqm25b708cmbf3g: 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  nan: {
    id: 'nan',
    name: 'Nan',
    // avatarURL: ,
    answers: {
      vthrdm985a262al8qx3do: 'optionOne',
      xj352vofupe1dqz9emx13r: 'optionTwo'
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  },
  nom: {
    id: 'nom',
    name: 'Nom',
    // avatarURL: ,
    answers: {
      xj352vofupe1dqz9emx13r: 'optionOne',
      vthrdm985a262al8qx3do: 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
  }
};

export class Leaderboard extends Component {
  componentDidMount = () => {
    
    console.log(users);
    console.log('Object.keys(users)', Object.keys(users));
    console.log('Object.values(users)', Object.values(users));
    
    // shape data
    const newArr = Object.values(users)
        .map(user => ({
          name: user.name,
          answerCount: Object.values(user.answers).length,
          questionCount: user.questions.length,
          total: Object.values(user.answers).length + user.questions.length
        }))
        .sort((a, b) => a.total - b.total)
        .reverse();
    
    console.log('newArr', newArr);
  };
  
  render() {
    return (
        <Fragment>
          {leaderboardData.map((user, idx) => (
              <Segment.Group key={user.id}>
                <Label corner="left" icon="trophy" color={cupColour[idx]} />
                <Grid divided padded>
                  <Grid.Row>
                    <Grid.Column width={4} verticalAlign="middle">
                      <Image circular src={`/images/avatar/${user.avatar}`} />
                    </Grid.Column>
                    
                    <Grid.Column width={8}>
                      <Header as="h3" textAlign="left">
                        {user.name}
                      </Header>
                      <Grid>
                        <Grid.Column width={12}>Answered questions</Grid.Column>
                        <Grid.Column width={4}>{user.answerCount}</Grid.Column>
                      </Grid>
                      <Divider />
                      <Grid>
                        <Grid.Column width={12}>Created questions</Grid.Column>
                        <Grid.Column width={4}>{user.questionCount}</Grid.Column>
                      </Grid>
                    </Grid.Column>
                    
                    <Grid.Column width={4} textAlign="center">
                      <Segment.Group>
                        <Header as="h5" block attached="top" content="Score" />
                        <Segment>
                          <Label circular color="green" size="big">
                            {user.questionCount + user.answerCount}
                          </Label>
                        </Segment>
                      </Segment.Group>
                    </Grid.Column>
                    
                  </Grid.Row>
                </Grid>
              </Segment.Group>
          ))}
        </Fragment>
    );
  }
}

export default Leaderboard;
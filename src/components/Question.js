import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Segment, Grid, Header, Button, Image } from 'semantic-ui-react';

export class Question extends Component {

  state = {
    viewPoll: false
  };
  
  handleClick = e => {
    this.props.onSetResult(!this.props.unanswered);
    
    this.setState(prevState => ({
      viewPoll: !prevState.viewPoll
    }));
  };
  
  render() {
    const { avatar, author, question, qid, unanswered } = this.props;
    
    if (this.state.viewPoll === true) {
      return <Redirect push to={`/questions/${qid}`} />;
    }
    
    return (
        <Segment.Group>
          <Header
              as="h5"
              textAlign="left"
              block
              attached="top"
          >
            {author} asks:
          </Header>
          
          <Grid divided padded>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image src={`/images/avatar/${avatar}`} />
              </Grid.Column>
              
              <Grid.Column width={12} textAlign="center">
                <Header as="h5" textAlign="left">
                  Would you rather
                </Header>
                
                <p>
                  {question}
                  <br />
                  or...
                </p>
                
                <Button
                    fluid
                    onClick={this.handleClick}>
                  {unanswered === true ? 'Answer Poll' : 'Results'}
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment.Group>
    );
  }
  
  static propTypes = {
    qid: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    unanswered: PropTypes.bool.isRequired,
    onSetResult: PropTypes.func.isRequired
  };
}

export default Question;

import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Header,
  Segment,
  Progress,
  Label,
  Button,
  Icon
} from 'semantic-ui-react';

export class PollResult extends Component {
  handleClick = () => {
    this.props.history.push('/');
  };
  
  render() {
    const { optionOne, optionTwo } = this.props;
    // console.log('this.props', this.props);
    
    return (
        <Fragment>
          <Header as="h3">Results:</Header>
          <Segment>
            <Label color="orange" ribbon="right" className="vote">
              <Icon name="check circle outline" size="big" className="compact" />
              <div style={{ float: 'right' }}>
                Your<br />Vote
              </div>
            </Label>
            <p style={{ fontWeight: 'bold' }}>{optionOne.text}</p>
            <Progress percent={((2 / 3) * 100).toFixed(2)} progress color="green">
              2 out of 3 votes
            </Progress>
          </Segment>
          
          <Segment>
            <p style={{ fontWeight: 'bold' }}>{optionTwo.text}</p>
            <Progress percent={((1 / 3) * 100).toFixed(2)} progress>
              1 out of 3 votes
            </Progress>
          </Segment>
          
          <Button floated="right" onClick={this.handleClick}>Back</Button>
        </Fragment>
    );
  }
}

export default withRouter(PollResult);

import React, {Component} from 'react';
import {
  Container,
  Header} from 'semantic-ui-react';

export class NoMatch extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Header as="h3">No match error</Header>
        <p>The question you searched could not be found. Please try again.</p>
      </Container>
    );
  }
}

export default NoMatch;
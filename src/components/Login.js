import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Grid,
  Header,
  Image,
  Form,
  Loader,
  Dimmer
} from 'semantic-ui-react';

// sample data
const navUsers = {
  ade: {
    id: 'ade',
    name: 'Ade',
    avatar: {
      name: 'ade',
      src: '/images/avatar/ade.jpg'
    }
  },
  chris: {
    id: 'chris',
    name: 'Chris',
    avatar: {
      name: 'chris',
      src: '/images/avatar/chris.jpg'
    }
  },
  christian: {
    id: 'christian',
    name: 'Christian',
    avatar: {
      name: 'christian',
      src: '/images/avatar/christian.jpg'
    }
  },
};

const src = '/images/image.png';

export class Login extends Component {
  state = {
    value: '',
    loading: false
  };
  
  onChange = (e, { value }) => {
    this.setState({ value });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    new Promise((res, rej) => {
      this.setState({ loading: true });
      setTimeout(() => res(), 1000);
    }).then(() => this.props.onLogin(this.state.value));
  };
  
  generateDropdownData = () => {
    return Object.values(navUsers).map(user => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatar.src }
    }));
  };
  
  render() {
    const { value } = this.state;
    const disabled = value === '' ? true : false;
    
    return (
        <Fragment>
          <Segment.Group stacked style={{maxWidth : '640px', margin : '10% auto'}}>
            <Header as="h4" block attached="top" textAlign="center">
              <Header.Content>
                Welcome to the Would You Rather App!
              </Header.Content>
              <Header.Subheader>Please sign in to continue</Header.Subheader>
            </Header>
            {this.state.loading === true && (
                <Dimmer active inverted>
                  <Loader inverted content="Loading" />
                </Dimmer>
            )}
            <Grid padded textAlign="center">
              <Grid.Row className="login">
                <Grid.Column width={16}>
                  <Image src={src} size='medium' centered/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="login">
                <Grid.Column>
                  <Header as="h2" color="green">
                    Sign In
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="login">
                <Grid.Column>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Dropdown
                        placeholder="Select user"
                        fluid
                        selection
                        scrolling
                        options={this.generateDropdownData()}
                        value={value}
                        onChange={this.onChange}
                        required
                    />
                    <Form.Button
                        content="Login"
                        disabled={disabled}
                        fluid
                    />
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment.Group>
        </Fragment>
    );
  }
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  };
}

export default Login;
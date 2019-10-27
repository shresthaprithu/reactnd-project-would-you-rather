import React, { Component } from 'react';
import {
  Menu,
  Header,
  Image,
  Button,
  Container
} from 'semantic-ui-react';

export class Nav extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Container>
  
  
        <Menu secondary>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="new poll"
            active={activeItem === 'new poll'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="leader board"
            active={activeItem === 'leader board'}
            onClick={this.handleItemClick}
          />
          
          
          <Menu.Menu position="right">
            <Menu.Item>
              <Header as='h3'>
                <Image src='./src/images/avatar/jenny.jpg' avatar centered />
                chris
              </Header>
            </Menu.Item>
            <Menu.Item>
              <Button
                content="Logout"
                labelPosition="right"
              />
            </Menu.Item>
          </Menu.Menu>
          
          
        </Menu>
      </Container>
    );
  }
}

export default Nav;

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {
  Menu,
  Header,
  Image,
  Button,
  Container
} from 'semantic-ui-react';

export class Nav extends Component {
  state = {activeItem: 'home'};
  
  handleItemClick = (e, {name}) => this.setState({activeItem: name});
  
  handleLogout = e => {
    e.preventDefault();
    this.props.onLogout();
  };
  
  render() {
    return (
        <Container>
          
          <Menu secondary>
            
            <Menu.Item name="home" as={NavLink} to="/" exact />
            <Menu.Item name="new poll" as={NavLink} to="/add" />
            <Menu.Item name="leader board" as={NavLink} to="/leaderboard" />
            
            <Menu.Menu position="right">
              <Menu.Item>
                <Header as='h3'>
                  <Image circular src='/images/avatar/jenny.jpg' avatar centered />
                  chris
                </Header>
              </Menu.Item>
              
              <Menu.Item>
                <Button content="Logout" labelPosition="right" onClick={this.handleLogout} />
              </Menu.Item>
            </Menu.Menu>
          
          </Menu>
        </Container>
    );
  }
}

export default Nav;

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  Menu,
  Header,
  Image,
  Button,
  Container
} from 'semantic-ui-react';
import {setAuthUser} from '../actions/authUser';

export class Nav extends Component {
  
  handleLogout = e => {
    e.preventDefault();
    this.props.setAuthUser(null);
  };
  
  render() {
    const {authUser, users} = this.props;
    return (
        <Container>
          
          <Menu secondary>
            
            <Menu.Item name="home" as={NavLink} to="/" exact />
            <Menu.Item name="new poll" as={NavLink} to="/add" />
            <Menu.Item name="leader board" as={NavLink} to="/leaderboard" />
            
            <Menu.Menu position="right">
              <Menu.Item>
                <Header as='h3'>
                  <Image circular src={users[authUser].avatarURL} avatar centered />
                  {users[authUser].name}
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

function mapStateToProps({users, authUser}) {
  return {
    authUser,
    users
  };
}

export default connect(
    mapStateToProps,
    {setAuthUser}
)(Nav);

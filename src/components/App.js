import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Nav from './Nav';
import Home from './Home';
import NewPoll from './NewPoll';
import Leaderboard from './Leaderboard';
import Login from './Login';
import NoMatch from './NoMatch';
import PollContainer from './PollContainer';

// sample data
const questionData = {
  qid: 2,
  author: 'justen',
  avatar: 'justen.jpg',
  optionOne: {
    votes: ['chris', 'kristy'],
    text: 'Option 2'
  },
  optionTwo: {
    votes: ['ade'],
    text: 'Option 1'
  }
};

class App extends Component {
  
  state = {
    authUser: false,
    showResult: false
  };
  
  handleLogin = () => {
    this.setState(prevState => ({
      authUser: !prevState.authUser
    }));
  };
  
  setResult = showResult => {
    this.setState({
      showResult: showResult
    });
  };
  
  render() {
    return (
        <Router>
          <div className="App">
            {this.state.authUser === true ? (
                <Fragment>
                  <Nav onLogout={this.handleLogin} />
                  <ContentGrid>
                    <AppRoutes
                        setResult={this.setResult}
                        showResult={this.state.showResult}
                    />
                  </ContentGrid>
                </Fragment>
            ) : (
                <Route render={() => <Login onLogin={this.handleLogin} />} />
            )}
          </div>
        </Router>
    );
  }
}

const ContentGrid = ({ children }) => (
    <Grid padded="vertically" columns={1} centered>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 640 }}>
          {children}
        </Grid.Column>
      </Grid.Row>
    </Grid>
);

const AppRoutes = props => (
    <Switch>
      
      <Route
          exact
          path="/"
          render={() => <Home onSetResult={props.setResult} />}
      />
      
      <Route
          path="/questions/:question_id"
          render={() => (
              <PollContainer {...questionData} showResult={props.showResult} />
          )}
      />
      
      <Route path="/add" component={NewPoll} />
      
      <Route path="/leaderboard" component={Leaderboard} />
      
      <Route component={NoMatch} />
      
    </Switch>
);

export default App;

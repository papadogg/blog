import React, { Component } from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom' ;

import Header from './Header';
import Login from './Login';
import Posts from './Posts';
import NewPost from './NewPost';

class App extends Component {
  
  render() {
    return (
      <div>
         <Router>
          <div>
            <Header />
            <div className="container">
              <Route exact path="/" component={Posts} />
              <Route path="/login" component={Login} />
              <Route path="/new" component={NewPost} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

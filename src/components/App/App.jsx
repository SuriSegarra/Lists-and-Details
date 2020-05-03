import React from 'react';
import Header from '../Header/Header';
import CharactersViewer from '../../Containers/CharacterViewer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from '../../Containers/Detail';
export default function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/character/:id' component={Detail}/>
          <Route exact path='/' component={CharactersViewer}/>
        </Switch>
      </Router>
      {/* <CharactersViewer/> */}

    </div>
  );
}

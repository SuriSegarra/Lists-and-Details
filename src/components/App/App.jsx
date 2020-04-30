import React from 'react';
import Header from './Header';
import CharactersViewer from '../../Containers/CharacterViewer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Character from '../Detail/Character';
export default function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/character/:id' component={Character}/>
          <Route exact path='/' component={CharactersViewer}/>
        </Switch>
      </Router>
      {/* <CharactersViewer/> */}

    </div>
  );
}

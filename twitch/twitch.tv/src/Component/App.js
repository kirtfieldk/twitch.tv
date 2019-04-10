import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamShow from './Streams/StreamShow';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import Header from './Header';
import history from './History';


const App = () =>{
    return(
         <div className = 'ui container'>
             
             <Router history = {history}>
             <Header />
              <div>
                  <Switch>
                    <Route path = '/' exact component = {StreamList} />
                    <Route path = '/stream/create' exact component = {StreamCreate} />
                    {/*The ':' lets the router know that it is a variable  */}
                    <Route path = '/stream/edit/:id' exact component = {StreamEdit} />
                    <Route path = '/stream/delete/:id' exact component = {StreamDelete} />
                    <Route path = '/stream/:id' exact component = {StreamShow} />
                  </Switch>
              </div>
             </Router>
         </div>
    )
}
export default App;
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamShow from './Streams/StreamShow';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import Header from './Header';


const App = () =>{
    return(
         <div className = 'ui container'>
             
             <BrowserRouter>
             <Header />
              <div>
                  <Route path = '/' exact component = {StreamList} />
                  <Route path = '/stream/create' exact component = {StreamCreate} />
                  <Route path = '/stream/edit' exact component = {StreamEdit} />
                  <Route path = '/stream/delete' exact component = {StreamDelete} />
                  <Route path = '/stream/show' exact component = {StreamShow} />
              </div>
             </BrowserRouter>
         </div>
    )
}
export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/index.scss';
import {BrowserRouter} from 'react-router-dom';
import store from './Components/Redux/store';
import {Provider} from 'react-redux';


ReactDOM.render(

    <BrowserRouter>
    <Provider store = {store}> 
    <App/>
    </Provider>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

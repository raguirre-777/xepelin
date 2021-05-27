import React from 'react';
import ReactDOM from 'react-dom';
import './styles/antd.css';
import App from './pages/web';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter> 
          <Switch>
              <Route exact component={App} />           
           </Switch>
         </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

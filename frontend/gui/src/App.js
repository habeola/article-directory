import React from 'react';
//import logo from './logo.svg'--------<img src={logo} className="App-logo" alt="logo" />;
import {BrowserRouter as Router} from 'react-router-dom'
import BaseRouter from './routes';
import './App.css';
import 'antd/dist/antd.css';
import SiderDemo from './containers/Layout';


function App() {
  return (
    <div className="">
      <Router>
        <SiderDemo>
          <BaseRouter />
        </SiderDemo>
      </Router>
    </div>
     
  );
}

export default App;

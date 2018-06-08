import React, { Component } from 'react';
import './App.css';
import {Link,Route} from 'react-router-dom'
import Tabelharga from './component/Tabelharga'
import Konversibit from './component/Konversibit'
import Konversirp from './component/Konversirp'

class App extends Component {
  render() {
    return (
      <div className='container all' >
        <div className='row'>
          <div className='col-md-3'></div>
          
          <div className='col-md-6'>
            <div className='col-md-12'>
              <img src="https://www.blockchain.com/assets/img/bc-name-and-logo-dark-blue.svg" alt="" />
            </div>
          
            <div className='col-md-12' style={{marginTop: 50}}>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <Link to='/tabelharga' class="nav-link active" >TABEL </Link>
                </li>
                <li class="nav-item">
                  <Link to='/konversirp' class="nav-link" >RP TO BITCOIN </Link>
                </li>
                <li class="nav-item">
                  <Link to='/konversibit' class="nav-link" >BITCOIN TO RP </Link>
                </li>
              </ul>
            </div>

            <div className='col-md-12' style={{marginTop: 50}}>
              <Route path='/' component={'Home'} />
              <Route path='/tabelharga' component={Tabelharga} />
              <Route path='/konversirp' component={Konversirp} />
              <Route path='/konversibit' component={Konversibit} />
            </div>
          </div>

          <div className='col-md-3'></div>
        </div>
      </div>
    );
  }
}

export default App;
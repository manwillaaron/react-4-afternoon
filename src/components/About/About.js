import React, { Component } from 'react';
import {Link, Switch,Route} from 'react-router-dom'
import History from '../History/History'
import Contact from '../Contact/Contact'



export default class About extends Component {
 
  render() {
   
      
    return (
      <div>
        <div className='subnav'>
            <Link to='/about' className= 'subnav_links'>
              <h3>About</h3>
              {this.aboutP}
            </Link>
            <Link to='/about/history' className= 'subnav_links'>
              <h3>History</h3>
            </Link>
            <Link to='/about/contact' className= 'subnav_links'>
              <h3>Contact</h3>
            </Link>
            </div>
        <div>
        <Switch>
            <Route path='/about/history' component={History}></Route>
            <Route path = '/about/contact' component={Contact}></Route>
            <Route 
            path = '/about'
            render={()=>(
              <div>
                <h1>About</h1>
                <p>
                  This college is great!
                </p>
              </div>
            )}
            />
          </Switch>
        </div>    
      </div>
      
      
    )
  }
}
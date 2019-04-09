import React, { Component } from 'react';
import  { fetchEntries } from '../actions/entriesActions';
import Home from '../components/Home';
// import About from '../components/About';


class Content extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

//add state and props 
 
//component: has a form to enter data Name, Email, Entry.title, Entry.content, 

//right now, just bring all the entries in, possible to add user: state.user.current, if I require login. 
const mapStateToProps = state => {
  return {
    entries: state.entries.all
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllEntries
})

export default (mapStateToProps, mapDispatchToProps)(Content); 
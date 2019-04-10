import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchAllEntries } from '../actions/entriesActions';
import Home from '../components/Home';
import AllEntries from '../components/AllEntries';



class Content extends Component {

  componentWillMount() {
      fetchAllEntries();
  };

 
  render() {
    return (
      <div>
        <Home />
        <AllEntries />
      </div>
    )
  }
}
 
const mapStateToProps = state => {
  return {
    entries: state.entries
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllEntries
})

export default connect(mapStateToProps, mapDispatchToProps)(Content); 



//component: has a form to enter data Name, Email, Entry.title, Entry.content, 

//right now, just bring all the entries in, possible to add user: state.user.current, if I require login. 
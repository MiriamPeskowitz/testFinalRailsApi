//fetch data here, since the container is the smart component 


import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchAllEntries } from '../actions/entriesActions';

import Home from '../components/Home';
import AllEntries from '../components/AllEntries';
import Story from '../components/Story';


class Content extends Component {

  componentDidMount() {
    this.props.fetchAllEntries();
  };


  render() {
    return (
      <div>
       {/* <Home />
        <About />
        <AllEntries on/>*/}
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




//right now, just bring all the entries in, possible to add user: state.user.current, if I require login. 